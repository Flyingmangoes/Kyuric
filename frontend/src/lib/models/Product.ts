export interface ProductSummary {
  id: number
  slug: string
  name: string
  category: string
  price: number
  compareAtPrice?: number
  image: string
  badge?: string | null
  tag?: string
  styleNo?: string
  collection?: string
  rating?: number
  reviewCount?: number
}

export interface ProductImage {
  id: number
  url: string
  alt: string
  label: string
}

export interface ProductColor {
  name: string
  hex: string
}

export interface ProductSize {
  label: string
  waist: string
}

export interface SizeChartRow {
  label: string
  display: string
  waist: string
  inseam: string
  legOpening: string
  thigh: string
}

export interface Review {
  id: number
  author: string
  verifiedPurchaserBadge: string
  date: string
  headline: string
  comment: string
}

// PDP-only data. Loaded by slug.
export interface ProductDetail {
  gallery: ProductImage[]
  colors: ProductColor[]
  sizes: ProductSize[]
  tags: string[]
  modelNote: string
  modelSize: string
  materialBadge: string
  lowStock?: number
  description: string[]
  highlights: string[]
  fabric: { textileCode: string; composition: string; coating: string }
  sizeChart: SizeChartRow[]
  care: string[]
  related: string[] // slugs
  reviews: Review[]
}