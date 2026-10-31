<template>
  <main v-if="product && detail" 
    class="w-full bg-[#FAF9F5] text-neutral-900 font-sans selection:bg-[#E05322] selection:text-white"
  >
    <!-- 01. Top Breadcrumb & Archival Spec Tracker Bar -->
    <div
      class="border-b border-neutral-300/80 px-4 md:px-10 py-3 flex flex-wrap justify-between items-center text-[10px] md:text-xs font-mono tracking-wider text-neutral-600 bg-[#F5F4EE]"
    >
      <div class="flex items-center space-x-2 truncate">
        <a href="/" class="hover:text-black transition-colors uppercase"
          >HOME</a
        >
        <span>/</span>
        <a href="/catalog" class="hover:text-black transition-colors uppercase"
          >CATALOG</a
        >
        <span>/</span>
        <a
          href="/catalog?cat=trousers"
          class="hover:text-black transition-colors uppercase"
          >{{ product.category }}</a
        >
        <span>/</span>
        <span class="text-neutral-900 font-bold uppercase"
          >{{ product.name }}</span
        >
      </div>
      <div class="flex items-center space-x-4 text-xs font-mono">
        <span class="text-[#C84518] font-bold flex items-center space-x-1.5">
          <span
            class="w-2 h-2 rounded-full bg-[#E05322] inline-block animate-pulse"
          ></span>
          <span>{{ product.collection }}</span>
        </span>
        <span class="text-neutral-400 hidden sm:inline">|</span>
        <span class="text-neutral-500 uppercase hidden sm:inline"
          >STYLE NO. {{ product.styleNo }}</span>
        >
        <span class="text-neutral-400 hidden sm:inline">|</span>
        <span class="text-neutral-900 font-bold uppercase">IN STOCK</span>
      </div>
    </div>
    <!-- Main Container -->
    <div class="max-w-[1720px] mx-auto px-4 md:px-10 py-8 lg:py-12 space-y-16">
      <!-- ================= 02. PRIMARY PDP HERO GRID (GALLERY + SPEC/PURCHASE) ================= -->
      <section
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start"
      >
        <!-- LEFT: GARMENT VISUAL DOSSIER (7 COLS) -->
        <div class="lg:col-span-7 space-y-4">
          <!-- Main Hero Lookbook Display -->
          <div
            class="relative bg-neutral-200 border border-neutral-300/90 aspect-[4/5] sm:aspect-[3/4] overflow-hidden group shadow-sm"
          >
            <!-- Top Tags -->
            <div class="absolute top-4 left-4 z-10 flex flex-col space-y-2">
              <span
                class="bg-black text-white text-[9px] font-mono uppercase px-2.5 py-1 tracking-widest font-bold"
              >
                NEW DROP
              </span>
              <span
                class="bg-white/95 text-neutral-900 text-[9px] font-mono uppercase px-2.5 py-1 tracking-wider border border-neutral-200 backdrop-blur-sm"
              >
                WATER-REPELLENT DWR
              </span>
            </div>
            <!-- Zoom / Expand Controls -->
            <div
              class="absolute top-4 right-4 z-10 flex items-center space-x-1"
            >
              <button
                class="w-8 h-8 bg-white/90 hover:bg-white text-black border border-neutral-300 flex items-center justify-center transition-colors shadow-sm"
                title="Expand View"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
              <button
                class="w-8 h-8 bg-white/90 hover:bg-white text-black border border-neutral-300 flex items-center justify-center transition-colors shadow-sm"
                title="Zoom Detail"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </button>
            </div>
            <!-- Active Hero Image -->
            <img
              :src="galleryImages[activeImageIndex]?.url"
              :alt="galleryImages[activeImageIndex]?.alt"
              class="w-full h-full object-cover object-top transition-all duration-700"
            />
            <!-- Model Sizing Annotation & Fabric Spec Badges -->
            <div
              class="absolute bottom-4 inset-x-4 flex flex-wrap justify-between items-center gap-2 pointer-events-none"
            >
              <div
                class="bg-black/85 text-white px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider backdrop-blur-sm flex items-center space-x-2"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#E05322]"></span>
                <span>MODEL: 6'1" (185CM) // SIZE L [34]</span>
              </div>
              <div
                class="bg-black text-white px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider"
              >
                100% TOKYO MIL-SPEC RIPSTOP
              </div>
            </div>
          </div>
          <!-- 4-Tile Macro Detail Thumbnails -->
          <div class="grid grid-cols-4 gap-3">
            <button
              v-for="(img, idx) in galleryImages"
              :key="img.id"
              @click="activeImageIndex = idx"
              class="relative aspect-square border overflow-hidden transition-all bg-neutral-100 group text-left"
              :class="
                activeImageIndex === idx
                  ? 'border-black ring-1 ring-black'
                  : 'border-neutral-300 hover:border-neutral-500'
              "
            >
              <img
                :src="img.url"
                :alt="img.alt"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute bottom-1 right-1 bg-black/80 text-white px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-tighter"
              >
                {{ img.label }}
              </div>
            </button>
          </div>
          <!-- 3D Kinetic Ergonomics Feature Callout -->
          <div
            class="border border-neutral-300/80 bg-white p-4 flex items-center justify-between shadow-sm"
          >
            <div class="flex items-center space-x-3.5">
              <div
                class="w-9 h-9 border border-neutral-300 flex items-center justify-center text-sm font-mono bg-neutral-50"
              >
                ❖
              </div>
              <div>
                <h4 class="text-xs font-bold uppercase text-black font-heading">
                  3D KINETIC ERGONOMICS
                </h4>
                <p class="text-[11px] font-mono text-neutral-500">
                  Engineered gusseted crotch & 4-dart knee articulation for
                  unrestricted city movement.
                </p>
              </div>
            </div>
            <a
              href="#garment-engineering"
              class="text-[10px] font-mono font-bold uppercase text-neutral-800 hover:text-[#E05322] flex items-center space-x-1 shrink-0 ml-4"
            >
              <span>VIEW TECH SPECS</span> <span>↓</span>
            </a>
          </div>
        </div>
        <!-- RIGHT: SPECIFICATION, SIZING & COMMERCE SUITE (5 COLS) -->
        <div
          class="lg:col-span-5 bg-white border border-neutral-300/80 p-6 sm:p-8 xl:p-10 space-y-7 shadow-sm"
        >
          <!-- Capsule Header & Rating -->
          <div class="flex justify-between items-center text-xs font-mono">
            <div
              class="text-[10px] font-mono tracking-widest text-neutral-500 uppercase"
            >
              <span class="text-[#C84518] font-bold"
                >KYURIC // CAPSULE 26-AW</span
              >
            </div>
            <a
              href="#reviews"
              class="flex items-center space-x-1 text-black hover:text-[#E05322] transition-colors"
            >
              <span class="text-[#E05322] text-xs">★★★★★</span>
              <span class="font-bold font-mono text-[11px]">4.9</span>
              <span class="text-neutral-400 text-[10px] underline"
                >(128 reviews)</span
              >
            </a>
          </div>
          <!-- Product Title -->
          <div class="space-y-1">
            <h1
              class="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black font-heading leading-[0.95]"
            >
              <template v-for="(word, i) in titleWords" :key="i">
                {{ word }}<br v-if="i< titleWords.length - 1"/>
              </template>
            </h1>
          </div>
          <!-- Price & Installments -->
          <div class="space-y-2 border-b border-neutral-200 pb-5">
            <div class="flex items-baseline space-x-3">
              <span class="text-3xl font-black font-mono text-black leading-none">${{ product.price.toFixed(2) }}</span>
                <template v-if="product.compareAtPrice">
                  <span class="text-sm font-mono text-neutral-400 line-through">${{ product.compareAtPrice.toFixed(2) }}</span>
                  <span class="bg-[#C84518] text-white text-[9px] font-mono font-bold uppercase px-2 py-0.5">
                    SAVE ${{ savings.toFixed(2) }}
                  </span>
                </template>
            </div>
            <div
              class="flex items-center space-x-2 text-[10px] font-mono text-neutral-500"
            >
              <span
                >Or 4 interest-free payments of
                <strong class="text-black font-bold">${{ (product.price / 4).toFixed(2) }}</strong>
                with
              </span>
              <span
                class="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5 font-bold text-black uppercase text-[9px]"
                >KLARNA</span
              >
              <span>/</span>
              <span
                class="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5 font-bold text-black uppercase text-[9px]"
                >AFTERPAY</span
              >
            </div>
          </div>
          <!-- Color Swatch Selection -->
          <div class="space-y-2.5">
            <div
              class="flex justify-between items-center text-[10px] font-mono uppercase"
            >
              <span class="text-neutral-500">COLOR:</span>
              <span class="text-black font-bold">{{ selectedColor?.name }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <button
                v-for="color in colorVariants"
                :key="color.name"
                @click="selectedColor = color"
                class="w-8 h-8 p-0.5 border transition-all relative"
                :class="
                  selectedColor?.name === color.name
                    ? 'border-black ring-1 ring-black'
                    : 'border-neutral-300 hover:border-neutral-500'
                "
                :title="color.name"
              >
                <span
                  class="w-full h-full block"
                  :style="{ backgroundColor: color.hex }"
                ></span>
              </button>
            </div>
          </div>
          <!-- Size Picker & Size Guide -->
          <div class="space-y-2.5">
            <div
              class="flex justify-between items-center text-[10px] font-mono uppercase"
            >
              <span class="text-neutral-500">SELECT SIZE:</span>
              <button
                @click="isSizeGuideOpen = true"
                class="text-neutral-800 hover:text-black underline font-bold flex items-center space-x-1"
              >
                <span>SIZE GUIDE & FIT</span>
              </button>
            </div>
            <div class="grid grid-cols-6 gap-1.5">
              <button
                v-for="size in sizeOptions"
                :key="size.label"
                @click="selectedSize = size.label"
                class="py-3 px-1 border transition-all text-center flex flex-col items-center justify-center"
                :class="
                  selectedSize === size.label
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-300 text-neutral-800'
                "
              >
                <span class="text-xs font-mono font-bold leading-none">{{
                  size.label
                }}</span>
                <span
                  class="text-[9px] font-mono text-neutral-400 mt-1 leading-none"
                  :class="selectedSize === size.label ? 'text-neutral-300' : ''"
                  >{{ size.waist }}</span
                >
              </button>
            </div>
            <!-- Inventory Low Alert -->
            <div
              class="flex items-center justify-between text-[10px] font-mono pt-1 text-neutral-500"
            >
              <span v-if="detail.lowStock" class="text-[#C84518] font-bold flex items-center space-x-1">
                <span>●</span>
                <span>ONLY {{ detail.lowStock }} ITEMS LEFT IN SIZE {{ selectedSize }}</span>
              </span>
              <span class="uppercase">RUNS TRUE TO RELAXED SIZE</span>
            </div>
          </div>
          <!-- Quantity Stepper & Add to Bag -->
          <div class="space-y-3 pt-2">
            <div class="flex gap-3">
              <!-- Quantity Stepper -->
              <div
                class="flex items-center border border-neutral-300 bg-neutral-50 shrink-0"
              >
                <button
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="w-11 h-12 flex items-center justify-center font-mono text-sm hover:bg-neutral-200 transition-colors"
                >
                  -
                </button>
                <span class="w-10 text-center font-mono text-xs font-bold">{{
                  quantity.toString().padStart(2, "0")
                }}</span>
                <button
                  @click="quantity++"
                  class="w-11 h-12 flex items-center justify-center font-mono text-sm hover:bg-neutral-200 transition-colors"
                >
                  +
                </button>
              </div>
              <!-- Main Add to Bag Button -->
              <button
                @click="handleAddToBag"
                class="w-full bg-black hover:bg-[#E05322] text-white py-3.5 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-3 transition-colors shadow-sm"
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
                <span>ADD TO BAG — ${{ (185 * quantity).toFixed(2) }}</span>
                <span class="font-mono text-sm">→</span>
              </button>
            </div>
            <!-- Secondary Actions: Wishlist & In-Store Availability -->
            <div class="grid grid-cols-2 gap-3 pt-1">
              <button
                @click="isWishlisted = !isWishlisted"
                class="border border-neutral-300 bg-white hover:border-black py-2.5 px-3 text-[10px] font-mono font-bold uppercase flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span
                  :class="isWishlisted ? 'text-[#E05322]' : 'text-neutral-400'"
                  >{{ isWishlisted ? "♥" : "♡" }}</span
                >
                <span>{{
                  isWishlisted ? "SAVED TO WISHLIST" : "SAVE TO WISHLIST"
                }}</span>
              </button>
              <button
                @click="
                  notify(
                    'Stock confirmed at Tokyo Atelier (Shibuya) & NYC Archive (SoHo).',
                  )
                "
                class="border border-neutral-300 bg-white hover:border-black py-2.5 px-3 text-[10px] font-mono font-bold uppercase flex items-center justify-center space-x-1.5 transition-colors text-neutral-800"
              >
                <span>🏛</span> <span>FIND IN TOKYO / NYC</span>
              </button>
            </div>
          </div>
          <!-- Value Props & Logistics List -->
          <div
            class="border-t border-neutral-200 pt-5 space-y-3 text-xs font-mono"
          >
            <div class="flex items-start space-x-3 text-neutral-700">
              <span class="text-sm leading-none pt-0.5">🚚</span>
              <div>
                <strong class="text-black font-bold uppercase text-[11px] block"
                  >Free Worldwide Express Shipping</strong
                >
                <span class="text-[10px] text-neutral-500"
                  >Complimentary carbon-neutral DHL transit on orders over
                  $250.</span
                >
              </div>
            </div>
            <div class="flex items-start space-x-3 text-neutral-700">
              <span class="text-sm leading-none pt-0.5">↺</span>
              <div>
                <strong class="text-black font-bold uppercase text-[11px] block"
                  >Free 14-Day Returns & Exchanges</strong
                >
                <span class="text-[10px] text-neutral-500"
                  >Hassle-free prepaid return slip included in every atelier
                  box.</span
                >
              </div>
            </div>
            <div class="flex items-start space-x-3 text-neutral-700">
              <span class="text-sm leading-none pt-0.5">🛡</span>
              <div>
                <strong class="text-black font-bold uppercase text-[11px] block"
                  >100% Japanese Ripstop Fabric</strong
                >
                <span class="text-[10px] text-neutral-500"
                  >Reinforced grid structure built for lifetime tactile
                  durability.</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ================= 03. GARMENT ENGINEERING & BUILD (DISCLOSURE ACCORDIONS) ================= -->
      <section
        id="garment-engineering"
        class="border-t border-neutral-300/80 pt-12"
      >
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span
              class="text-[11px] font-mono tracking-widest text-[#E05322] uppercase block mb-1"
            >
              // ARCHIVE SPECIFICATIONS
            </span>
            <h2
              class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-heading"
            >
              GARMENT ENGINEERING & BUILD
            </h2>
          </div>
          <span class="text-xs font-mono uppercase text-neutral-500 font-bold">
            [ZERO-DEADSTOCK PRODUCTION]
          </span>
        </div>
        <div
          class="divide-y divide-neutral-300/80 border-y border-neutral-300/80 bg-white"
        >
          <!-- 01 Description & Design Notes (Default Open) -->
          <div class="p-6 transition-colors">
            <button
              @click="toggleAccordion(1)"
              class="w-full flex justify-between items-center text-left text-sm md:text-base font-black uppercase text-black font-heading group"
            >
              <span class="flex items-center space-x-3">
                <span
                  class="text-xs font-mono text-neutral-400 group-hover:text-[#E05322] font-normal"
                  >01</span
                >
                <span>DESCRIPTION & DESIGN NOTES</span>
              </span>
              <span class="text-lg font-mono text-neutral-400">{{
                openAccordions.includes(1) ? "▲" : "▼"
              }}</span>
            </button>
            <div
              v-show="openAccordions.includes(1)"
              class="pt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-sans text-neutral-700 leading-relaxed"
            >
              <div class="lg:col-span-8 space-y-3">
                <p v-for="(para, i) in detail.description" :key="i">{{ para }}</p>
              </div>
              <div
                class="lg:col-span-4 bg-[#F5F4EE] border border-neutral-300 p-4 space-y-2 font-mono text-[11px]"
              >
                <div class="text-neutral-500 uppercase font-bold text-[10px]">
                  KEY HIGHLIGHTS:
                </div>
                <ul class="space-y-1 text-neutral-800">
                  <li v-for="h in detail.highlights" :key="h">• {{ h }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 02 Fabric & Material Specifications -->
          <div class="p-6 transition-colors">
            <button
              @click="toggleAccordion(2)"
              class="w-full flex justify-between items-center text-left text-sm md:text-base font-black uppercase text-black font-heading group"
            >
              <span class="flex items-center space-x-3">
                <span
                  class="text-xs font-mono text-neutral-400 group-hover:text-[#E05322] font-normal"
                  >02</span
                >
                <span>FABRIC & MATERIAL SPECIFICATIONS</span>
              </span>
              <span class="text-lg font-mono text-neutral-400">{{
                openAccordions.includes(2) ? "▲" : "▼"
              }}</span>
            </button>
            <div
              v-show="openAccordions.includes(2)"
              class="pt-5 text-xs font-mono space-y-3 text-neutral-700"
            >
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="border border-neutral-200 p-3 bg-neutral-50">
                  <div class="text-neutral-400 text-[10px] uppercase">
                    {{  detail.fabric.textileCode }}
                  </div>
                  <div class="font-bold text-black mt-1">KY-RS-280G</div>
                </div>
                <div class="border border-neutral-200 p-3 bg-neutral-50">
                  <div class="text-neutral-400 text-[10px] uppercase">
                    COMPOSITION
                  </div>
                  <div class="font-bold text-black mt-1">
                    {{ detail.fabric.composition }}
                  </div>
                </div>
                <div class="border border-neutral-200 p-3 bg-neutral-50">
                  <div class="text-neutral-400 text-[10px] uppercase">
                    COATING
                  </div>
                  <div class="font-bold text-black mt-1">
                    {{ detail.fabric.coating }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 03 Size, Measurements & Fit Guide -->
          <div class="p-6 transition-colors">
            <button
              @click="toggleAccordion(3)"
              class="w-full flex justify-between items-center text-left text-sm md:text-base font-black uppercase text-black font-heading group"
            >
              <span class="flex items-center space-x-3">
                <span
                  class="text-xs font-mono text-neutral-400 group-hover:text-[#E05322] font-normal"
                  >03</span
                >
                <span>SIZE, MEASUREMENTS & FIT GUIDE</span>
              </span>
              <span class="text-lg font-mono text-neutral-400">{{
                openAccordions.includes(3) ? "▲" : "▼"
              }}</span>
            </button>
            <div
              v-show="openAccordions.includes(3)"
              class="pt-5 text-xs font-mono overflow-x-auto"
            >
              <table
                class="w-full text-left border border-neutral-200 text-[11px]"
              >
                <thead class="bg-neutral-100 border-b border-neutral-200">
                  <tr>
                    <th class="p-2.5">SIZE</th>
                    <th class="p-2.5">WAIST (IN)</th>
                    <th class="p-2.5">INSEAM (IN)</th>
                    <th class="p-2.5">LEG OPENING (CINCHED)</th>
                    <th class="p-2.5">THIGH WIDTH</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr v-for="row in detail.sizeChart" :key="row.label" :class="row.label === detail.modelSize ? 'bg-neutral-100/70' : ''">
                    <td class="p-2.5 font-bold" :class="row.label === detail.modelSize ? 'text-[#C84518]' : ''">
                      {{ row.display }}{{ row.label === detail.modelSize ? ' *' : '' }}
                    </td>
                    <td class="p-2.5">{{ row.waist }}</td>
                    <td class="p-2.5">{{ row.inseam }}</td>
                    <td class="p-2.5">{{ row.legOpening }}</td>
                    <td class="p-2.5">{{ row.thigh }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-[10px] text-neutral-400 mt-2">
                * Model shown wears Size L (Waist 34).
              </div>
            </div>
          </div>
          <!-- 04 Sustainability & Garment Care -->
          <div class="p-6 transition-colors">
            <button
              @click="toggleAccordion(4)"
              class="w-full flex justify-between items-center text-left text-sm md:text-base font-black uppercase text-black font-heading group"
            >
              <span class="flex items-center space-x-3">
                <span
                  class="text-xs font-mono text-neutral-400 group-hover:text-[#E05322] font-normal"
                  >04</span
                >
                <span>SUSTAINABILITY & GARMENT CARE</span>
              </span>
              <span class="text-lg font-mono text-neutral-400">{{
                openAccordions.includes(4) ? "▲" : "▼"
              }}</span>
            </button>
            <div
              v-show="openAccordions.includes(4)"
              class="pt-5 text-xs font-mono space-y-2 text-neutral-600"
            >
              <p v-for="(c, i) in detail.care" :key="i">• {{ c }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- ================= 04. COMPLETE THE LOOK (CURATED COMBINATIONS) ================= -->
      <section class="border-t border-neutral-300/80 pt-12">
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span
              class="text-[11px] font-mono tracking-widest text-[#E05322] uppercase block mb-1"
            >
              // CURATED COMBINATIONS
            </span>
            <h2
              class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-heading"
            >
              COMPLETE THE LOOK
            </h2>
          </div>
          <span class="text-xs font-mono uppercase text-neutral-500 font-bold">
            RECOMMENDED BY KYURIC STYLING ATELIER [04 ARTICLES]
          </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="look in lookRecommendations"
            :key="look.id"
            :product="look"
            @quick-add="quickAdd"
          />
        </div>
      </section>
      <!-- ================= 05. CUSTOMER REVIEWS & FIT DATA ================= -->
      <section id="reviews" class="border-t border-neutral-300/80 pt-12">
        <div
          class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8"
        >
          <div>
            <span
              class="text-[11px] font-mono tracking-widest text-[#E05322] uppercase block mb-1"
            >
              // ARCHIVAL COMMUNITY VERIFICATION
            </span>
            <h2
              class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-heading"
            >
              CUSTOMER REVIEWS & FIT DATA
            </h2>
            <p class="text-xs font-mono text-neutral-500 mt-1">
              Real assessments from verified purchasers worldwide regarding
              fabric weight, silhouette drape, and durability.
            </p>
          </div>
          <!-- Overall Rating Metric Card -->
          <div
            class="flex items-center space-x-6 bg-white border border-neutral-300 p-4 shadow-sm shrink-0"
          >
            <div>
              <div class="flex items-baseline space-x-2">
                <span
                  class="text-3xl font-black font-mono text-black leading-none"
                  >4.9</span
                >
                <span class="text-[#E05322] text-sm">★★★★★</span>
              </div>
              <div
                class="text-[9px] font-mono uppercase text-neutral-500 mt-0.5"
              >
                BASED ON 128 VERIFIED REVIEWS<br />
                <strong class="text-black">97% RECOMMEND THIS GARMENT</strong>
              </div>
            </div>
            <!-- Fit Matrix Meter -->
            <div class="border-l border-neutral-200 pl-4 space-y-1">
              <div
                class="text-[9px] font-mono uppercase text-neutral-500 font-bold"
              >
                FIT FEEDBACK MATRIX:
              </div>
              <div
                class="w-36 h-2 bg-neutral-200 rounded-none relative overflow-hidden"
              >
                <div
                  class="absolute inset-y-0 left-1/4 right-1/6 bg-black"
                ></div>
              </div>
              <div
                class="flex justify-between text-[8px] font-mono text-neutral-400 uppercase"
              >
                <span>RUNS SMALL</span>
                <span class="text-black font-bold">TRUE TO SIZE (82%)</span>
                <span>RUNS LARGE</span>
              </div>
            </div>
            <!-- Write Review CTA -->
            <button
              @click="notify('Review modal protocol opened.')"
              class="bg-black hover:bg-[#E05322] text-white px-4 py-2.5 text-[10px] font-mono uppercase font-bold tracking-wider transition-colors shrink-0"
            >
              WRITE A REVIEW
            </button>
          </div>
        </div>
        <!-- 3-Review Testimonial Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="review in reviewsList"
            :key="review.id"
            class="bg-white border border-neutral-300/80 p-6 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div class="space-y-2">
              <div class="flex justify-between items-center text-xs font-mono">
                <span class="text-[#E05322]">★★★★★</span>
                <span class="text-neutral-400 text-[10px] uppercase">{{
                  review.date
                }}</span>
              </div>
              <h4
                class="text-xs font-bold uppercase text-black font-heading tracking-tight"
              >
                {{ review.headline }}
              </h4>
              <p
                class="text-xs font-sans text-neutral-700 leading-relaxed italic"
              >
                "{{ review.comment }}"
              </p>
            </div>
            <div
              class="pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono"
            >
              <div>
                <span class="font-bold text-black uppercase block">{{
                  review.author
                }}</span>
                <span class="text-neutral-400 uppercase">{{
                  review.verifiedPurchaserBadge
                }}</span>
              </div>
              <span
                class="w-4 h-4 rounded-full border border-neutral-300 flex items-center justify-center text-[9px] text-neutral-500 font-bold"
              >
                ✓
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <main v-else 
    class="w-full bg-[#FAF9F5] px-4 md:px-10 py-24 text-center font-mono text-xs uppercase space-y-3"
  >
    <p class="text-[#C84518] font-bold">// 404 — ARTICLE NOT IN ARCHIVE</p>
    <RouterLink to="/catalog" class="underline">BACK TO CATALOG</RouterLink>
</main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useProducts } from '@/app/products_service/useProduct'
import ProductCard from '@/components/product/ProductCard.vue'
import type { ProductColor, ProductSummary } from '@/lib/models/Product'

const props = defineProps<{ slug: string }>()
const { getBySlug, getDetail, getMany } = useProducts()

const product = computed(() => getBySlug(props.slug))
const detail = computed(() => getDetail(props.slug))

const galleryImages = computed(() => detail.value?.gallery ?? [])
const colorVariants = computed(() => detail.value?.colors ?? [])
const sizeOptions = computed(() => detail.value?.sizes ?? [])
const reviewsList = computed(() => detail.value?.reviews ?? [])
const lookRecommendations = computed(() => getMany(detail.value?.related ?? []))

const titleWords = computed(() => product.value?.name.split(' ') ?? [])
const savings = computed(() => {
  const p = product.value
  return p?.compareAtPrice ? p.compareAtPrice - p.price : 0
})

const quantity = ref(1)
const selectedSize = ref('')
const selectedColor = ref<ProductColor | null>(null)
const isWishlisted = ref(false)
const isSizeGuideOpen = ref(false)
const activeImageIndex = ref(0)
const openAccordions = ref<number[]>([1])

watch(
  () => props.slug,
  () => {
    quantity.value = 1
    activeImageIndex.value = 0
    openAccordions.value = [1]
    isWishlisted.value = false
    selectedColor.value = detail.value?.colors[0] ?? null
    selectedSize.value = detail.value?.modelSize ?? detail.value?.sizes[0]?.label ?? ''
  },
  { immediate: true }
)

const toggleAccordion = (index: number) => {
  openAccordions.value = openAccordions.value.includes(index)
    ? openAccordions.value.filter((i) => i !== index)
    : [...openAccordions.value, index]
}

const notify = (msg: string) => alert(msg)

const handleAddToBag = () => {
  if (!product.value) return
  notify(
    `Added ${quantity.value}x ${product.value.name} (Size ${selectedSize.value}, Color: ${selectedColor.value?.name}) to your bag. Total: $${(product.value.price * quantity.value).toFixed(2)}`
  )
}

const quickAdd = (p: ProductSummary) => notify(`Added ${p.name} to quick bag`)
</script>
