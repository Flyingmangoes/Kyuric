<script setup lang="ts">
import type { ProductSummary } from '@/lib/models/Product'

withDefaults(
  defineProps<{
    product: ProductSummary
    wishlisted?: boolean
    showWishlist?: boolean
    showQuickAdd?: boolean
  }>(),
  { wishlisted: false, showWishlist: false, showQuickAdd: false }
)

const emit = defineEmits<{
  (e: 'toggle-wishlist', id: number): void
  (e: 'quick-add', product: ProductSummary): void 
}>()
</script>

<template>
  <article
    class="bg-white border border-neutral-300/80 p-3 space-y-3 group hover:border-black transition-all shadow-sm flex flex-col justify-between"
  >
    <div class="aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-neutral-200">
      <span
        v-if="product.badge"
        class="absolute top-2 left-2 z-10 text-[9px] font-mono font-bold uppercase px-2 py-0.5 tracking-wider"
        :class="product.badgeClass ?? 'bg-black text-white'"
      >
        {{ product.badge }}
      </span>

      <button
        v-if="showWishlist"
        type="button"
        aria-label="Toggle wishlist"
        :aria-pressed="wishlisted"
        class="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 hover:bg-white text-black flex items-center justify-center border border-neutral-200 transition-colors shadow-sm"
        @click="emit('toggle-wishlist', product.id)"
      >
        <span :class="wishlisted ? 'text-[#E05322]' : 'text-neutral-400'">
          {{ wishlisted ? '♥' : '♡' }}
        </span>
      </button>

      <RouterLink :to="`/product/${product.slug}`" class="block w-full h-full">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </RouterLink>

      <button
        v-if="showQuickAdd"
        type="button"
        class="absolute bottom-2 inset-x-2 z-10 bg-white/95 hover:bg-black hover:text-white text-black text-[10px] font-mono uppercase font-bold py-2 border border-neutral-300 transition-colors shadow-sm text-center"
        @click="emit('quick-add', product)"
      >
        + QUICK ADD
      </button>
    </div>

    <div class="space-y-1.5 pt-1">
      <div
        v-if="product.colors?.length"
        class="flex items-center space-x-1.5 text-[9px] font-mono text-neutral-400"
      >
        <div class="flex items-center space-x-1">
          <span
            v-for="hex in product.colors"
            :key="hex"
            class="w-2 h-2 rounded-full border border-black/20"
            :style="{ backgroundColor: hex }"
          ></span>
        </div>
        <span class="uppercase tracking-tight">{{ product.colors.length }} COLORS</span>
      </div>
      <div v-else class="text-[9px] font-mono text-neutral-400 uppercase">
        {{ product.category }}
      </div>

      <div>
        <RouterLink
          :to="`/product/${product.slug}`"
          class="block text-xs font-bold uppercase text-black group-hover:text-[#E05322] transition-colors line-clamp-1"
        >
          {{ product.name }}
        </RouterLink>
        <p v-if="product.spec" class="text-[10px] font-mono text-neutral-500 line-clamp-1">
          {{ product.spec }}
        </p>
      </div>

      <div class="flex justify-between items-baseline pt-1 border-t border-neutral-100">
        <div class="flex items-baseline space-x-1.5">
          <span class="text-sm font-black font-mono text-black">${{ product.price }}</span>
          <span
            v-if="product.compareAtPrice"
            class="text-[10px] font-mono text-neutral-400 line-through"
          >
            ${{ product.compareAtPrice }}
          </span>
        </div>
        <span class="text-[9px] font-mono uppercase text-neutral-400">
          {{ product.dropTag ?? product.tag }}
        </span>
      </div>
    </div>
  </article>
</template>