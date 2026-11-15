<script setup lang="ts">
import { computed } from 'vue'
import type { Shipment } from '@/lib/models/Shipment'

const props = defineProps<{ shipment: Shipment }>()
const emit = defineEmits<{
  (e: 'invoice', trackingNo: string): void
  (e: 'track', trackingNo: string): void
}>()

const progress = computed(() => {
  const steps = props.shipment.steps
  let last = -1
  steps.forEach((s, i) => {
    if (s.state !== 'pending') last = i
  })
  return steps.length > 1 && last >= 0 ? (last / (steps.length - 1)) * 100 : 0
})

const icon = { done: '✓', active: '●', pending: '○' } as const
</script>

<template>
  <section class="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-6">
    <div class="flex flex-wrap justify-between items-start gap-4">
      <div class="space-y-1">
        <div class="flex items-center space-x-2 text-xs">
          <span class="bg-[#C84518]/10 text-[#C84518] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border border-[#C84518]/20">
            EXPRESS DELIVERY
          </span>
          <span class="text-neutral-400 font-mono text-[11px]">#{{ shipment.orderID }}</span>
        </div>
        <h3 class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight pt-1">
          {{ shipment.title }}
        </h3>
      </div>
      <div v-if="shipment.eta" class="text-right">
        <div class="text-[10px] uppercase text-neutral-400 font-medium">Estimated Arrival</div>
        <div class="text-xs font-bold text-[#C84518] font-mono">{{ shipment.eta }}</div>
      </div>
    </div>

    <div class="py-4">
      <div class="relative flex items-center justify-between">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-neutral-200 -z-0"></div>
        <div
          class="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#E05322] -z-0 transition-all duration-700"
          :style="{ width: progress + '%' }"
        ></div>

        <div
          v-for="step in shipment.steps"
          :key="step.id"
          class="relative z-10 flex flex-col items-center text-center bg-white px-2"
          :class="step.state === 'pending' ? 'opacity-50' : ''"
        >
          <div
            class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            :class="{
              'bg-[#E05322] text-white shadow-sm': step.state === 'done',
              'bg-[#E05322] ring-4 ring-[#E05322]/20 text-white shadow-sm': step.state === 'active',
              'bg-neutral-200 text-neutral-500 font-medium': step.state === 'pending',
            }"
          >
            {{ icon[step.state] }}
          </div>
          <div
            class="text-[11px] mt-2 flex items-center space-x-1"
            :class="{
              'font-semibold text-neutral-900': step.state === 'done',
              'font-bold text-[#C84518]': step.state === 'active',
              'font-medium text-neutral-600': step.state === 'pending',
            }"
          >
            <span>{{ step.label }}</span>
            <span v-if="step.state === 'active'" class="w-1.5 h-1.5 rounded-full bg-[#E05322] animate-pulse"></span>
          </div>
          <div v-if="step.detail" class="text-[10px] font-mono" :class="step.state === 'active' ? 'text-neutral-500' : 'text-neutral-400'">
            {{ step.detail }}
          </div>
          <div class="text-[9px]" :class="step.state === 'active' ? 'text-[#C84518] font-medium' : 'text-neutral-400'">
            {{ step.note }}
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
      <div class="text-neutral-500">
        <span class="text-[11px] text-neutral-400 block">Delivery Address:</span>
        <span class="font-medium text-neutral-800">{{ shipment.address }}</span>
      </div>
      <div class="flex items-center space-x-2.5 w-full sm:w-auto">
        <button
          type="button"
          class="flex-1 sm:flex-none border border-neutral-200 hover:border-neutral-300 bg-white px-4 py-2 rounded-xl text-xs font-medium text-neutral-700 transition-colors"
          @click="emit('invoice', shipment.orderID)"
        >
          Invoice (PDF)
        </button>
        <button
          type="button"
          class="flex-1 sm:flex-none bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center space-x-1"
          @click="emit('track', shipment.orderID)"
        >
          <span>Live Waybill Details</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </section>
</template>