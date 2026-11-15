<script setup lang="ts">
import { formatMoney } from '@/components/profile/OrderView'
import type { UserModel } from '@/lib/models/User'
import type { OrderRow } from '@/lib/models/Order'

withDefaults(
  defineProps<{
    orders: OrderRow[]
    totalCount?: number
    currency?: UserModel['currency']
  }>(),
  { totalCount: 0, currency: 'usd' }
)

const emit = defineEmits<{
  (e: 'invoice', orderID: string): void
  (e: 'action', order: OrderRow): void
}>()
</script>

<template>
  <section class="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5">
    <div class="flex justify-between items-center border-b border-neutral-100 pb-4">
      <div>
        <span class="text-[10px] font-semibold text-[#C84518] uppercase tracking-wider block">
          ARCHIVE ACQUISITION LOG
        </span>
        <h3 class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">Recent Orders</h3>
      </div>
      <RouterLink to="/orders" class="text-xs font-medium text-neutral-800 hover:text-[#E05322] flex items-center space-x-1 transition-colors">
        <span>View Complete Archive<template v-if="totalCount"> ({{ totalCount }} Orders)</template></span>
        <span>→</span>
      </RouterLink>
    </div>

    <div v-if="orders.length" class="space-y-3">
      <div
        v-for="order in orders"
        :key="order.orderID"
        class="p-4 rounded-xl border border-neutral-100 bg-[#FAF9F5]/70 hover:bg-[#FAF9F5] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div class="flex items-center space-x-4">
          <div class="w-14 h-16 rounded-lg bg-neutral-200 overflow-hidden border border-neutral-200 shrink-0">
            <img v-if="order.image" :src="order.image" :alt="order.title" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-1">
            <div class="flex items-center space-x-2 text-[10px] font-mono text-neutral-400">
              <span v-if="order.collection" class="bg-neutral-200/70 text-neutral-700 px-1.5 py-0.5 rounded">{{ order.collection }}</span>
              <span>{{ order.ref }}</span>
            </div>
            <h4 class="text-xs sm:text-sm font-bold text-neutral-900">{{ order.title }}</h4>
            <p class="text-[11px] text-neutral-500 font-sans">{{ order.specs }}</p>
          </div>
        </div>

        <div class="flex sm:flex-col items-end justify-between sm:justify-center gap-2">
          <div class="text-right">
            <div class="text-sm font-bold font-mono text-neutral-900">{{ formatMoney(order.total, currency) }}</div>
            <span
              class="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full inline-block mt-0.5"
              :class="order.stage === 'in_transit'
                ? 'bg-[#C84518]/10 text-[#C84518] border border-[#C84518]/20'
                : 'bg-neutral-100 text-neutral-600'"
            >
              {{ order.statusLabel }}
            </span>
          </div>
          <div class="flex items-center space-x-2 pt-1">
            <button
              type="button"
              class="border border-neutral-200 hover:border-neutral-300 bg-white px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-700 transition-colors"
              @click="emit('invoice', order.orderID)"
            >
              Invoice
            </button>
            <button
              type="button"
              class="border border-neutral-200 hover:border-neutral-300 bg-white px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-700 transition-colors"
              @click="emit('action', order)"
            >
              {{ order.secondaryAction }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="border border-dashed border-neutral-300 rounded-xl p-10 text-center text-xs text-neutral-500">
      No orders yet.
    </div>
  </section>
</template>