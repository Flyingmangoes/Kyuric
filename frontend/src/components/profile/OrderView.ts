import type { OrderModel, OrderItemModel } from '@/lib/models/Order'
import type { ProductSummary } from '@/lib/models/Product'
import type { UserModel } from '@/lib/models/User'
import type { Shipment } from '@/lib/models/Shipment'
import type { OrderRow, OrderStage } from '@/lib/models/Order'

type ProductLookup = (id: string) => ProductSummary | undefined

export function toStage(status: string): OrderStage {
  const s = status.trim().toLowerCase().replace(/[\s-]+/g, '_')
  if (['delivered', 'completed'].includes(s)) return 'delivered'
  if (['shipped', 'in_transit', 'dispatched'].includes(s)) return 'in_transit'
  if (['processing', 'paid', 'packed'].includes(s)) return 'processing'
  if (['cancelled', 'canceled', 'refunded'].includes(s)) return 'cancelled'
  return 'placed'
}

const STAGE_LABEL: Record<OrderStage, string> = {
  placed: 'PLACED',
  processing: 'PROCESSING',
  in_transit: 'IN TRANSIT',
  delivered: 'DELIVERED',
  cancelled: 'CANCELLED',
}

const STAGE_ACTION: Record<OrderStage, string> = {
  placed: 'Details',
  processing: 'Details',
  in_transit: 'Track',
  delivered: 'Review',
  cancelled: 'Re-order',
}

const CURRENCY_LOCALE: Record<UserModel['currency'], string> = {
  usd: 'en-US',
  idr: 'id-ID',
  jpy: 'ja-JP',
  eur: 'de-DE',
}

export const formatMoney = (value: number, currency: UserModel['currency']) =>
  new Intl.NumberFormat(CURRENCY_LOCALE[currency], {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(value)

const isValid = (iso: string) => !!iso && !Number.isNaN(Date.parse(iso))

const fmtDate = (iso: string) =>
  isValid(iso)
    ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : ''

const fmtDateTime = (iso: string) =>
  isValid(iso)
    ? new Date(iso).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    : ''

const itemName = (item: OrderItemModel, lookup: ProductLookup) =>
  lookup(item.productID)?.name ?? `Item ${item.productID}`

export function toOrderRow(order: OrderModel, lookup: ProductLookup): OrderRow {
  const first = order.orderItems[0]
  const product = first ? lookup(first.productID) : undefined
  const extra = order.orderItems.length - 1
  const units = order.orderItems.reduce((n, i) => n + i.quantity, 0)
  const stage = toStage(order.orderStatus)
  const placed = fmtDate(order.createdAt)

  return {
    orderID: order.orderID,
    ref: `#${order.orderID}`,
    collection: product?.collection ?? '',
    title: first ? itemName(first, lookup) + (extra > 0 ? ` + ${extra} more` : '') : 'Empty order',
    specs: `${units} item${units === 1 ? '' : 's'}${placed ? ` · Placed ${placed}` : ''}`,
    total: order.totalPrice,
    stage,
    statusLabel: STAGE_LABEL[stage],
    secondaryAction: STAGE_ACTION[stage],
    image: product?.image ?? '',
  }
}

export function toShipment(order: OrderModel, lookup: ProductLookup): Shipment {
  const stage = toStage(order.orderStatus)
  const current = { placed: 0, processing: 1, in_transit: 2, delivered: 3, cancelled: 0 }[stage]

  const defs = [
    { label: 'Order Placed', detail: fmtDateTime(order.createdAt), note: 'Confirmed' },
    { label: 'Atelier', detail: '', note: 'Packaged & dispatched' },
    { label: 'In Transit', detail: '', note: 'Active courier transit' },
    {
      label: 'Final Delivery',
      detail: '',
      note: stage === 'delivered' ? 'Delivered' : 'Pending destination',
    },
  ]

  return {
    orderID: order.orderID,
    title: order.orderItems
      .map((i) => itemName(i, lookup) + (i.quantity > 1 ? ` ×${i.quantity}` : ''))
      .join(' + '),
    address: order.buyerAddress,
    steps: defs.map((d, i) => ({
      id: i + 1,
      ...d,
      state: stage === 'delivered' || i < current ? 'done' : i === current ? 'active' : 'pending',
    })),
  }
}