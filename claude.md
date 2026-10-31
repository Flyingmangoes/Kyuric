# CLAUDE.md

This file provides guidance and instructions for Claude when working within this repository.

## 1. Project Overview

* **Project Name:** 

  $$
  FLOM E-Commerce
  $$

* **Description:** 
  <h2>E-Commerce Website for a brand it has product page, search bar, order page, cart page, employee page, admin page, health page</h2>

* **Tech Stack:** 
  - Typescript
  - Vue
  - Tailwindcss
  - Gin
  - Redis
  - Go
  - Postgresql
  - Stripe
  - Sendgrid

* **Dependencies:**
  - "@tailwindcss/postcss": "^4.3.3",
  - "animejs": "^4.5.0",
  - "gsap": "^3.15.0",
  - "lucide-vue-next": "^1.0.0",
  - "postcss": "^8.5.28",
  - "tailwindcss": "^4.3.3",
  - "vue": "^3.5.40"

## 2. Common Commands

Run these commands from the project root:

### Build & Run

* Empty for now

### Testing

* **Empty For now**

### Code Quality & Linting

* Empty for now

## 3. Code Style & Standards

### Architecture & Folder Structure
**Frontend**
* `src/app` - Program
* `src/app/assets` - assets
* `src/app/main` - Handle Mainpage.vue
* `src/app/auth_service` - Handle auth pages, hook, and service
* `src/app/cart_service` - Handle cart pages, hook, and service
* `src/app/chat_service` - Handle chat pages, hook, and service
* `src/app/employee_service` - Handle employee pages, hook, and service
* `src/app/order_service` - Handle order pages, hook, and service
* `src/app/product_service` - Handle product pages, hook, and service
* `src/app/user_service` - Handle user pages, hook, and service
* `src/app/admin_service` - Handle admin pages, hook, and service
* `src/app/components/` - Reusable UI components.
* `src/app/components/product` - product grid component
* `src/app/components/transition` - transition component
* `src/app/lib/` - Asynchronous Process or Utilities
* `src/app/lib/models` - Data Models Received or Sended
* `src/app/lib/models` - Data Models Received or Sended
* `src/app/lib/routes` - Handle frontend routes
* `src/app/lib/error` - Custom Error Type and Handler
* `src/app/lib/api` - Asynchronous Process (API Handler)
* `src/app/styles` - Global Stylesheet
* `src/app/mobile` - Mobile
* `src/app/test` - Mock product for testing
* `src/App.vue` - Vue entry point
* `src/main.ts` - Main

### Code Conventions

* **Language/Dialect:** 

  $$
  TypeScript strictly required
  $$

* **Naming Conventions:**
  * Components: `PascalCase` (e.g., `UserProfile.tsx`)
  * Utilities/Hooks: `camelCase` (e.g., `useAuth.ts`, `formatDate.ts`)
  * Files/Folders: `underscore_case` 

* **Formatting Rules:**

  * Use **2 spaces** for indentation.

  * Prefer **explicit types** over `any`.

  * Use **named exports** over default exports.

  * Use **functional components** with React hooks.

## 4. Workflows & Guidelines

### Error Handling

* Wrap async functions in `try/catch` blocks.

* Return normalized API error objects using the standard error helper (`lib/error`).

## 5. Important Context & Constraints
* **Design Link:** ([https://www.figma.com/design/o1BXPZauUxPh2GESojOrtm/Flomm-Website?node-id=2-2050&t=FDMC0dhvU9vZ4cbf-0])
* **Environment Variables:** Always use `process.env.REACT_APP_*`. Never hardcode secrets or keys.
* **APIs:**
  *AUTH_API:*
  * /api/v2//auth/users(GET) - Login
  * /api/v2/auth/users(POST) - Register
  * /api/v2/auth/refresh(POST) - Refresh 
  * /api/v2/auth/logout(POST) - Logout
  *SEARCH API:*
  * /api/v2/products(GET) - Product Search
  *PRODUCT API:*
  * /api/v2/protected/product (POST) - Register Product
  *SUDO PRODUCT API*
  * /api/v2/protected/sudo/product (PUT) - Update Product
  * /api/v2/protected/sudo/product (DELETE) - Delete Product
* **Known Gotchas / Avoid:**
  * Do not edit generated files directly (`/dist`, `/build`).

* **Components Source Code:**
```
ProductCard.vue

<script setup lang="ts">
import { computed } from 'vue'
import { Shirt, Layers, Footprints, ShoppingBag } from 'lucide-vue-next'
import type { Product } from '@/lib/models/Product'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  select: [product: Product]
}>()

// Placeholder icon per category, used until productImage is populated
// with real photography.
const categoryIcon = computed(() => {
  const key = (props.product.productCategory ?? '').toLowerCase()
  if (key.includes('foot')) return Footprints
  if (key.includes('access')) return ShoppingBag
  if (key.includes('top') || key.includes('outer')) return Shirt
  return Layers
})

const isOutOfStock = computed(() => props.product.productTotalStock <= 0)

const availableColorCount = computed(() => {
  const inStock = props.product.productExtra?.filter((e) => e.stock > 0) ?? []
  return new Set(inStock.map((e) => e.color)).size
})

const availableSizeCount = computed(() => {
  const inStock = props.product.productExtra?.filter((e) => e.stock > 0) ?? []
  return new Set(inStock.map((e) => e.size)).size
})

function handleClick() {
  if (isOutOfStock.value) return
  emit('select', props.product)
}
</script>

<template>
  <article
    class="w-full max-w-[350px] group"
    :class="isOutOfStock ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'"
    role="button"
    :tabindex="isOutOfStock ? -1 : 0"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    <!-- Picture -->
    <div
      class="relative w-full aspect-[350/340] rounded-2xl bg-neutral-100 flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="product.productImage"
        :src="product.productImage"
        :alt="product.productName"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="!isOutOfStock && 'group-hover:scale-[1.03]'"
      />
      <component
        :is="categoryIcon"
        v-else
        :size="40"
        :stroke-width="1.2"
        class="text-neutral-400"
      />

      <span
        v-if="isOutOfStock"
        class="absolute top-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-white"
      >
        Out of Stock
      </span>
    </div>

    <!-- Description -->
    <div class="w-full bg-white px-3.5 pt-1.5 pb-5">
      <div class="flex items-start justify-between">
        <span class="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
          {{ product.productCategory }}
        </span>
        <span class="text-lg font-extrabold text-black">${{ product.productPrice.toFixed(0) }}</span>
      </div>
      <h3 class="text-base font-bold leading-snug text-black mt-1 mb-1">
        {{ product.productName }}
      </h3>
      <p
        v-if="availableColorCount > 0 || availableSizeCount > 0"
        class="text-xs text-neutral-500"
      >
        <template v-if="availableColorCount > 0">
          {{ availableColorCount }} {{ availableColorCount === 1 ? 'Color' : 'Colors' }}
        </template>
        <template v-if="availableColorCount > 0 && availableSizeCount > 0"> &middot; </template>
        <template v-if="availableSizeCount > 0">
          {{ availableSizeCount }} {{ availableSizeCount === 1 ? 'Size' : 'Sizes' }}
        </template>
      </p>
    </div>
  </article>
</template>
```
```
ProductGrid.vue

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import ProductCard from './ProductCard.vue'
import type { Product } from '@/lib/models/Product'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const props = defineProps<{
  products: Product[]
  /** Optional message shown when products is empty. */
  emptyMessage?: string
}>()

const emit = defineEmits<{
  selectProduct: [product: Product]
}>()

const gridRef = ref<HTMLElement | null>(null)
let trigger: ScrollTrigger | undefined

function playRevealAnimation() {
  if (!gridRef.value) return
  trigger?.kill()

  const cards = gridRef.value.children
  if (!cards.length) return

  const tween = gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.08,
    scrollTrigger: {
      trigger: gridRef.value,
      start: 'top 85%',
    },
  })
  trigger = tween.scrollTrigger
}

onMounted(async () => {
  await nextTick()
  playRevealAnimation()
})

// Re-run if the product list changes later (e.g. after filtering/pagination
// swaps the array once product_service is wired up).
watch(
  () => props.products,
  async () => {
    await nextTick()
    playRevealAnimation()
  }
)

onUnmounted(() => {
  trigger?.kill()
})
</script>

<template>
  <div
    v-if="products.length > 0"
    ref="gridRef"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-20 lg:gap-y-16"
  >
    <ProductCard
      v-for="product in products"
      :key="product.productID"
      :product="product"
      @select="emit('selectProduct', $event)"
    />
  </div>

  <div v-else class="w-full py-24 text-center text-neutral-500">
    {{ emptyMessage ?? 'No products found.' }}
  </div>
</template>
```
```
Footer.vue

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Twitter, Instagram, Linkedin, Youtube } from 'lucide-vue-next'

const email = ref('')

function onSubscribe() {
  // TODO: wire up to your newsletter/subscribe API endpoint
  console.log('Subscribe:', email.value)
  email.value = ''
}

interface FooterColumn {
  title: string
  links: string[]
}

const columns: FooterColumn[] = [
  { title: 'Product', links: ['Background', 'Improvement', 'Features', 'Category', 'Prices'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Press Kits', 'Partners', 'Contact'] },
  { title: 'Resources', links: ['Blogs', 'Help Center', 'Community'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Sitemap'] },
]

const socials = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full bg-[#2B2620] text-white px-8 md:px-14 pt-14">
    <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr_60px] gap-12 lg:gap-16 pb-14 border-b border-white/10">
      <div>
        <div class="font-sans font-extrabold text-2xl mb-6">FLOM</div>
        <p class="text-white/70 text-sm mb-8 max-w-[280px]">
          Imaginative minds for imaginative brands.
        </p>
        <div>
          <p class="text-xs uppercase tracking-wide text-white/60 mb-3">
            Subscribe to our newsletter
          </p>
          <form class="flex" @submit.prevent="onSubscribe">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Your email address"
              class="flex-1 min-w-0 bg-white/5 border border-white/15 rounded-l-full px-5 h-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FF591F] transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              class="w-12 h-12 shrink-0 rounded-r-full bg-[#FF591F] flex items-center justify-center hover:bg-white transition-colors group"
            >
              <ArrowRight :size="16" class="text-white group-hover:text-[#FF591F] transition-colors" />
            </button>
          </form>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div v-for="col in columns" :key="col.title">
          <p class="text-sm font-semibold mb-5">{{ col.title }}</p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in col.links" :key="link">
              <a href="#" class="text-sm text-white/60 hover:text-white transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex lg:flex-col gap-4 lg:gap-6 items-start lg:items-center">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          :aria-label="s.name"
          class="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#FF591F] hover:text-[#FF591F] transition-colors"
        >
          <component :is="s.icon" :size="18" />
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between py-8 text-xs text-white/50">
      <p>&copy; {{ currentYear }} FLOM. All rights reserved.</p>
      <div class="flex gap-6">
        <a href="/privacy" class="hover:text-white transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-white transition-colors">Terms</a>
        <a href="/cookies" class="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
</template>
```
```
Header.vue

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Search, ShoppingCart, User } from 'lucide-vue-next'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="w-full h-[100px] bg-white flex items-center px-10 relative">
    <div class="flex-1 flex items-center">
      <button
        type="button"
        aria-label="Open menu"
        class="w-[60px] h-[60px] flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
        @click="toggleMenu"
      >
        <Menu :size="22" :stroke-width="1.8" color="#111111" />
      </button>
    </div>

    <a href="/" class="font-sans font-extrabold text-3xl tracking-tight text-black shrink-0">
      FLOM
    </a>

    <div class="flex-1 flex items-center justify-end gap-2">
      <button
        type="button"
        aria-label="Search"
        class="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
      >
        <Search :size="20" :stroke-width="1.8" color="#111111" />
      </button>

      <button
        type="button"
        aria-label="Cart"
        class="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
      >
        <ShoppingCart :size="20" :stroke-width="1.8" color="#111111" />
      </button>

      <button
        type="button"
        aria-label="Account"
        class="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
      >
        <User :size="20" :stroke-width="1.8" color="#111111" />
      </button>
    </div>

    <!--
      Placeholder mobile/dropdown menu panel.
      Wire up real nav links once vue-router is installed.
    -->
    <div
      v-if="isMenuOpen"
      class="absolute left-0 top-[100px] w-full bg-white border-t border-neutral-200 shadow-lg z-50 p-8"
    >
      <nav class="flex flex-col gap-4 font-sans text-lg text-black">
        <a href="/" class="hover:text-[#FF591F] transition-colors">Home</a>
        <a href="/shop" class="hover:text-[#FF591F] transition-colors">Shop</a>
        <a href="/about" class="hover:text-[#FF591F] transition-colors">About</a>
        <a href="/contact" class="hover:text-[#FF591F] transition-colors">Contact</a>
      </nav>
    </div>
  </header>
</template>
```
```
BrandSponsorTransition.vue

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/lib/gsap'

const items = ['FLOMM  SPONSOR_1', 'FLOMM  SPONSOR_2', 'FLOMM  SPONSOR_3', 'FLOMM  SPONSOR_4']

const trackRef = ref<HTMLElement | null>(null)
let tween: ReturnType<typeof gsap.to> | undefined

onMounted(() => {
  if (!trackRef.value) return
  const loopWidth = trackRef.value.scrollWidth / 2
  tween = gsap.to(trackRef.value, {
    x: -loopWidth,
    duration: 22,
    ease: 'none',
    repeat: -1,
  })
})

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <div class="w-full h-[100px] bg-[#242323] overflow-hidden flex items-center">
    <div ref="trackRef" class="flex items-center whitespace-nowrap will-change-transform">
      <span
        v-for="(item, i) in [...items, ...items]"
        :key="i"
        class="font-sans font-extrabold text-[40px] text-white px-[55px]"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
```
```
QuoteBrandTransition.vue

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/lib/gsap'

const items = ['FLOMM', 'MOTTO_1', 'FLOMM', 'MOTTO_1']

const trackRef = ref<HTMLElement | null>(null)
let tween: ReturnType<typeof gsap.to> | undefined

onMounted(() => {
  if (!trackRef.value) return
  const loopWidth = trackRef.value.scrollWidth / 2
  tween = gsap.to(trackRef.value, {
    x: -loopWidth,
    duration: 18,
    ease: 'none',
    repeat: -1,
  })
})

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <div class="w-full h-[100px] bg-[#EAEAEA] overflow-hidden flex items-center">
    <div ref="trackRef" class="flex items-center whitespace-nowrap will-change-transform">
      <span
        v-for="(item, i) in [...items, ...items]"
        :key="i"
        class="font-sans font-extrabold text-[40px] text-[#1A1815] px-[65px]"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
```
* **Data Models:**
  ```
    Cart
    export interface Cart {
        cartID: string;
        userID: string;
        cartItems: CartItem[];
    }

    export interface CartItem {
        cartItemID: string;
        cartID: string;
        productID: string;
        quantity: number;
        price: number;
    }

    User
    export interface UserModel {
      userId: string;
      firstName: string;
      lastName: string;
      username: string;
      password: string;
      email: string;
      phoneNumber: string;
      locale: string;
      country: string;
      address: string;
      userType: string;
      isVerified: boolean;
      emailConsent: boolean;
      smsConsent: boolean;
      consentUpdated: string;
      consentSrc: string;
      createdAt: string;
      updatedAt: string;
    }

    Order
    export interface Order {
        orderID: string;
        buyerID: string;
        buyerEmail: string;
        totalPrice: number;
        buyerAddress: string;
        orderStatus: string;
        createdAt: string;
        orderItems: OrderItem[];
    }

    export interface OrderItem {
        orderItemID: string;
        orderID: string;
        productID: string;
        quantity: number;
        price: number;
    }

    Product
    export interface Product {
        productID: string;
        productName: string;
        productDescription: string;
        productPrice: number;
        productImage: string;
        productCategory: string;
        productRating: number;
        productTotalStock: number;
        productExtra: ProductExtra[];
        createdAt: string;
        updatedAt: string;
    }

    export interface ProductExtra {
        color: string;
        size: string;
        stock: number;
    }
  ```