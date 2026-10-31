<template>
  <main
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
          >TROUSERS & CARGO</a
        >
        <span>/</span>
        <span class="text-neutral-900 font-bold uppercase"
          >TACTICAL PARACHUTE CARGO</span
        >
      </div>
      <div class="flex items-center space-x-4 text-xs font-mono">
        <span class="text-[#C84518] font-bold flex items-center space-x-1.5">
          <span
            class="w-2 h-2 rounded-full bg-[#E05322] inline-block animate-pulse"
          ></span>
          <span>CAPSULE 26-AW</span>
        </span>
        <span class="text-neutral-400 hidden sm:inline">|</span>
        <span class="text-neutral-500 uppercase hidden sm:inline"
          >STYLE NO. #KY-7049</span
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
              :src="galleryImages[activeImageIndex].url"
              :alt="galleryImages[activeImageIndex].alt"
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
              TACTICAL<br />PARACHUTE<br />CARGO
            </h1>
          </div>
          <!-- Price & Installments -->
          <div class="space-y-2 border-b border-neutral-200 pb-5">
            <div class="flex items-baseline space-x-3">
              <span
                class="text-3xl font-black font-mono text-black leading-none"
                >$185.00</span
              >
              <span class="text-sm font-mono text-neutral-400 line-through"
                >$220.00</span
              >
              <span
                class="bg-[#C84518] text-white text-[9px] font-mono font-bold uppercase px-2 py-0.5"
              >
                SAVE $35.00
              </span>
            </div>
            <div
              class="flex items-center space-x-2 text-[10px] font-mono text-neutral-500"
            >
              <span
                >Or 4 interest-free payments of
                <strong class="text-black font-bold">$46.25</strong> with</span
              >
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
              <span class="text-black font-bold">{{ selectedColor.name }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <button
                v-for="color in colorVariants"
                :key="color.name"
                @click="selectedColor = color"
                class="w-8 h-8 p-0.5 border transition-all relative"
                :class="
                  selectedColor.name === color.name
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
                <span>📏</span> <span>SIZE GUIDE & FIT</span>
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
              <span
                class="text-[#C84518] font-bold flex items-center space-x-1"
              >
                <span>●</span>
                <span>ONLY 3 ITEMS LEFT IN SIZE {{ selectedSize }}</span>
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
                  alert(
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
                <p>
                  The Tactical Parachute Cargo trousers represent KYURIC’s
                  obsessive study of modern utilitarian ergonomics. Constructed
                  with an architectural relaxed-tapered silhouette, they feature
                  modular 3D accordion cargo pockets with internal divider
                  sleeves, articulated four-dart knee pleats, and custom bungee
                  toggles at the hems that allow instantaneous transformation
                  between a wide parachute stack and a clean cinched cuff.
                </p>
                <p>
                  Woven from dense 280GSM Japanese ripstop with a
                  fluorocarbon-free water-repellent finish, this piece
                  transitions seamlessly from harsh precipitation to breathable
                  indoor comfort.
                </p>
              </div>
              <div
                class="lg:col-span-4 bg-[#F5F4EE] border border-neutral-300 p-4 space-y-2 font-mono text-[11px]"
              >
                <div class="text-neutral-500 uppercase font-bold text-[10px]">
                  KEY HIGHLIGHTS:
                </div>
                <ul class="space-y-1 text-neutral-800">
                  <li>• MODULAR DUAL-DEPTH 3D CARGO POCKETS</li>
                  <li>• KINETIC BUNGEE CINCH AT INNER ANKLE HEM</li>
                  <li>• YKK EXCELLA GUNMETAL MATTE HARDWARE</li>
                  <li>• INTEGRATED REINFORCED WEBBING BELT LOOPS</li>
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
                    TEXTILE CODE
                  </div>
                  <div class="font-bold text-black mt-1">KY-RS-280G</div>
                </div>
                <div class="border border-neutral-200 p-3 bg-neutral-50">
                  <div class="text-neutral-400 text-[10px] uppercase">
                    COMPOSITION
                  </div>
                  <div class="font-bold text-black mt-1">
                    68% ORG. COTTON / 32% NYLON
                  </div>
                </div>
                <div class="border border-neutral-200 p-3 bg-neutral-50">
                  <div class="text-neutral-400 text-[10px] uppercase">
                    COATING
                  </div>
                  <div class="font-bold text-black mt-1">
                    ECO DWR WATER-REPELLENT
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
                  <tr>
                    <td class="p-2.5 font-bold">XS (28)</td>
                    <td class="p-2.5">28-29"</td>
                    <td class="p-2.5">30.5"</td>
                    <td class="p-2.5">6.5" - 9.0"</td>
                    <td class="p-2.5">13.2"</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold">S (30)</td>
                    <td class="p-2.5">30-31"</td>
                    <td class="p-2.5">31.0"</td>
                    <td class="p-2.5">6.8" - 9.2"</td>
                    <td class="p-2.5">13.8"</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold">M (32)</td>
                    <td class="p-2.5">32-33"</td>
                    <td class="p-2.5">31.5"</td>
                    <td class="p-2.5">7.0" - 9.5"</td>
                    <td class="p-2.5">14.4"</td>
                  </tr>
                  <tr class="bg-neutral-100/70">
                    <td class="p-2.5 font-bold text-[#C84518]">L (34) *</td>
                    <td class="p-2.5 font-bold">34-35"</td>
                    <td class="p-2.5 font-bold">32.0"</td>
                    <td class="p-2.5 font-bold">7.2" - 9.8"</td>
                    <td class="p-2.5 font-bold">15.0"</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold">XL (36)</td>
                    <td class="p-2.5">36-37"</td>
                    <td class="p-2.5">32.5"</td>
                    <td class="p-2.5">7.5" - 10.0"</td>
                    <td class="p-2.5">15.6"</td>
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
              <p>
                • Machine wash cold at 30°C on delicate cycle. Line dry in shade
                to preserve fluorocarbon-free coating.
              </p>
              <p>
                • Zero deadstock: Manufactured in closed-loop micro-batches in
                Okayama, Japan with certified recycled nylon cords.
              </p>
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
          <article
            v-for="look in lookRecommendations"
            :key="look.id"
            class="bg-white border border-neutral-300/80 p-3 space-y-3 group hover:border-black transition-all shadow-sm flex flex-col justify-between"
          >
            <!-- Image & Quick Add -->
            <div
              class="aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-neutral-200"
            >
              <span
                v-if="look.badge"
                class="absolute top-2 left-2 z-10 text-[9px] font-mono font-bold uppercase px-2 py-0.5 tracking-wider bg-black text-white"
              >
                {{ look.badge }}
              </span>
              <img
                :src="look.image"
                :alt="look.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button
                @click="alert(`Added ${look.name} to quick bag`)"
                class="absolute bottom-2 inset-x-2 bg-white/95 hover:bg-black hover:text-white text-black text-[10px] font-mono uppercase font-bold py-2 border border-neutral-300 transition-colors shadow-sm text-center"
              >
                + QUICK ADD
              </button>
            </div>
            <!-- Meta & Info -->
            <div class="space-y-1 pt-1">
              <div class="text-[9px] font-mono text-neutral-400 uppercase">
                {{ look.category }}
              </div>
              <h3
                class="text-xs font-bold uppercase text-black group-hover:text-[#E05322] transition-colors line-clamp-1"
              >
                {{ look.name }}
              </h3>
              <div
                class="flex justify-between items-baseline pt-1 border-t border-neutral-100"
              >
                <span class="text-sm font-black font-mono text-black"
                  >${{ look.price.toFixed(2) }}</span
                >
                <span class="text-[9px] font-mono text-neutral-400 uppercase">{{
                  look.tag
                }}</span>
              </div>
            </div>
          </article>
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
              @click="alert('Review modal protocol opened.')"
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
</template>
<script setup>
import { ref } from "vue";

// ================= Reactive State =================
const quantity = ref(1);
const selectedSize = ref("L");
const isWishlisted = ref(false);
const isSizeGuideOpen = ref(false);
const activeImageIndex = ref(0);
const openAccordions = ref([1]);

// First accordion open by default
// Color Options
const colorVariants = [
  { name: "JAPANESE INK BLACK", hex: "#111111" },
  { name: "BONE / RAW CHALK", hex: "#f0ede6" },
  { name: "MILITARY DESERT OLIVE", hex: "#484d3e" },
];
const selectedColor = ref(colorVariants[0]);
const sizeOptions = [
  { label: "XS", waist: "28" },
  { label: "S", waist: "30" },
  { label: "M", waist: "32" },
  { label: "L", waist: "34" },
  { label: "XL", waist: "36" },
  { label: "XXL", waist: "38" },
];
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
    alt: "Tactical Parachute Cargo Front Model Stacking",
    label: "01 / FRONT",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    alt: "Tactical Parachute Cargo Rear Articulation & Cinch",
    label: "02 / REAR",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    alt: "Japanese Ripstop Dense 280GSM Grid Weave Macro",
    label: "03 / WEAVE",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    alt: "Modular 3D Accordion Cargo Pocket & Gunmetal Hardware",
    label: "04 / HARDWARE",
  },
];

// Curated "Complete the Look" recommendations
const lookRecommendations = [
  {
    id: 1,
    name: "HERITAGE HEAVYWEIGHT HOODIE",
    category: "KNITWEAR // 500GSM",
    price: 145.0,
    tag: "3 COLORS",
    badge: "ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "MODULAR UTILITY VEST",
    category: "OUTERWEAR // CORDURA",
    price: 160.0,
    tag: "2 COLORS",
    badge: "DROP 04",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "STRUCTURED BALACLAVA KNIT",
    category: "HEADWEAR // MERINO",
    price: 95.0,
    tag: "SINGLE RUN",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "ASYMMETRIC ZIP BOMBER",
    category: "OUTERWEAR // PRIMALOFT",
    price: 290.0,
    tag: "JAPANESE TWILL",
    badge: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80",
  },
];

// Customer verified reviews
const reviewsList = [
  {
    id: 1,
    author: "JULIAN K.",
    verifiedPurchaserBadge: "VERIFIED BUYER // SIZE L",
    date: "2 WEEKS AGO",
    headline: "UNRIVALED FABRIC DENSITY",
    comment:
      "The Japanese ripstop is much sturdier than conventional fashion cargo pants. It has weight and holds its 3D architectural silhouette without feeling stiff. The bungee cinch cords make transitioning shoes seamless.",
  },
  {
    id: 2,
    author: "TRENT M.",
    verifiedPurchaserBadge: "VERIFIED BUYER // SIZE M",
    date: "1 MONTH AGO",
    headline: "PERFECTION IN THE CUT",
    comment:
      "Worth every single dollar. I'm 6'0 and usually wear a 32, bought Medium. Sits cleanly on the waist, stacks gorgeously over high-top boots, and survived torrential rain in London completely dry.",
  },
  {
    id: 3,
    author: "ELENA V.",
    verifiedPurchaserBadge: "VERIFIED BUYER // SIZE S",
    date: "LAST MONTH",
    headline: "BETTER THAN RUNWAY PIECES",
    comment:
      "The pocket engineering with internal dividers means your phone doesn't swing around when walking. Incredible hardware execution. KYURIC is easily dominating technical streetwear right now.",
  },
];

// Accordion Toggle Logic
const toggleAccordion = (index) => {
  if (openAccordions.value.includes(index)) {
    openAccordions.value = openAccordions.value.filter((i) => i !== index);
  } else {
    openAccordions.value.push(index);
  }
};

// Commerce Handlers
const handleAddToBag = () => {
  alert(
    `Added ${quantity.value}x Tactical Parachute Cargo (Size ${selectedSize.value}, Color: ${selectedColor.value.name}) to your bag. Total: $${(185 * quantity.value).toFixed(2)}`,
  );
};
</script>
