<script setup lang="ts">
import type { ProductSummary } from '@/lib/models/Product'

defineProps<{ product: ProductSummary }>()
const emit = defineEmits<{ (e: 'quick-add', product: ProductSummary): void }>()
</script>

<template>
  <article
    class="bg-white border border-neutral-300/80 p-3 space-y-3 group hover:border-black transition-all shadow-sm flex flex-col justify-between"
  >
    <div class="aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-neutral-200">
      <span
        v-if="product.badge"
        class="absolute top-2 left-2 z-10 text-[9px] font-mono font-bold uppercase px-2 py-0.5 tracking-wider bg-black text-white"
      >
        {{ product.badge }}
      </span>
      <RouterLink :to="`/product/${product.slug}`" class="block w-full h-full">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </RouterLink>
      <button
        type="button"
        class="absolute bottom-2 inset-x-2 z-10 bg-white/95 hover:bg-black hover:text-white text-black text-[10px] font-mono uppercase font-bold py-2 border border-neutral-300 transition-colors shadow-sm text-center"
        @click="emit('quick-add', product)"
      >
        + QUICK ADD
      </button>
    </div>

    <div class="space-y-1 pt-1">
      <div class="text-[9px] font-mono text-neutral-400 uppercase">{{ product.category }}</div>
      <RouterLink
        :to="`/product/${product.slug}`"
        class="block text-xs font-bold uppercase text-black group-hover:text-[#E05322] transition-colors line-clamp-1"
      >
        {{ product.name }}
      </RouterLink>
      <div class="flex justify-between items-baseline pt-1 border-t border-neutral-100">
        <span class="text-sm font-black font-mono text-black">${{ product.price.toFixed(2) }}</span>
        <span v-if="product.tag" class="text-[9px] font-mono text-neutral-400 uppercase">{{ product.tag }}</span>
      </div>
    </div>
  </article>
</template>