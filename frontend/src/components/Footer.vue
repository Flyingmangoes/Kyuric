<template>
  <footer
    class="w-full font-sans antialiased bg-[#0D0D0D] text-[#ECEBE6] border-t border-neutral-900 selection:bg-[#E05322] selection:text-white"
  >
    <!-- Top Newsletter / Early Access Banner -->
    <div
      class="max-w-[1720px] mx-auto px-6 md:px-12 py-16 border-b border-neutral-800"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-2">
          <span
            class="text-[11px] font-mono tracking-widest text-[#E05322] uppercase"
          >
            // KYURIC PRIVATE ACCESS
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-heading"
          >
            JOIN THE ZERO-DEADSTOCK ATELIER
          </h2>
          <p
            class="text-neutral-400 text-xs sm:text-sm max-w-xl font-mono leading-relaxed"
          >
            Get direct access to archival drop alerts 24 hours prior to public
            release, private studio showroom invites in Tokyo and NYC, and
            complimentary carbon-neutral shipping worldwide.
          </p>
        </div>
        <div class="lg:col-span-5">
          <form @submit.prevent="handleNewsletterSubmit" class="space-y-2">
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                v-model="newsletterEmail"
                type="email"
                required
                placeholder="ENTER CLIENT EMAIL COORDINATE..."
                class="w-full bg-[#181818] border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3.5 text-xs font-mono focus:outline-none focus:border-[#E05322] transition-colors"
              />
              <button
                type="submit"
                class="bg-[#E05322] hover:bg-[#c94519] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center space-x-1"
              >
                <span>REQUEST ENTRY</span>
                <span class="font-mono text-sm leading-none">→</span>
              </button>
            </div>
            <p class="text-[10px] font-mono text-neutral-500 tracking-wide">
              * STRICTLY ENCRYPTED. ZERO SPAM. DROP NOTIFICATIONS ONLY.
            </p>
          </form>
        </div>
      </div>
    </div>
    <!-- Main Navigation Sitemap & Metadata Matrix -->
    <div class="max-w-[1720px] mx-auto px-6 md:px-12 py-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
      >
        <!-- Col 1: Brand & Manifesto Statement -->
        <div class="lg:col-span-4 space-y-4">
          <div class="flex items-center space-x-3">
            <span
              class="text-2xl font-black tracking-tight text-white font-heading"
            >
              KYURIC
            </span>
          </div>
          <p
            class="text-neutral-400 text-xs leading-relaxed max-w-sm font-sans"
          >
            Brutalist spatial logic applied to modern utility apparel and
            technical avant-garde garments. Manufactured with regenerative
            fabrics and surgical structural precision.
          </p>
          <div class="pt-2 font-mono text-[10px] text-neutral-500 space-y-1">
            <div class="text-[#E05322]">// ARCHIVAL SPECIFICATION</div>
            <div>
              ALL RUNS STRICTLY LIMITED TO 300 INDIVIDUALLY NUMBERED UNITS.
            </div>
          </div>
        </div>
        <!-- Col 2: Catalog Index -->
        <div class="lg:col-span-2 space-y-3">
          <h4
            class="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-300"
          >
            CATALOG / INDEX
          </h4>
          <ul class="space-y-2 text-xs font-medium text-neutral-400">
            <li>
              <a href="/catalog" class="hover:text-white transition-colors"
                >SHOP ALL [381]</a
              >
            </li>
            <li>
              <a
                href="/catalog?filter=new"
                class="hover:text-white transition-colors"
                >NEW ARRIVALS</a
              >
            </li>
            <li>
              <a
                href="/catalog?category=outerwear"
                class="hover:text-white transition-colors"
                >OUTERWEAR</a
              >
            </li>
            <li>
              <a
                href="/catalog?category=knitwear"
                class="hover:text-white transition-colors"
                >KNITWEAR</a
              >
            </li>
            <li>
              <a
                href="/catalog?category=accessories"
                class="hover:text-white transition-colors"
                >ACCESSORIES</a
              >
            </li>
            <li>
              <a href="/drops" class="hover:text-white transition-colors"
                >ARCHIVAL DROPS</a
              >
            </li>
          </ul>
        </div>
        <!-- Col 3: Manifesto & Production -->
        <div class="lg:col-span-3 space-y-3">
          <h4
            class="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-300"
          >
            MANIFESTO & SYSTEM
          </h4>
          <p class="text-xs text-neutral-400 leading-relaxed font-sans">
            KYURIC operates as an independent design studio questioning seasonal
            obsolescence. We construct garments that synthesize architectural
            utilitarian ergonomics with Japanese textile innovations.
          </p>
          <div class="pt-2">
            <span class="text-[10px] font-mono text-neutral-500 block uppercase"
              >ATELIER COORDINATES</span
            >
            <span class="text-[11px] font-mono text-neutral-300 font-bold"
              >35.6580° N, 139.7016° E</span
            >
          </div>
        </div>
        <!-- Col 4: Client Services & Locale Selector -->
        <div class="lg:col-span-3 space-y-3">
          <h4
            class="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-300"
          >
            CLIENT SERVICES
          </h4>
          <ul class="space-y-2 text-xs font-medium text-neutral-400">
            <li>
              <a href="/account" class="hover:text-white transition-colors"
                >CUSTOMER PROFILE</a
              >
            </li>
            <li>
              <a
                href="/account/saved"
                class="hover:text-white transition-colors"
                >SAVED ARTICLES</a
              >
            </li>
            <li>
              <a href="/shipping" class="hover:text-white transition-colors"
                >GLOBAL SHIPPING & RETURNS</a
              >
            </li>
            <li>
              <a href="/terms" class="hover:text-white transition-colors"
                >TERMS OF SERVICE</a
              >
            </li>
            <li>
              <a
                href="/admin"
                class="hover:text-neutral-500 transition-colors text-[11px] font-mono"
                >EMPLOYEE ADMIN</a
              >
            </li>
          </ul>
          <!-- Locale / Currency Selector -->
          <div class="pt-3">
            <label
              class="text-[10px] font-mono text-neutral-500 block uppercase mb-1"
            >
              CURRENCY // LOCALE
            </label>
            <select
              v-model="selectedCurrency"
              class="bg-[#181818] border border-neutral-700 text-white text-xs font-mono px-3 py-2 w-full focus:outline-none focus:border-[#E05322]"
            >
              <option value="USD">USD ($) — UNITED STATES</option>
              <option value="JPY">JPY (¥) — JAPAN</option>
              <option value="EUR">EUR (€) — EUROPEAN UNION</option>
              <option value="GBP">GBP (£) — UNITED KINGDOM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Legal Bar -->
    <div class="border-t border-neutral-800 bg-black/60">
      <div
        class="max-w-[1720px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-neutral-500 space-y-4 md:space-y-0"
      >
        <div>
          © 2026 KYURIC CORP. ALL RIGHTS RESERVED. ARCHIVAL FOOTPRINT //
          ZERO-DEADSTOCK SYSTEM.
        </div>
        <div class="flex items-center space-x-6">
          <a href="/privacy" class="hover:text-neutral-300 transition-colors"
            >PRIVACY MATRIX</a
          >
          <a
            href="/accessibility"
            class="hover:text-neutral-300 transition-colors"
            >ACCESSIBILITY</a
          >
          <a href="/security" class="hover:text-neutral-300 transition-colors"
            >SECURITY PROTOCOL</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue'

const newsletterEmail = ref('')
const selectedCurrency = ref('USD')
const handleNewsletterSubmit = () => {
  if (!newsletterEmail.value)
    return alert(`Client access request initialized for: ${newsletterEmail.value}`)

  newsletterEmail.value = ''
}
</script>
