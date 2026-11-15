export interface ShipmentStep {
  id: number
  label: string
  detail: string
  note: string
  state: 'done' | 'active' | 'pending'
}

export interface Shipment {
  orderID: string
  title: string
  address: string
  eta?: string
  steps: ShipmentStep[]
}   