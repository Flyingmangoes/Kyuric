<template>
  <main
    class="w-full bg-[#FAF9F5] text-neutral-900 font-sans selection:bg-[#E05322] selection:text-white"
  >
    <!-- 00. Top Status Bar -->
    <div
      class="border-b border-neutral-300/80 px-4 md:px-10 py-2.5 flex flex-wrap justify-between items-center text-[10px] md:text-xs font-mono tracking-wider text-neutral-700 bg-[#F5F4EE]"
    >
      <div class="flex items-center space-x-2.5">
        <span
          class="w-2 h-2 rounded-full bg-[#E05322] inline-block animate-pulse"
        ></span>
        <span class="font-bold text-neutral-900 uppercase"
          >DROP // 04.26 SUMMER CAPSULE</span
        >
      </div>
      <div class="flex items-center space-x-6 uppercase">
        <span class="hidden sm:inline text-neutral-500"
          >ZERO-DEADSTOCK PRODUCTION</span
        >
        <span class="text-[#C84518] font-bold"
          >EDITION STRICTLY LIMITED [300 PCS]</span
        >
      </div>
    </div>
    <!-- 01. Hero Section -->
    <section class="max-w-[1720px] mx-auto px-4 md:px-10 pt-10 pb-16 lg:py-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <!-- Hero Left: Typography & Manifest -->
        <div class="lg:col-span-5 space-y-6">
          <div
            class="text-[11px] font-mono tracking-widest text-neutral-500 uppercase"
          >
            // 2026 ARCHIVAL MANIFESTO
          </div>
          <h1
            class="text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.92] text-black"
          >
            WHERE<br />
            <span class="italic font-light">STYLE</span><br />
            LIVES
          </h1>
          <p
            class="text-sm md:text-base text-neutral-600 font-normal max-w-md leading-relaxed"
          >
            Curated streetwear drops and architectural everyday essentials,
            engineered in Tokyo with regenerative Japanese technical fabrics and
            zero-deadstock precision.
          </p>
          <div class="flex flex-wrap gap-4 pt-3">
            <a
              href="/catalog"
              class="inline-flex items-center space-x-3 bg-black hover:bg-[#E05322] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>EXPLORE CAPSULE 26</span>
              <span class="font-mono text-sm leading-none">→</span>
            </a>
            <a
              href="/lookbook"
              class="inline-flex items-center border border-neutral-300 hover:border-black bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors text-black"
            >
              VIEW LOOKBOOK
            </a>
          </div>
        </div>
        <!-- Hero Center: Editorial Hero Garment Showcase -->
        <div class="lg:col-span-4 relative group">
          <div
            class="relative overflow-hidden bg-neutral-200 aspect-[3/4] border border-neutral-300/80 shadow-sm"
          >
            <span
              class="absolute top-3 left-3 z-10 bg-black/85 text-white text-[9px] font-mono uppercase px-2.5 py-1 tracking-wider backdrop-blur-sm"
            >
              SPECIMEN: OVERSIZED TAILORED SHELL
            </span>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
              alt="Kyuric Oversized Tailored Shell"
              class="w-full h-full object-cover object-center grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute bottom-0 inset-x-0 bg-black/90 text-white p-3.5 flex justify-between items-center text-xs font-mono"
            >
              <span class="tracking-widest uppercase"
                >LOOK 01 // TOKYO RUNWAY</span
              >
              <span class="font-bold text-sm text-[#F5F4EE]">$290.00</span>
            </div>
          </div>
        </div>
        <!-- Hero Right: "NOW." Badge & Featured Specimen Card -->
        <div class="lg:col-span-3 space-y-6 flex flex-col justify-between">
          <div class="space-y-1">
            <div
              class="text-6xl sm:text-7xl font-black text-[#E05322] leading-none tracking-tighter"
            >
              NOW.
            </div>
            <div
              class="text-[10px] font-mono uppercase tracking-widest text-neutral-500"
            >
              // EDITION STATUS: LIVE
            </div>
          </div>
          <!-- Featured Specimen Card -->
          <div
            class="border border-neutral-300/90 bg-white p-4 space-y-3 shadow-sm hover:border-black transition-colors"
          >
            <div
              class="flex justify-between items-center text-[10px] font-mono text-neutral-500"
            >
              <span class="flex items-center space-x-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#E05322]"></span>
                <span class="font-bold text-neutral-900 uppercase"
                  >FEATURED CUT</span
                >
              </span>
              <span>[02/08]</span>
            </div>
            <div
              class="aspect-[4/3] bg-neutral-100 overflow-hidden relative border border-neutral-200"
            >
              <img
                src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
                alt="Parachute Cargo Pocket Cut"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex justify-between items-baseline pt-1">
              <div>
                <h3 class="text-xs font-bold uppercase text-black">
                  Parachute Cargo
                </h3>
                <span class="text-[11px] font-mono text-neutral-500"
                  >Sand Khaki</span
                >
              </div>
              <span class="text-sm font-black font-mono text-black">$185</span>
            </div>
          </div>
          <!-- Global Collectors Metric Pill -->
          <div
            class="bg-white border border-neutral-300/90 p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <div class="text-2xl font-black text-black leading-none">
                280K+
              </div>
              <div
                class="text-[9px] font-mono uppercase tracking-wider text-neutral-500 mt-1"
              >
                GLOBAL COLLECTORS // ATELIER NETWORK
              </div>
            </div>
            <div
              class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm"
            >
              ↗
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 02. Partner & Indexed Platforms Ticker -->
    <section class="border-y border-neutral-300/80 bg-white py-4 px-4 md:px-10">
      <div
        class="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-neutral-400"
      >
        <span class="text-neutral-500 text-[10px] font-bold"
          >INDEXED BY RECOGNIZED PLATFORMS:</span
        >
        <div class="flex flex-wrap items-center gap-6 sm:gap-10 font-bold">
          <span class="hover:text-black transition-colors cursor-default"
            >SLACK</span
          >
          <span class="hover:text-black transition-colors cursor-default"
            >DROPBOX</span
          >
          <span class="hover:text-black transition-colors cursor-default"
            >WEBFLOW</span
          >
          <span
            class="text-[#E05322] font-black hover:opacity-80 transition-opacity cursor-default"
            >HYPEBEAST</span
          >
          <span class="hover:text-black transition-colors cursor-default"
            >HIGHSNOBIETY</span
          >
          <span class="hover:text-black transition-colors cursor-default"
            >REMESSA</span
          >
        </div>
      </div>
    </section>
    <!-- 03. Featured Bestseller Drop Spotlight -->
    <section
      class="max-w-[1720px] mx-auto px-4 md:px-10 py-16 border-b border-neutral-300/80"
    >
      <!-- Section Header -->
      <div
        class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span
            class="inline-block bg-[#E05322] text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 font-bold mb-2"
          >
            BESTSELLER // DROP SPECIMEN
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black"
          >
            HERITAGE KNIT & UTILITY SET
          </h2>
          <p
            class="text-xs font-mono text-neutral-500 uppercase mt-1 tracking-wider"
          >
            MENSWEAR & UNISEX ARCHIVE // CASUAL TECHNICAL WEAR
          </p>
        </div>
        <a
          href="/catalog"
          class="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 hover:text-[#E05322] flex items-center space-x-1"
        >
          <span>NEXT SPECIMEN</span> <span>↗</span>
        </a>
      </div>
      <!-- Spotlight Grid: Details, On-Model, Texture -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Col Left: Purchase & Garment Details Form -->
        <div
          class="lg:col-span-4 bg-white border border-neutral-300/80 p-6 sm:p-8 space-y-6 shadow-sm"
        >
          <div class="space-y-1">
            <span
              class="text-[10px] font-mono text-[#E05322] font-bold uppercase"
            >
              KY-26-KNIT // ARCHIVAL RELEASE
            </span>
            <h3 class="text-2xl font-black uppercase text-black">
              Organic Cotton-Linen Knit Set
            </h3>
            <p class="text-xs text-neutral-600 leading-relaxed pt-2">
              A relaxed knit polo silhouette engineered with structured Japanese
              drop-needle cotton, paired with effortless articulated relaxed
              trousers. Zero irritation, tailored drape.
            </p>
          </div>
          <!-- Feature Bullets -->
          <ul
            class="text-[11px] font-mono space-y-2 text-neutral-700 border-t border-b border-neutral-200 py-4"
          >
            <li class="flex items-center space-x-2">
              <span class="text-[#E05322]">⊙</span>
              <span>100% BREATHABLE REGENERATIVE COTTON-BLEND</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-[#E05322]">⊙</span>
              <span>ARTICULATED ERGONOMIC SLEEVE CONSTRUCTION</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-[#E05322]">⊙</span>
              <span>COLD-WASH TESTED // ZERO-SHRINKAGE MATRIX</span>
            </li>
          </ul>
          <!-- Size Selector & Stock Alert -->
          <div class="space-y-2.5">
            <div
              class="flex justify-between items-center text-[10px] font-mono"
            >
              <span class="text-neutral-500 uppercase">SELECT SPEC SIZE:</span>
              <span class="text-[#E05322] font-bold">• 18 PIECES IN STOCK</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="size in ['S', 'M', 'L', 'XL']"
                :key="size"
                @click="selectedSize = size"
                class="py-2.5 text-xs font-mono font-bold uppercase border transition-all text-center"
                :class="
                  selectedSize === size
                    ? 'bg-black text-white border-black shadow-inner'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-300 text-black'
                "
              >
                {{ size }}
              </button>
            </div>
          </div>
          <!-- Quantity Stepper & Price -->
          <div class="flex items-center justify-between pt-2">
            <div>
              <span
                class="text-[10px] font-mono text-neutral-400 block uppercase"
                >TAX INCLUDED</span
              >
              <span class="text-3xl font-black font-mono text-black"
                >${{ (89 * quantity).toFixed(2) }}</span
              >
            </div>
            <div
              class="flex items-center border border-neutral-300 bg-neutral-50"
            >
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                class="w-9 h-9 flex items-center justify-center font-mono text-sm hover:bg-neutral-200 transition-colors"
              >
                -
              </button>
              <span class="w-10 text-center font-mono text-xs font-bold">{{
                quantity.toString().padStart(2, "0")
              }}</span>
              <button
                @click="quantity++"
                class="w-9 h-9 flex items-center justify-center font-mono text-sm hover:bg-neutral-200 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          <!-- Add to Cart CTA -->
          <button
            @click="handleAddToCart"
            class="w-full bg-[#B84018] hover:bg-[#9E3614] text-white py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <span>ADD TO CART</span> <span>—</span>
            <span class="font-mono">${{ (89 * quantity).toFixed(2) }}</span>
          </button>
        </div>
        <!-- Col Center: Studio Fit Visual Reference -->
        <div class="lg:col-span-5 relative">
          <div
            class="aspect-[3/4] bg-neutral-200 overflow-hidden border border-neutral-300/80 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80"
              alt="Model Studio Fit Reference"
              class="w-full h-full object-cover object-top"
            />
            <div
              class="absolute bottom-3 left-3 bg-black/85 text-white text-[9px] font-mono uppercase px-3 py-1 tracking-wider backdrop-blur-sm"
            >
              STUDIO FIT REFERENCE (MODEL IS 186CM // SIZE M)
            </div>
          </div>
        </div>
        <!-- Col Right: Textile Index & Styling Card -->
        <div class="lg:col-span-3 space-y-4">
          <div
            class="aspect-[4/3] bg-neutral-200 overflow-hidden border border-neutral-300/80 relative"
          >
            <span
              class="absolute top-2 right-2 bg-black text-white text-[9px] font-mono uppercase px-2 py-0.5"
            >
              STYLE CO-ORD
            </span>
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
              alt="Style Co-Ord Match"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="bg-white border border-neutral-300/80 p-5 space-y-2">
            <div
              class="flex justify-between items-center text-[9px] font-mono text-neutral-500 uppercase"
            >
              <span>TEXTILE INDEX</span>
              <span class="font-bold text-black">KY-TEX® 410GSM</span>
            </div>
            <h4 class="text-sm font-bold uppercase text-black leading-snug">
              Regenerative Japanese Double-Weave
            </h4>
            <p class="text-xs text-neutral-600 leading-relaxed font-sans pt-1">
              Tactile waffle finish tailored for breathability in warm weather,
              micro-brushed interior for sensory comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- 04. Archival Specimens Catalog Showcase -->
    <section
      class="max-w-[1720px] mx-auto px-4 md:px-10 py-16 border-b border-neutral-300/80"
    >
      <!-- Title & Filters Bar -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div>
          <span
            class="text-[11px] font-mono tracking-widest text-[#E05322] uppercase block mb-1"
          >
            // SHOP THE DROP
          </span>
          <h2
            class="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black"
          >
            ARCHIVAL SPECIMENS
          </h2>
        </div>
        <!-- Category Pills -->
        <div
          class="flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase"
        >
          <button
            v-for="cat in specimenCategories"
            :key="cat.label"
            @click="activeCategory = cat.label"
            class="px-3.5 py-1.5 border transition-all text-[11px] font-bold"
            :class="
              activeCategory === cat.label
                ? 'bg-black text-white border-black'
                : 'bg-white hover:bg-neutral-100 border-neutral-300 text-neutral-700'
            "
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
      <!-- 6-Specimen Product Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <article
          v-for="item in filteredSpecimens"
          :key="item.id"
          class="bg-white border border-neutral-300/80 p-4 space-y-4 group hover:border-black transition-all shadow-sm flex flex-col justify-between"
        >
          <!-- Thumbnail & Badges -->
          <div
            class="aspect-[4/5] bg-neutral-100 overflow-hidden relative border border-neutral-200"
          >
            <span
              v-if="item.badge"
              class="absolute top-2.5 left-2.5 z-10 text-[9px] font-mono font-bold uppercase px-2 py-0.5"
              :class="item.badgeClass || 'bg-[#C84518] text-white'"
            >
              {{ item.badge }}
            </span>
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Product Details -->
          <div class="space-y-2 pt-1">
            <div
              class="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase"
            >
              <span>{{ item.category }}</span>
              <span v-if="item.meta">{{ item.meta }}</span>
            </div>
            <div class="flex justify-between items-baseline">
              <h3
                class="text-sm font-bold uppercase text-black tracking-tight group-hover:text-[#E05322] transition-colors"
              >
                {{ item.name }}
              </h3>
              <span class="text-sm font-mono font-black text-black">
                ${{ item.price.toFixed(2) }}
              </span>
            </div>
            <!-- Color Swatches -->
            <div class="flex items-center space-x-1.5 pt-1">
              <span
                v-for="color in item.colors"
                :key="color"
                class="w-2.5 h-2.5 rounded-full border border-black/20"
                :style="{ backgroundColor: color }"
              ></span>
            </div>
          </div>
        </article>
      </div>
      <!-- Catalog Pagination & Full Archive CTA -->
      <div
        class="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-300/60 text-xs font-mono"
      >
        <span class="text-neutral-500 uppercase">
          SHOWING SPECIMENS 01–06 OF 48 IN ARCHIVE
        </span>
        <a
          href="/catalog"
          class="inline-flex items-center space-x-2 bg-black hover:bg-[#E05322] text-white px-6 py-3 font-bold uppercase tracking-wider transition-colors text-xs"
        >
          <span>VIEW COMPLETE ARCHIVE [48]</span> <span>→</span>
        </a>
      </div>
    </section>
    <!-- 05. Runway Editorial: "ALL ABOUT MOMENTS ©26" -->
    <section
      class="max-w-[1720px] mx-auto px-4 md:px-10 py-16 border-b border-neutral-300/80"
    >
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div>
          <span
            class="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block mb-1"
          >
            // RUNWAY EDITORIAL // ISSUE 26
          </span>
          <h2
            class="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black"
          >
            ALL ABOUT MOMENTS ©26
          </h2>
        </div>
        <p class="text-xs text-neutral-600 font-sans max-w-md leading-relaxed">
          Every piece carries rhythm beyond garment construction. It reflects
          street energy, technical ergonomics, and understated modern elegance
          in motion.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Editorial Big Look Card -->
        <div
          class="lg:col-span-7 bg-white border border-neutral-300/80 p-5 space-y-4 shadow-sm"
        >
          <div
            class="aspect-[16/10] bg-neutral-200 overflow-hidden relative border border-neutral-200"
          >
            <span
              class="absolute top-3 left-3 bg-black/85 text-white text-[9px] font-mono uppercase px-2.5 py-1 tracking-wider"
            >
              LOOK 04 — GOING DISTANCE 2026
            </span>
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80"
              alt="Editorial Coat Runway"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex justify-between items-center pt-2">
            <div>
              <span
                class="text-[10px] font-mono text-neutral-400 uppercase block"
                >EDITORIAL NOTE</span
              >
              <h3 class="text-base font-bold uppercase text-black">
                Where Elegance Meets Technical Utility
              </h3>
            </div>
            <a
              href="/lookbook"
              class="bg-neutral-100 hover:bg-black hover:text-white px-4 py-2 text-[11px] font-mono font-bold uppercase transition-colors"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
        <!-- Atelier Breakdown & Testimonial Column -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Atelier Category Counts -->
          <div
            class="bg-white border border-neutral-300/80 p-6 space-y-4 shadow-sm"
          >
            <div
              class="flex justify-between items-center border-b border-neutral-200 pb-3 text-xs font-mono uppercase"
            >
              <span class="text-neutral-500 font-bold">ATELIER BREAKDOWN</span>
              <span class="text-[#E05322] font-black">[CATEGORIES]</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div
                class="sm:col-span-5 aspect-square bg-neutral-100 border border-neutral-200 overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80"
                  alt="Garment Specimen Tag"
                  class="w-full h-full object-cover"
                />
              </div>
              <ul
                class="sm:col-span-7 space-y-2 text-xs font-mono font-bold text-neutral-800"
              >
                <li class="flex justify-between">
                  <span>[01] SHIRTS</span>
                  <span class="text-neutral-400 font-normal">(174)</span>
                </li>
                <li class="flex justify-between text-[#E05322]">
                  <span>[02] JACKETS</span> <span>(361)</span>
                </li>
                <li class="flex justify-between">
                  <span>[03] JEANS</span>
                  <span class="text-neutral-400 font-normal">(368)</span>
                </li>
                <li class="flex justify-between">
                  <span>[04] OUTER</span>
                  <span class="text-neutral-400 font-normal">(117)</span>
                </li>
                <li class="flex justify-between">
                  <span>[05] SHOES</span>
                  <span class="text-neutral-400 font-normal">(78)</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Testimonial Card -->
          <div
            class="bg-white border border-neutral-300/80 p-6 space-y-4 shadow-sm"
          >
            <div
              class="flex justify-between items-center text-[10px] font-mono text-neutral-500"
            >
              <span class="font-bold text-black uppercase"
                >01 / 08 [TESTIMONIAL]</span
              >
              <span class="text-[#E05322]">★★★★★ 5.0 (49 REVIEWS)</span>
            </div>
            <p
              class="text-sm text-neutral-800 font-normal leading-relaxed italic"
            >
              "Everything is absolutely perfect! From the technical fabric
              durability to the flawless tailored drape, every KYURIC piece
              feels completely premium and elevated."
            </p>
            <div
              class="flex items-center space-x-3 pt-2 border-t border-neutral-200"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Emma Williams"
                class="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div class="text-xs font-bold text-black uppercase">
                  Emma Williams
                </div>
                <div class="text-[10px] font-mono text-neutral-500 uppercase">
                  FASHION STYLIST // LONDON
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";

// Interactive states
const selectedSize = ref("M");
const quantity = ref(1);
const emailInput = ref("");
const activeCategory = ref("ALL [48]");

// Specimen category filter tags
const specimenCategories = [
  { label: "ALL [48]" },
  { label: "JACKETS & PARKAS" },
  { label: "HEAVY KNITS" },
  { label: "TROUSERS" },
  { label: "TEES & TOPS" },
];

// Archival product grid items
const specimens = ref([
  {
    id: 1,
    name: "Tactical Parachute Cargo",
    category: "OUTERWEAR // TROUSER",
    meta: "AVAILABLE IN 3 COLORS",
    price: 185.0,
    badge: "NEW RELEASE",
    badgeClass: "bg-[#C84518] text-white",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    colors: ["#4b5320", "#1c1c1c", "#a8a29e"],
  },
  {
    id: 2,
    name: "Heritage Heavyweight Hoodie",
    category: "HEAVYWEIGHT JERSEY",
    meta: "550 GSM FLEECE",
    price: 145.0,
    badge: "TOP RATED",
    badgeClass: "bg-black text-white",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
    colors: ["#2b2b2b", "#171717"],
  },
  {
    id: 3,
    name: "Asymmetric Zip Bomber",
    category: "TECHNICAL SHELL",
    meta: "WATER REPELLENT",
    price: 290.0,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80",
    colors: ["#e5e4de", "#111111"],
  },
  {
    id: 4,
    name: "Textured Mohair Cardigan",
    category: "KNITWEAR",
    meta: "MOHAIR / WOOL",
    price: 220.0,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    colors: ["#b45309", "#1f2937"],
  },
  {
    id: 5,
    name: "Modular Utility Vest",
    category: "ACCESSORY // VEST",
    meta: "CORDURA NYLON",
    price: 160.0,
    badge: "LOW STOCK",
    badgeClass: "bg-[#C84518] text-white",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    colors: ["#18181b", "#3f3f46"],
  },
  {
    id: 6,
    name: "Oversized Raw Edge Tee",
    category: "ESSENTIALS",
    meta: "ORGANIC COTTON 280GSM",
    price: 68.0,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
    colors: ["#f4f4f5", "#18181b"],
  },
]);

const filteredSpecimens = computed(() => {
  if (activeCategory.value === "ALL [48]") return specimens.value;

  if (activeCategory.value === "TROUSERS") {
    return specimens.value.filter((item) => item.category.includes("TROUSER"));
  }

  if (activeCategory.value === "HEAVY KNITS") {
    return specimens.value.filter(
      (item) =>
        item.category.includes("KNITWEAR") || item.category.includes("JERSEY"),
    );
  }

  return specimens.value;
});

const handleAddToCart = () => {
  alert(
    `Added ${quantity.value}x Organic Cotton-Linen Knit Set (Size: ${selectedSize.value}) to bag.`,
  );
};

const handleSubscribe = () => {
  if (!emailInput.value)
    return alert(`Atelier access request submitted for: ${emailInput.value}`);

  emailInput.value = "";
};
</script>
