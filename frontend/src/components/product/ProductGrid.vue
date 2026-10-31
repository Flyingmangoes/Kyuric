<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { ProductSummary } from '@/lib/models/Product'

withDefaults(
  defineProps<{
    products: ProductSummary[]
    columns?: 2 | 4
    wishlistIds?: number[]
    showWishlist?: boolean
    showQuickAdd?: boolean
  }>(),
  { columns: 4, wishlistIds: () => [], showWishlist: false, showQuickAdd: false }
)

const emit = defineEmits<{
  (e: 'toggle-wishlist', id: number): void
  (e: 'quick-add', product: ProductSummary): void
}>()
</script>

<template>
  <div
    v-if="products.length"
    class="grid gap-6"
    :class="columns === 4 ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'"
  >
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      :wishlisted="wishlistIds.includes(p.id)"
      :show-wishlist="showWishlist"
      :show-quick-add="showQuickAdd"
      @toggle-wishlist="(id) => emit('toggle-wishlist', id)"
      @quick-add="(item) => emit('quick-add', item)"
    />
  </div>

  <div
    v-else
    class="border border-dashed border-neutral-300 p-12 text-center text-xs font-mono uppercase text-neutral-500"
  >
    // NO ARTICLES MATCH CURRENT FILTERS
  </div>
</template>