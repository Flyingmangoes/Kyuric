<template>
  <header
    class="w-full font-sans antialiased border-b border-[#E5E4DE] bg-[#FAF9F5] sticky top-0 z-50"
  >
    <!-- Top Announcement & Dispatch Ticker -->
    <div
      class="bg-black text-[#FAF9F5] text-[11px] font-mono tracking-wider py-1.5 px-4 md:px-8 border-b border-neutral-800 flex justify-between items-center select-none"
    >
      <div class="flex items-center space-x-3 truncate">
        <span
          class="inline-block w-1.5 h-1.5 rounded-full bg-[#E05322] animate-pulse"
        ></span>
        <span class="font-medium tracking-tight">SUMMER CAPSULE '26 DROP</span>
        <span class="text-neutral-500">—</span>
        <span class="text-neutral-300 hidden sm:inline"
          >COMPLIMENTARY WORLDWIDE SHIPPING ON ORDERS OVER $250</span
        >
      </div>
      <div
        class="flex items-center space-x-6 text-[10px] text-neutral-400 font-mono tracking-widest shrink-0"
      >
        <span class="hidden md:inline">[REGIONAL DESK: TOKYO / NYC]</span>
        <span class="text-white">EDITION // 04</span>
      </div>
    </div>
    <!-- Main Navigation Bar -->
    <div
      class="max-w-[1720px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between"
    >
      <!-- Left: Brand Logo & Archival Spec Badge -->
      <div class="flex items-center space-x-8">
        <a href="/" class="flex items-baseline space-x-2 group">
          <span
            class="text-2xl md:text-3xl font-black tracking-[-0.05em] uppercase text-black font-heading transition-transform group-hover:scale-[0.99]"
          >
            KYURIC
          </span>
          <span
            class="text-[9px] font-mono tracking-widest text-neutral-500 hidden lg:inline-block border-l border-neutral-300 pl-2 leading-none"
          >
            EST. 2024<br />ARCHIVAL SPEC
          </span>
        </a>
        <!-- Desktop Navigation Taxonomy -->
        <nav
          class="hidden xl:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-black"
        >
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="relative py-2 transition-colors hover:text-[#E05322]"
            :class="{ 'text-[#E05322] font-black': link.active }"
          >
            {{ link.label }}
            <span
              v-if="link.badge"
              class="ml-1 text-[9px] font-mono text-neutral-400 lowercase font-normal"
            >
              {{ link.badge }}
            </span>
          </a>
        </nav>
      </div>
      <!-- Right: Search Bar, Currency & Quick Cart Counter -->
      <div class="flex items-center space-x-4 md:space-x-6">
        <!-- Archival Search Input -->
        <div class="relative hidden sm:block w-48 md:w-64">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ARCHIVE SEARCH..."
            class="w-full bg-[#F3F2EC] border border-[#DDDCD6] text-black text-xs font-mono placeholder-neutral-400 px-3 py-2 pr-9 focus:outline-none focus:border-black transition-all"
            @keydown.meta.k.prevent="focusSearch"
          />
          <span
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono text-neutral-400 border border-[#CECDC7] px-1 py-0.5 rounded bg-[#FAF9F5]"
          >
            ⌘K
          </span>
        </div>
        <!-- Account Link -->
        <a
          href="/account"
          class="p-2 text-black hover:text-[#E05322] transition-colors"
          title="Client Account"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>
        <!-- Cart Trigger Pill -->
        <a
          href="/cart"
          class="flex items-center space-x-2 bg-black text-[#FAF9F5] px-3.5 py-2 hover:bg-[#E05322] transition-colors group select-none"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span class="text-xs font-mono font-bold tracking-tight">
            ${{ cartTotal.toFixed(2) }}
          </span>
          <span class="text-neutral-500 font-mono text-xs">/</span>
          <span
            class="text-[11px] font-mono bg-[#222222] group-hover:bg-black/30 px-1.5 py-0.5 rounded text-white font-bold"
          >
            {{ cartItemCount.toString().padStart(2, "0") }}
          </span>
        </a>
        <!-- Mobile Menu Toggle Button -->
        <button
          class="xl:hidden p-2 text-black hover:text-[#E05322]"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle Menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Drawer Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="xl:hidden bg-[#FAF9F5] border-b border-[#E5E4DE] px-6 py-6 space-y-4"
      >
        <div class="sm:hidden mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ARCHIVE SEARCH..."
            class="w-full bg-[#F3F2EC] border border-[#DDDCD6] text-black text-xs font-mono p-3 focus:outline-none"
          />
        </div>
        <nav class="flex flex-col space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="text-sm font-bold uppercase tracking-wider text-black hover:text-[#E05322] flex justify-between items-center py-1 border-b border-[#ECEAE3]"
          >
            <span>{{ link.label }}</span>
            <span
              v-if="link.badge"
              class="text-[10px] font-mono text-neutral-400"
              >{{ link.badge }}</span
            >
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>
<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const searchQuery = ref('')
const cartTotal = ref(325.0)
const cartItemCount = ref(3)
const navLinks = [
  { label: 'Shop All', href: '/catalog', badge: '[381]' },
  { label: 'New Arrivals', href: '/catalog?filter=new', badge: null },
  { label: 'Outerwear', href: '/catalog?category=outerwear', badge: null },
  { label: 'Knitwear', href: '/catalog?category=knitwear', badge: null },
  { label: 'Accessories', href: '/catalog?category=accessories', badge: null },
  {
    label: 'Editorial / Drops',
    href: '/editorial',
    badge: 'live',
    active: true,
  },
]
</script>
