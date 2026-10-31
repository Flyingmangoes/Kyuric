<template>
  <main
    class="w-full bg-[#FAF9F5] text-neutral-900 font-sans selection:bg-[#E05322] selection:text-white"
  >
    <!-- 01. Top Sub-Header & Live Status Tracker -->
    <div
      class="border-b border-neutral-300/80 px-4 md:px-10 py-3 flex flex-wrap justify-between items-center text-[10px] md:text-xs font-mono tracking-wider text-neutral-600 bg-[#F5F4EE]"
    >
      <div class="flex items-center space-x-2 truncate">
        <a href="/" class="hover:text-black transition-colors uppercase"
          >ARCHIVE INDEX</a
        >
        <span>/</span>
        <span class="text-neutral-500 uppercase">COLLECTIONS</span>
        <span>/</span>
        <span class="text-neutral-500 uppercase">AUTUMN-WINTER '26</span>
        <span>/</span>
        <span class="text-neutral-900 font-bold uppercase"
          >ALL GARMENTS [SPEC_48]</span
        >
      </div>
    </div>
    
    <!-- Main Content Container -->
    <div class="max-w-[1720px] mx-auto px-4 md:px-10 py-8 lg:py-12 space-y-8">
      <!-- 02. Page Title Header & Metrics -->
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-neutral-300/80 pb-6"
      >
        <div>
          <span
            class="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block mb-1"
          >
            // CAPSULE 26-AW CATALOGUE
          </span>
          <div class="flex items-baseline space-x-3">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black font-heading leading-none"
            >
              CATALOGUE <span class="text-neutral-400 font-light">//</span> ALL
              PRODUCTS
            </h1>
            <span
              class="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-300 font-mono select-none"
            >
              48
            </span>
          </div>
        </div>
        <div class="max-w-xs text-right hidden lg:block">
          <div
            class="text-xs font-mono font-bold uppercase tracking-wider text-black"
          >
            48 CURATED SPECIMENS
          </div>
          <p class="text-[11px] font-mono text-neutral-500 mt-0.5 leading-snug">
            Structured tailoring, Japanese technical weave & zero deadstock.
          </p>
        </div>
      </div>
      <!-- 03. Search & Filter Bar Controls -->
      <div class="space-y-4">
        <!-- Integrated Search Box -->
        <div
          class="relative bg-white border border-neutral-300 shadow-sm flex items-center"
        >
          <div class="pl-4 pr-2 text-neutral-400">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="HEAVYWEIGHT BOXY HOODIE"
            class="w-full py-3.5 px-2 bg-transparent text-xs font-mono uppercase tracking-wider text-black placeholder-neutral-400 focus:outline-none"
          />
          <div
            class="pr-4 flex items-center space-x-2 text-[10px] font-mono text-neutral-400"
          >
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="hover:text-black transition-colors"
            >
              ✕
            </button>
            <span
              class="border border-neutral-300 px-1.5 py-0.5 rounded bg-neutral-100 uppercase hidden sm:inline select-none"
            >
              ESC TO RESET
            </span>
          </div>
        </div>
        <!-- Quick Category Tags -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
          <button
            v-for="cat in quickCategories"
            :key="cat.label"
            @click="activeCategoryFilter = cat.label"
            class="px-3.5 py-2 border transition-all uppercase tracking-wider font-bold text-[11px]"
            :class="[
              activeCategoryFilter === cat.label
                ? 'bg-black text-white border-black'
                : 'bg-white hover:bg-neutral-100 border-neutral-300 text-neutral-800',
              cat.isSale
                ? 'bg-[#E05322] hover:bg-[#C84518] text-white border-[#E05322]'
                : '',
            ]"
          >
            <span v-if="cat.isSale">⚡ </span> {{ cat.label }}
          </button>
        </div>
        <!-- Active Filter Badges Bar & Display Toggles -->
        <div
          class="bg-[#F5F4EE] border border-neutral-300/80 p-3 flex flex-wrap justify-between items-center gap-4 text-xs font-mono"
        >
          <!-- Active Tags -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-neutral-500 uppercase font-bold text-[10px] mr-1"
              >ACTIVE APPLIED:</span
            >
            <span
              v-for="(tag, idx) in activeFilters"
              :key="idx"
              class="bg-white border border-neutral-300 text-black px-2.5 py-1 text-[10px] flex items-center space-x-1.5"
            >
              <span>{{ tag }}</span>
              <button
                @click="removeFilter(idx)"
                class="hover:text-[#E05322] text-neutral-400 font-bold"
              >
                ×
              </button>
            </span>
            <button
              @click="resetAllFilters"
              class="text-[10px] font-bold uppercase text-neutral-500 hover:text-black underline ml-2"
            >
              CLEAR ALL
            </button>
          </div>
          <!-- Layout & Sort Controls -->
          <div class="flex items-center space-x-4">
            <!-- Grid Density Toggles -->
            <div class="flex items-center border border-neutral-300 bg-white">
              <button
                @click="gridCols = 4"
                class="px-2.5 py-1 text-[10px] font-mono uppercase font-bold flex items-center space-x-1 border-r border-neutral-300 transition-colors"
                :class="
                  gridCols === 4
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black'
                "
              >
                <span>☷</span> <span>4-COL</span>
              </button>
              <button
                @click="gridCols = 2"
                class="px-2.5 py-1 text-[10px] font-mono uppercase font-bold flex items-center space-x-1 transition-colors"
                :class="
                  gridCols === 2
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black'
                "
              >
                <span>▥</span> <span>2-COL EDITORIAL</span>
              </button>
            </div>
            <!-- Sort By Select -->
            <div class="flex items-center space-x-2 text-[10px]">
              <span class="text-neutral-500 uppercase">SORT BY:</span>
              <select
                v-model="sortBy"
                class="bg-white border border-neutral-300 py-1 px-2.5 font-mono uppercase font-bold text-black focus:outline-none focus:border-black cursor-pointer"
              >
                <option value="featured">FEATURED DROPS</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
                <option value="newest">NEWEST ARRIVALS</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- 04. Faceted Navigation + Product Display Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        <!-- ================= LEFT: FACETED FILTERS SIDEBAR ================= -->
        <aside
          class="lg:col-span-3 space-y-8 bg-white border border-neutral-300/80 p-6 shadow-sm"
        >
          <div
            class="flex justify-between items-center border-b border-neutral-200 pb-3"
          >
            <h3
              class="text-xs font-mono font-black uppercase tracking-wider text-black flex items-center space-x-2"
            >
              <span>⚲</span> <span>FILTERS</span>
            </h3>
            <button
              @click="resetAllFilters"
              class="text-[10px] font-mono uppercase text-neutral-500 hover:text-[#E05322]"
            >
              RESET
            </button>
          </div>
          <!-- Category Checkboxes -->
          <div class="space-y-3">
            <div
              class="flex justify-between items-center text-[11px] font-mono uppercase font-bold text-black"
            >
              <span>CATEGORY</span> <span class="text-neutral-400">−</span>
            </div>
            <div class="space-y-2 text-xs font-mono">
              <label
                v-for="item in filterCategories"
                :key="item.name"
                class="flex items-center justify-between cursor-pointer group select-none"
              >
                <div class="flex items-center space-x-2.5">
                  <input
                    type="checkbox"
                    v-model="item.checked"
                    class="w-3.5 h-3.5 rounded-none accent-black border-neutral-400 cursor-pointer"
                  />
                  <span
                    class="text-neutral-700 group-hover:text-black uppercase text-[11px]"
                  >
                    {{ item.name }}
                  </span>
                </div>
                <span class="text-neutral-400 text-[10px]"
                  >[{{ item.count }}]</span
                >
              </label>
            </div>
          </div>
          <!-- Price Range Slider -->
          <div class="space-y-3 pt-4 border-t border-neutral-200">
            <div
              class="flex justify-between items-center text-[11px] font-mono uppercase font-bold text-black"
            >
              <span>PRICE RANGE</span>
              <span class="text-neutral-500 text-[10px] font-normal"
                >$40 — $290</span
              >
            </div>
            <input
              type="range"
              min="40"
              max="290"
              v-model="priceRangeMax"
              class="w-full accent-black cursor-pointer bg-neutral-200 h-1"
            />
            <div
              class="flex justify-between text-[10px] font-mono text-neutral-500"
            >
              <span>MIN <strong class="text-black font-bold">$40</strong></span>
              <span
                >MAX
                <strong class="text-black font-bold"
                  >${{ priceRangeMax }}</strong
                ></span
              >
            </div>
          </div>
          <!-- Color Swatches -->
          <div class="space-y-3 pt-4 border-t border-neutral-200">
            <div
              class="flex justify-between items-center text-[11px] font-mono uppercase font-bold text-black"
            >
              <span>COLOR</span>
              <span class="text-neutral-400 text-[10px] font-normal"
                >6 SHADES</span
              >
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                v-for="color in colorPalette"
                :key="color.name"
                @click="color.selected = !color.selected"
                class="flex items-center space-x-2 p-1.5 border transition-all text-left"
                :class="
                  color.selected
                    ? 'border-black bg-neutral-100'
                    : 'border-neutral-200 hover:border-neutral-400'
                "
              >
                <span
                  class="w-3 h-3 rounded-full border border-black/20 shrink-0"
                  :style="{ backgroundColor: color.hex }"
                ></span>
                <span class="text-[10px] uppercase font-bold truncate">{{
                  color.name
                }}</span>
              </button>
            </div>
          </div>
          <!-- Sizing Grid -->
          <div class="space-y-3 pt-4 border-t border-neutral-200">
            <div
              class="flex justify-between items-center text-[11px] font-mono uppercase font-bold text-black"
            >
              <span>SIZE</span>
              <a
                href="#size-guide"
                class="text-[10px] underline text-neutral-500 hover:text-black"
              >
                SIZE GUIDE
              </a>
            </div>
            <div class="grid grid-cols-6 gap-1">
              <button
                v-for="size in ['XS', 'S', 'M', 'L', 'XL', 'XXL']"
                :key="size"
                @click="selectedSize = size"
                class="py-2 text-[10px] font-mono font-bold uppercase border transition-all text-center"
                :class="
                  selectedSize === size
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-300 text-neutral-800'
                "
              >
                {{ size }}
              </button>
            </div>
          </div>
          <!-- Fit Options -->
          <div class="space-y-3 pt-4 border-t border-neutral-200">
            <div class="text-[11px] font-mono uppercase font-bold text-black">
              FIT
            </div>
            <div class="space-y-2 text-xs font-mono">
              <label
                v-for="fit in [
                  'OVERSIZED FIT',
                  'SLIM FIT',
                  'RELAXED / REGULAR FIT',
                ]"
                :key="fit"
                class="flex items-center space-x-2.5 cursor-pointer group select-none text-[11px]"
              >
                <input
                  type="radio"
                  name="fitPreference"
                  :value="fit"
                  v-model="selectedFit"
                  class="w-3.5 h-3.5 accent-black cursor-pointer"
                />
                <span
                  class="text-neutral-700 group-hover:text-black uppercase"
                  >{{ fit }}</span
                >
              </label>
            </div>
          </div>
          <!-- Availability -->
          <div class="space-y-3 pt-4 border-t border-neutral-200">
            <div class="text-[11px] font-mono uppercase font-bold text-black">
              AVAILABILITY
            </div>
            <div class="space-y-2 text-xs font-mono">
              <label
                class="flex items-center space-x-2.5 cursor-pointer text-[11px]"
              >
                <input
                  type="checkbox"
                  checked
                  class="w-3.5 h-3.5 accent-black cursor-pointer"
                />
                <span class="text-neutral-800 uppercase font-bold"
                  >IN STOCK (SHIPS IN 24H)</span
                >
              </label>
              <label
                class="flex items-center space-x-2.5 cursor-pointer text-[11px]"
              >
                <input
                  type="checkbox"
                  class="w-3.5 h-3.5 accent-black cursor-pointer"
                />
                <span class="text-neutral-500 uppercase">PRE-ORDER</span>
              </label>
            </div>
          </div>
          <!-- Bottom Reset CTA -->
          <div class="pt-4 border-t border-neutral-200">
            <button
              @click="resetAllFilters"
              class="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        </aside>
        <!-- ================= RIGHT: PRODUCT RESULTS GRID ================= -->
        <section class="lg:col-span-9 space-y-6">
          <!-- Results Metric Sub-Bar -->
          <div
            class="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-neutral-500 pb-2 border-b border-neutral-200"
          >
            <span
              >PARSED RESULTS:
              <strong
                >{{ products.length }} OF 48 ARTICLES DISPLAYED</strong
              ></span
            >
            <div class="flex items-center space-x-4">
              <span>LOCATION: ATELIER FULFILLMENT</span>
              <span class="text-neutral-400">|</span>
              <span>SHIPPING: CARBON NEUTRAL</span>
            </div>
          </div>
          <!-- Dynamic Products Grid -->
          <ProductGrid
            :products="products"
            :columns="gridCols"
            :wishlist-ids="wishlistIds"
            show-wishlist
            @toggle-wishlist="toggleWishlist"
          />
          <!-- 05. Pagination Bar -->
          <div
            class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-300 text-xs font-mono"
          >
            <span class="text-neutral-500 uppercase">
              SHOWING 1–8 OF 48 CURATED STYLES
            </span>
            <div class="flex items-center space-x-1">
              <button
                class="px-3 py-1.5 border border-neutral-300 text-neutral-400 hover:text-black uppercase text-[10px] disabled:opacity-40"
              >
                ← PREV
              </button>
              <button
                class="w-8 h-8 bg-black text-white font-bold text-[11px] flex items-center justify-center"
              >
                1
              </button>
              <button
                class="w-8 h-8 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 text-[11px] flex items-center justify-center"
              >
                2
              </button>
              <button
                class="w-8 h-8 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 text-[11px] flex items-center justify-center"
              >
                3
              </button>
              <span class="px-1 text-neutral-400">...</span>
              <button
                class="w-8 h-8 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 text-[11px] flex items-center justify-center"
              >
                6
              </button>
              <button
                class="px-3 py-1.5 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 uppercase text-[10px]"
              >
                NEXT →
              </button>
            </div>
          </div>
        </section>
      </div>
      <!-- 06. Kyuric Archive Club Protocol Banner -->
      <section
        class="bg-black text-[#ECEBE6] p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-neutral-800"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
        >
          <div class="lg:col-span-7 space-y-4">
            <div
              class="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-neutral-300 uppercase"
            >
              <span
                class="w-2 h-2 rounded-full bg-[#E05322] inline-block animate-pulse"
              ></span>
              <span class="bg-[#1C1C1C] px-2.5 py-1 border border-neutral-700"
                >RESTRICTED PROTOCOL // MEMBERS ATELIER</span
              >
            </div>
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-heading leading-tight"
            >
              KYURIC ARCHIVE CLUB<br />
              <span class="text-neutral-400 font-light"
                >EARLY RUNWAY PROTOCOL</span
              >
            </h2>
            <p
              class="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl leading-relaxed"
            >
              Direct access to private sample sales, 1-of-1 archival prototypes,
              and technical laboratory drops before public release worldwide.
            </p>
            <!-- Subscribe Form -->
            <form
              @submit.prevent="handleClubSubmit"
              class="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-lg pt-2"
            >
              <input
                v-model="clubEmail"
                type="email"
                required
                placeholder="ENTER CLIENT EMAIL COORDINATE!"
                class="w-full bg-[#181818] border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3.5 text-xs font-mono focus:outline-none focus:border-[#E05322]"
              />
              <button
                type="submit"
                class="bg-[#C84518] hover:bg-[#A93812] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shrink-0 transition-colors flex items-center justify-center space-x-1"
              >
                <span>REQUEST ENTRY</span> <span class="font-mono">→</span>
              </button>
            </form>
          </div>
          <!-- Abstract Geometric Technical Wireframe Accent -->
          <div
            class="lg:col-span-5 hidden lg:flex justify-end select-none opacity-40 hover:opacity-70 transition-opacity"
          >
            <div
              class="w-64 h-64 border border-neutral-700 relative flex items-center justify-center"
            >
              <div
                class="w-48 h-48 border border-neutral-600 rounded-full"
              ></div>
              <div
                class="w-32 h-32 border border-[#E05322]/50 rotate-45 absolute"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-neutral-500 tracking-widest uppercase"
              >
                [KYURIC LAB 26]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import { useProducts } from '@/app/products_service/useProduct'

const { all: products } = useProducts()

const wishlistIds = ref<number[]>([4])
const toggleWishlist = (id: number) => {
  wishlistIds.value = wishlistIds.value.includes(id)
    ? wishlistIds.value.filter((i) => i !== id)
    : [...wishlistIds.value, id]
}

const gridCols = ref<2 | 4>(4)

// Search and top category pills
const searchQuery = ref("");
const activeCategoryFilter = ref("ALL [48]");
const sortBy = ref("featured");

const quickCategories = [
  { label: "ALL [48]" },
  { label: "OUTERWEAR [14]" },
  { label: "KNITWEAR & SWEATERS [8]" },
  { label: "TROUSERS & CARGO [10]" },
  { label: "TOPS & TEES [12]" },
  { label: "HEADWEAR & ACCESSORIES [4]" },
  { label: "ON SALE (-30%)", isSale: true },
];

const activeFilters = ref(["CATEGORY: TOPS", "COLOR: ONYX", "SIZE: L", "UNDER $200"]);

const removeFilter = (index: any) => {
  activeFilters.value.splice(index, 1);
};

const resetAllFilters = () => {
  activeFilters.value = [];
  searchQuery.value = "";
  selectedSize.value = "L";
  priceRangeMax.value = 290;
};

// Faceted Sidebar States
const priceRangeMax = ref(290);
const selectedSize = ref("L");
const selectedFit = ref("OVERSIZED FIT");

const filterCategories = ref([
  { name: "JACKETS & PARKAS", count: 14, checked: true },
  { name: "HEAVY KNITS & MOHAIR", count: "08", checked: false },
  { name: "OVERSIZED TEES & TOPS", count: 12, checked: true },
  { name: "TAILORED CARGO & PANTS", count: 10, checked: false },
  { name: "TECHNICAL HEADWEAR", count: "04", checked: false },
]);

const colorPalette = ref([
  { name: "ONYX", hex: "#111111", selected: true },
  { name: "BONE", hex: "#f5f4ee", selected: false },
  { name: "SAGE", hex: "#738276", selected: false },
  { name: "RAW NAVY", hex: "#1e293b", selected: false },
  { name: "VERMILION", hex: "#c84518", selected: false },
  { name: "HEATHER", hex: "#94a3b8", selected: false },
]);

const clubEmail = ref("");
const handleClubSubmit = () => {
  if (!clubEmail.value) return
  alert(`Protocol request confirmed for client coordinate: ${clubEmail.value}`)
  clubEmail.value = ''
}
</script>

