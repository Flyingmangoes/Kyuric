import { products, productDetails } from '@/data/Product'
import type { ProductSummary } from '@/lib/models/Product'

export function useProducts() {
  const getBySlug = (slug: string) => products.find((p) => p.slug === slug)
  const getDetail = (slug: string) => productDetails[slug]
  const getMany = (slugs: string[]) =>
    slugs.map(getBySlug).filter((p): p is ProductSummary => p !== undefined)

  return { all: products, getBySlug, getDetail, getMany }
}