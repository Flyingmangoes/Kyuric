<template>
  <main class="w-full bg-[#FAF9F5] text-neutral-900 font-sans selection:bg-[#E05322] selection:text-white pb-16">
    <!-- 01. Breadcrumb & Status Sub-Bar -->
    <div class="border-b border-neutral-200/80 px-4 md:px-12 py-3.5 flex flex-wrap justify-between items-center text-xs text-neutral-500 bg-[#FAF9F5]">
      <div class="flex items-center space-x-2 text-[11px] font-sans tracking-tight">
        <a href="/" class="hover:text-black transition-colors">Home</a>
        <span class="text-neutral-300">/</span>
        <span class="text-neutral-400">Client Services</span>
        <span class="text-neutral-300">/</span>
        <span class="text-neutral-900 font-medium">My Account & Settings</span>
      </div>
      <div class="flex items-center space-x-3 text-[11px] font-mono">
        <span class="flex items-center space-x-1.5 text-[#C84518] font-medium bg-[#C84518]/5 px-2.5 py-0.5 rounded-full border border-[#C84518]/20">
          <span class="w-1.5 h-1.5 rounded-full bg-[#E05322] inline-block animate-pulse"></span>
          <span>VIP Member: Tier 02</span>
        </span>
        <span class="text-neutral-300">|</span>
        <span class="text-neutral-400">ID: #KY-9042</span>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-[1540px] mx-auto px-4 md:px-12 py-8 lg:py-10 space-y-8">
      
      <!-- 02. Page Header & Action Controls -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div class="space-y-2">
          <!-- Member Tags -->
          <div class="flex items-center space-x-2 text-[10px] font-mono">
            <span class="bg-black text-white px-2.5 py-0.5 rounded-full font-medium tracking-wide">
              MEMBER #KY-9042
            </span>
            <span class="bg-[#F0EEE6] text-[#C84518] px-2.5 py-0.5 rounded-full font-bold border border-[#E4DEC9] tracking-wider uppercase">
              VIP COLLECTOR TIER 02
            </span>
            <span v-if="userProfile.isVerified" class="text-neutral-400 text-[11px] font-sans">
              VERIFIED CLIENT
            </span>
          </div>

          <!-- Page Heading & Subtitle -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 font-sans leading-tight">
            Account & Studio Profile
          </h1>
          <p class="text-xs sm:text-sm text-neutral-500 max-w-2xl font-normal leading-relaxed">
            Manage your studio credentials, active commissions, saved sizing calibrations, payment methods, and notification preferences.
          </p>
        </div>

        <!-- Top Right Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 shrink-0">
          <button
            @click="handleDownloadHistory"
            class="bg-white hover:bg-neutral-50 border border-neutral-200/90 text-neutral-700 px-4 py-2.5 rounded-xl text-xs font-medium tracking-normal flex items-center space-x-2 transition-all shadow-sm hover:shadow"
          >
            <svg class="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Order History</span>
          </button>
          <button
            @click="handleContactConcierge"
            class="bg-black hover:bg-neutral-800 text-white px-4 py-2.5 rounded-xl text-xs font-medium tracking-normal flex items-center space-x-2 transition-all shadow-sm hover:shadow"
          >
            <svg class="w-3.5 h-3.5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Contact Concierge</span>
          </button>
        </div>
      </div>

      <!-- 03. Section Navigation Tabs Bar (Rounded Pill Buttons) -->
      <div class="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none border-b border-neutral-200/60">
        <button
          v-for="tab in sectionTabs"
          :key="tab.id"
          @click="activeView = tab.id"
          class="px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center space-x-2 whitespace-nowrap mb-2"
          :class="activeView === tab.id
            ? 'bg-white text-black shadow-sm border border-neutral-200/90 font-semibold'
            : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60'"
        >
          <span class="text-xs opacity-70">{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- 04. Softened High-Level KPI Metric Tiles (4-Col Grid) -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Metric 01: Orders Completed -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-5 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div class="flex justify-between items-center text-xs text-neutral-400">
            <span class="font-medium text-neutral-600">Orders Completed</span>
            <span class="text-sm">▦</span>
          </div>
          <div>
            <div class="text-3xl font-bold font-sans text-neutral-900 tracking-tight">
              {{  completedCount }}
            </div>
            <div class="text-[11px] text-neutral-400 mt-1">
              Lifetime acquisitions
            </div>
          </div>
          <div class="pt-2 border-t border-neutral-100">
            <span class="text-[10px] font-medium text-[#C84518] bg-[#C84518]/10 px-2 py-0.5 rounded-full inline-block">
              +2 orders this season
            </span>
          </div>
        </div>

        <!-- Metric 02: Active Shipment (Highlighted) -->
        <div class="bg-white border border-[#E05322]/30 rounded-2xl p-5 space-y-2 shadow-[0_2px_8px_rgba(224,83,34,0.04)] relative overflow-hidden flex flex-col justify-between">
          <div class="flex justify-between items-center text-xs">
            <span class="font-medium text-[#C84518]">Active Shipment</span>
            <span class="text-sm text-[#C84518]">🚚</span>
          </div>
          <div>
            <div class="text-3xl font-bold font-sans text-[#C84518] tracking-tight">
              {{ String(activeCount).padStart(2, '0') }}
            </div>
            <div class="text-[11px] text-neutral-600 mt-1 font-medium">
              Package in transit
            </div>
          </div>
          <div class="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
            <span>Est: Tomorrow 14:30 JST</span>
            <span class="w-4 h-4 rounded-full bg-[#E05322]/10 flex items-center justify-center text-[9px] text-[#C84518]">›</span>
          </div>
        </div>

        <!-- Metric 03: Store Credit -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-5 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div class="flex justify-between items-center text-xs text-neutral-400">
            <span class="font-medium text-neutral-600">Store Credit</span>
            <span class="text-sm">💳</span>
          </div>
          <div>
            <div class="text-3xl font-bold font-sans text-neutral-900 tracking-tight">
              $340.00
            </div>
            <div class="text-[11px] text-neutral-400 mt-1">
              Available studio credit
            </div>
          </div>
          <div class="pt-2 border-t border-neutral-100">
            <span class="text-[11px] text-neutral-400">
              Auto-applied at checkout
            </span>
          </div>
        </div>

        <!-- Metric 04: Collector Status -->
        <div class="bg-white border border-neutral-200/80 rounded-2xl p-5 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div class="flex justify-between items-center text-xs text-neutral-400">
            <span class="font-medium text-neutral-600">Collector Status</span>
            <span class="text-sm">💎</span>
          </div>
          <div>
            <div class="text-3xl font-bold font-sans text-neutral-900 tracking-tight">
              Tier 02
            </div>
            <div class="text-[11px] text-neutral-400 mt-1">
              VIP early access active
            </div>
          </div>
          <div class="pt-2 border-t border-neutral-100">
            <span class="text-[11px] text-neutral-500 font-medium">
              72h priority runway drops
            </span>
          </div>
        </div>
      </section>

      <!-- 05. Main Workspace (Sidebar + Dual-Pane Content) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- ================= LEFT: ACCOUNT NAVIGATION & PERKS (4 COLS) ================= -->
        <aside class="lg:col-span-4 space-y-6">
          
          <!-- Navigation Card -->
          <div class="bg-white border border-neutral-200/80 rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-1">
            <div class="px-3 py-2 flex justify-between items-center text-xs font-semibold text-neutral-400 tracking-wider uppercase">
              <span>ACCOUNT NAVIGATION</span>
              <span class="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full font-mono normal-case">Active</span>
            </div>

            <nav class="space-y-1 pt-1">
              <button
                v-for="item in navMenuItems"
                :key="item.id"
                @click="activeView = item.id"
                class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all text-left group"
                :class="activeView === item.id
                  ? 'bg-black text-white font-medium shadow-sm'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-sm opacity-70 group-hover:opacity-100">{{ item.icon }}</span>
                  <span>{{ item.label }}</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <span
                    v-if="item.badge"
                    class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    :class="activeView === item.id
                      ? 'bg-white/20 text-white'
                      : item.badgeColor || 'bg-neutral-100 text-neutral-500'"
                  >
                    {{ item.badge }}
                  </span>
                  <span class="text-neutral-400 text-xs">›</span>
                </div>
              </button>
            </nav>
          </div>

          <!-- Tier 03 Progress Card -->
          <div class="bg-white border border-neutral-200/80 rounded-2xl p-5 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div class="flex justify-between items-center text-xs">
              <span class="font-medium text-neutral-700">Tier 03 Progress</span>
              <span class="font-bold text-[#C84518] font-mono">84%</span>
            </div>
            
            <div class="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
              <div class="bg-[#E05322] h-full w-[84%] rounded-full transition-all duration-700"></div>
            </div>

            <p class="text-[11px] text-neutral-500 leading-relaxed font-sans">
              Spend <strong class="text-neutral-800">$660.00</strong> more within 120 days to unlock <strong class="text-neutral-800">VIP Runway Tier 03</strong> and complimentary express shipping worldwide.
            </p>
          </div>

          <!-- Studio Concierge Card -->
          <div class="bg-white border border-neutral-200/80 rounded-2xl p-5 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div class="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-800">
              <span class="w-2 h-2 rounded-full bg-[#E05322] inline-block animate-pulse"></span>
              <span>STUDIO CONCIERGE</span>
            </div>
            <p class="text-xs text-neutral-500 leading-relaxed font-sans">
              Need assistance with bespoke alterations, size calibrations, or delivery changes? Stylists are available 24/7.
            </p>
            <div class="text-xs text-neutral-600 space-y-1 font-mono pt-1">
              <div class="flex justify-between">
                <span class="text-neutral-400 font-sans">Tokyo Atelier:</span>
                <span class="font-bold text-neutral-800">+81 3 5482 9910</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-400 font-sans">Direct Desk:</span>
                <span class="font-bold text-neutral-800">concierge@kyuric.com</span>
              </div>
            </div>
            <button
              @click="handleStartLiveChat"
              class="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/90 text-neutral-800 py-2.5 rounded-xl text-xs font-medium flex items-center justify-center space-x-2 transition-all mt-2"
            >
              <svg class="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Start Live Consultation</span>
            </button>
          </div>

          <!-- Kyuric Archival Guarantee -->
          <div class="p-4 border border-dashed border-neutral-300/80 rounded-2xl text-[11px] text-neutral-500 space-y-1 bg-transparent">
            <div class="text-neutral-800 font-semibold uppercase text-[10px] tracking-wider">
              KYURIC ARCHIVAL GUARANTEE
            </div>
            <p class="leading-relaxed">
              Every piece includes lifetime complimentary tailoring care and sustainable zero-waste lifecycle recycling.
            </p>
          </div>
        </aside>

        <!-- ================= RIGHT: WORKSPACE CONTENT PANES (8 COLS) ================= -->
        <div class="lg:col-span-8 space-y-8">
          <!-- 05A. ACTIVE SHIPMENT (REFINED STEPPER CARD) -->
          <ExpressDelivery
            v-if="show?.shipment && shipment"
            :shipment="shipment"
            @invoice="handleDownloadInvoice"
            @track="handleLiveTracking"
          />

          <PersonalDetails
            v-if="show?.details"
            :profile="userProfile"
            :saving="isSaving"
            @save="handleSaveProfile"
            @change-photo="handleChangePhoto"
            @remove-photo="handleRemovePhoto"
          />

          <RecentOrders
            v-if="show?.orders"
            :orders="recentRows"
            :total-count="orders.length"
            :currency="userProfile.currency"
            @invoice="handleInvoice"
            @action="handleOrderSecondary"
          />

          <section
            v-if="!show"
            class="bg-white border border-dashed border-neutral-300 rounded-2xl p-10 text-center text-xs text-neutral-500"
          >
            This section is coming soon.
          </section>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import ExpressDelivery from '@/components/profile/ExpressDelivery.vue'
import PersonalDetails from '@/components/profile/PersonalDetails.vue'
import RecentOrders from '@/components/profile/RecentOrders.vue'
import { useProducts } from '@/app/products_service/useProduct'
import { toOrderRow, toShipment, toStage } from '@/components/profile/OrderView'
import type { OrderModel } from '@/lib/models/Order'
import type { ProfileForm, UserModel } from '@/lib/models/User'
import type { OrderRow } from '@/lib/models/Order'

const { getById } = useProducts()

const activeView = ref('overview')

const sectionTabs = [
  { id: 'overview', label: 'Overview', icon: '⊞' },
  { id: 'orders', label: 'Orders & Tracking', icon: '🚚' },
  { id: 'sizing', label: 'Size & Fit', icon: '📏' },
  { id: 'payment', label: 'Payment & Wallet', icon: '💳' },
  { id: 'preferences', label: 'Preferences', icon: '⚙' },
]

interface ViewModules { shipment?: boolean; details?: boolean; orders?: boolean }
const views: Record<string, ViewModules> = {
  overview: { shipment: true, details: true, orders: true },
  orders: { shipment: true, orders: true },
}
const show = computed(() => views[activeView.value] ?? null)

// Data (mock, shaped like the API models)
const isSaving = ref(false)

const userProfile = reactive<UserModel>({
  userId: 'u-9042',
  fullName: 'Kenjiro Takahashi',
  username: '@kenji_kyuric',
  email: 'k.takahashi@archival-studio.jp',
  phoneNumber: '+81 90-8842-1920',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  locale: 'en-US',
  country: 'JP',
  address: 'Aoyama 5-Chome, Minato-ku, Tokyo 107-0062',
  userType: 'customer',
  isVerified: true,
  emailConsent: true,
  smsConsent: true,
  consentUpdated: '2026-05-01T00:00:00Z',
  consentSrc: 'register',
  preferredHub: 'tokyo',
  currency: 'usd',
  createdAt: '2025-09-01T00:00:00Z',
  updatedAt: '2026-04-28T00:00:00Z',
})

const orders = ref<OrderModel[]>([
  {
    orderID: 'KY-000142',
    buyerID: userProfile.userId,
    buyerEmail: userProfile.email,
    totalPrice: 330,
    buyerAddress: userProfile.address,
    orderStatus: 'shipped',
    createdAt: '2026-05-22T09:14:00+09:00',
    orderItems: [
      { orderItemID: 'oi-1', orderID: 'KY-000142', productID: '2', quantity: 1, price: 185 },
      { orderItemID: 'oi-2', orderID: 'KY-000142', productID: '1', quantity: 1, price: 145 },
    ],
  },
  {
    orderID: 'KY-000131',
    buyerID: userProfile.userId,
    buyerEmail: userProfile.email,
    totalPrice: 255,
    buyerAddress: userProfile.address,
    orderStatus: 'delivered',
    createdAt: '2026-04-12T11:02:00+09:00',
    orderItems: [
      { orderItemID: 'oi-3', orderID: 'KY-000131', productID: '5', quantity: 1, price: 160 },
      { orderItemID: 'oi-4', orderID: 'KY-000131', productID: '8', quantity: 1, price: 95 },
    ],
  },
  {
    orderID: 'KY-000117',
    buyerID: userProfile.userId,
    buyerEmail: userProfile.email,
    totalPrice: 155,
    buyerAddress: userProfile.address,
    orderStatus: 'delivered',
    createdAt: '2026-03-04T15:30:00+09:00',
    orderItems: [
      { orderItemID: 'oi-5', orderID: 'KY-000117', productID: '7', quantity: 1, price: 155 },
    ],
  },
])

// Derived
const sortedOrders = computed(() =>
  [...orders.value].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
)
const recentRows = computed(() => sortedOrders.value.slice(0, 3).map((o) => toOrderRow(o, getById)))
const activeOrders = computed(() => orders.value.filter((o) => toStage(o.orderStatus) === 'in_transit'))
const activeCount = computed(() => activeOrders.value.length)
const completedCount = computed(
  () => orders.value.filter((o) => toStage(o.orderStatus) === 'delivered').length
)
const shipment = computed(() =>
  activeOrders.value[0] ? toShipment(activeOrders.value[0], getById) : null
)

const navMenuItems = computed(() => [
  { id: 'overview', label: 'Overview', icon: '⊞', badge: '' },
  {
    id: 'orders',
    label: 'Orders & Shipments',
    icon: '📦',
    badge: activeCount.value ? `${activeCount.value} Active` : '',
    badgeColor: 'bg-[#C84518]/10 text-[#C84518]',
  },
  { id: 'sizing', label: 'Size & Fit Calibrations', icon: '📏', badge: '' },
  { id: 'payment', label: 'Saved Payment Methods', icon: '💳', badge: '2 Cards' },
  { id: 'wishlist', label: 'Saved Wishlist', icon: '♡', badge: '[06]' },
  { id: 'notifications', label: 'Notification Settings', icon: '🔔', badge: '' },
  { id: 'security', label: 'Password & Security', icon: '🔒', badge: '✓' },
])

// Handlers
const handleSaveProfile = (form: ProfileForm) => {
  isSaving.value = true
  setTimeout(() => {
    Object.assign(userProfile, form)
    isSaving.value = false
    alert(`Personal calibration saved for ${userProfile.fullName}`)
  }, 500)
}

const handleChangePhoto = () => {
  const url = prompt('Enter new avatar photo URL:', userProfile.avatarUrl)
  if (url) userProfile.avatarUrl = url
}

const handleRemovePhoto = () => {
  userProfile.avatarUrl = ''
}

const handleDownloadInvoice = (orderID: string) => alert(`Downloading PDF invoice for order #${orderID}`)
const handleLiveTracking = (orderID: string) => alert(`Opening live tracking for order #${orderID}`)
const handleInvoice = (orderID: string) => alert(`Generating VAT tax invoice for ${orderID}`)
const handleOrderSecondary = (row: OrderRow) =>
  alert(`Action "${row.secondaryAction}" triggered for ${row.title}`)

const handleDownloadHistory = () => alert('Exporting complete transaction archive (PDF)...')
const handleContactConcierge = () => alert('Connecting to Kyuric Studio Concierge desk...')
const handleStartLiveChat = () => alert('Starting encrypted chat with Tokyo Atelier Concierge.')
</script>