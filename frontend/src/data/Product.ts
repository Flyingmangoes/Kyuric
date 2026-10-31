import type { ProductDetail, ProductSummary } from '@/lib/models/Product'

export const products: ProductSummary[] = [
  {
    id: 1,
    slug: 'tactical-parachute-cargo',
    name: 'TACTICAL PARACHUTE CARGO',
    category: 'TROUSERS & CARGO',
    price: 185.0,
    compareAtPrice: 220.0,
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
    badge: 'NEW DROP',
    tag: '3 COLORS',
    styleNo: '#KY-7049',
    collection: 'CAPSULE 26-AW',
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: 2,
    slug: 'heritage-heavyweight-hoodie',
    name: 'HERITAGE HEAVYWEIGHT HOODIE',
    category: 'KNITWEAR // 500GSM',
    price: 145.0,
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80',
    badge: 'ESSENTIAL',
    tag: '3 COLORS',
  },
  {
    id: 3,
    slug: 'modular-utility-vest',
    name: 'MODULAR UTILITY VEST',
    category: 'OUTERWEAR // CORDURA',
    price: 160.0,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
    badge: 'DROP 04',
    tag: '2 COLORS',
  },
  {
    id: 4,
    slug: 'structured-balaclava-knit',
    name: 'STRUCTURED BALACLAVA KNIT',
    category: 'HEADWEAR // MERINO',
    price: 95.0,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80',
    badge: null,
    tag: 'SINGLE RUN',
  },
  {
    id: 5,
    slug: 'asymmetric-zip-bomber',
    name: 'ASYMMETRIC ZIP BOMBER',
    category: 'OUTERWEAR // PRIMALOFT',
    price: 290.0,
    image:
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80',
    badge: 'LIMITED',
    tag: 'JAPANESE TWILL',
  },
]

export const productDetails: Record<string, ProductDetail> = {
  'tactical-parachute-cargo': {
    tags: ['WATER-REPELLENT DWR'],
    modelNote: `MODEL: 6'1" (185CM) // SIZE L [34]`,
    modelSize: 'L',
    materialBadge: '100% TOKYO MIL-SPEC RIPSTOP',
    lowStock: 3,
    gallery: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80',
        alt: 'Tactical Parachute Cargo Front Model Stacking',
        label: '01 / FRONT',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
        alt: 'Tactical Parachute Cargo Rear Articulation & Cinch',
        label: '02 / REAR',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
        alt: 'Japanese Ripstop Dense 280GSM Grid Weave Macro',
        label: '03 / WEAVE',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
        alt: 'Modular 3D Accordion Cargo Pocket & Gunmetal Hardware',
        label: '04 / HARDWARE',
      },
    ],
    colors: [
      { name: 'JAPANESE INK BLACK', hex: '#111111' },
      { name: 'BONE / RAW CHALK', hex: '#f0ede6' },
      { name: 'MILITARY DESERT OLIVE', hex: '#484d3e' },
    ],
    sizes: [
      { label: 'XS', waist: '28' },
      { label: 'S', waist: '30' },
      { label: 'M', waist: '32' },
      { label: 'L', waist: '34' },
      { label: 'XL', waist: '36' },
      { label: 'XXL', waist: '38' },
    ],
    description: [
      'The Tactical Parachute Cargo trousers represent KYURIC’s obsessive study of modern utilitarian ergonomics. Constructed with an architectural relaxed-tapered silhouette, they feature modular 3D accordion cargo pockets with internal divider sleeves, articulated four-dart knee pleats, and custom bungee toggles at the hems that allow instantaneous transformation between a wide parachute stack and a clean cinched cuff.',
      'Woven from dense 280GSM Japanese ripstop with a fluorocarbon-free water-repellent finish, this piece transitions seamlessly from harsh precipitation to breathable indoor comfort.',
    ],
    highlights: [
      'MODULAR DUAL-DEPTH 3D CARGO POCKETS',
      'KINETIC BUNGEE CINCH AT INNER ANKLE HEM',
      'YKK EXCELLA GUNMETAL MATTE HARDWARE',
      'INTEGRATED REINFORCED WEBBING BELT LOOPS',
    ],
    fabric: {
      textileCode: 'KY-RS-280G',
      composition: '68% ORG. COTTON / 32% NYLON',
      coating: 'ECO DWR WATER-REPELLENT',
    },
    sizeChart: [
      { label: 'XS', display: 'XS (28)', waist: '28-29"', inseam: '30.5"', legOpening: '6.5" - 9.0"', thigh: '13.2"' },
      { label: 'S', display: 'S (30)', waist: '30-31"', inseam: '31.0"', legOpening: '6.8" - 9.2"', thigh: '13.8"' },
      { label: 'M', display: 'M (32)', waist: '32-33"', inseam: '31.5"', legOpening: '7.0" - 9.5"', thigh: '14.4"' },
      { label: 'L', display: 'L (34)', waist: '34-35"', inseam: '32.0"', legOpening: '7.2" - 9.8"', thigh: '15.0"' },
      { label: 'XL', display: 'XL (36)', waist: '36-37"', inseam: '32.5"', legOpening: '7.5" - 10.0"', thigh: '15.6"' },
    ],
    care: [
      'Machine wash cold at 30°C on delicate cycle. Line dry in shade to preserve fluorocarbon-free coating.',
      'Zero deadstock: Manufactured in closed-loop micro-batches in Okayama, Japan with certified recycled nylon cords.',
    ],
    related: [
      'heritage-heavyweight-hoodie',
      'modular-utility-vest',
      'structured-balaclava-knit',
      'asymmetric-zip-bomber',
    ],
    reviews: [
      {
        id: 1,
        author: 'JULIAN K.',
        verifiedPurchaserBadge: 'VERIFIED BUYER // SIZE L',
        date: '2 WEEKS AGO',
        headline: 'UNRIVALED FABRIC DENSITY',
        comment:
          'The Japanese ripstop is much sturdier than conventional fashion cargo pants. It has weight and holds its 3D architectural silhouette without feeling stiff. The bungee cinch cords make transitioning shoes seamless.',
      },
      {
        id: 2,
        author: 'TRENT M.',
        verifiedPurchaserBadge: 'VERIFIED BUYER // SIZE M',
        date: '1 MONTH AGO',
        headline: 'PERFECTION IN THE CUT',
        comment:
          "Worth every single dollar. I'm 6'0 and usually wear a 32, bought Medium. Sits cleanly on the waist, stacks gorgeously over high-top boots, and survived torrential rain in London completely dry.",
      },
      {
        id: 3,
        author: 'ELENA V.',
        verifiedPurchaserBadge: 'VERIFIED BUYER // SIZE S',
        date: 'LAST MONTH',
        headline: 'BETTER THAN RUNWAY PIECES',
        comment:
          'The pocket engineering with internal dividers means your phone doesn’t swing around when walking. Incredible hardware execution. KYURIC is easily dominating technical streetwear right now.',
      },
    ],
  },
}