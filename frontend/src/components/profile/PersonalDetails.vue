<script setup lang="ts">
import { reactive } from 'vue'
import type { ProfileForm, UserModel } from '@/lib/models/User'

const props = defineProps<{ profile: UserModel; saving?: boolean }>()
const emit = defineEmits<{
  (e: 'save', value: ProfileForm): void
  (e: 'change-photo'): void
  (e: 'remove-photo'): void
}>()

const toForm = (p: UserModel): ProfileForm => ({
  fullName: p.fullName,
  username: p.username,
  email: p.email,
  phoneNumber: p.phoneNumber,
  preferredHub: p.preferredHub,
  currency: p.currency,
})

const draft = reactive<ProfileForm>(toForm(props.profile))
const discard = () => Object.assign(draft, toForm(props.profile))
const submit = () => emit('save', { ...draft })

const inputCls =
  'w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all'
</script>

<template>
  <section class="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-6">
    <div class="flex justify-between items-center border-b border-neutral-100 pb-4">
      <div>
        <span class="text-[10px] font-semibold text-[#C84518] uppercase tracking-wider block">
          IDENTITY &amp; AUTHENTICATION
        </span>
        <h3 class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">Personal Details</h3>
      </div>
      <span class="text-[11px] text-neutral-400 font-mono">Last updated: 14 days ago</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Avatar Card -->
      <div class="md:col-span-4 flex flex-col items-center text-center space-y-3 p-4 bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl">
        <div class="w-32 h-36 rounded-xl overflow-hidden relative shadow-sm bg-neutral-200">
          <img v-if="profile.avatarUrl" 
            :src="profile.avatarUrl" 
            :alt="`${profile.fullName} avatar`" 
            class="w-full h-full object-cover grayscale contrast-110" />
          <span class="absolute top-2 left-2 bg-black/70 text-white text-[8px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
            TIER 02
          </span>
          <span v-if="profile.isVerified" class="absolute bottom-2 inset-x-2 bg-[#E05322] text-white text-[9px] font-bold py-0.5 rounded text-center uppercase tracking-wider">
            VERIFIED
          </span>
        </div>

        <div>
          <h4 class="text-sm font-bold text-neutral-900">{{ profile.fullName }}</h4>
          <p class="text-xs text-neutral-400 font-mono">{{ profile.username }}</p>
        </div>

        <div class="space-y-1.5 w-full pt-1">
          <button
            type="button"
            class="w-full bg-white hover:bg-neutral-50 border border-neutral-200/90 text-neutral-700 py-1.5 rounded-lg text-xs font-medium transition-colors shadow-2xs"
            @click="emit('change-photo')"
          >
            Change Photo
          </button>
          <button
            type="button"
            class="w-full text-neutral-400 hover:text-neutral-700 text-[11px] transition-colors"
            @click="emit('remove-photo')"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Input Fields -->
      <form class="md:col-span-8 space-y-4" @submit.prevent="submit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label for="pd-name" class="text-xs font-medium text-neutral-700 block">Full Legal Name</label>
            <input id="pd-name" v-model="draft.fullName" type="text" :class="inputCls" />
            <span class="text-[10px] text-neutral-400 block">Used for customs clearance &amp; invoicing</span>
          </div>
          <div class="space-y-1">
            <label for="pd-user" class="text-xs font-medium text-neutral-700 block">Display Username</label>
            <input id="pd-user" v-model="draft.username" type="text" :class="inputCls" />
            <span class="text-[10px] text-neutral-400 block">Your atelier community identifier</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label for="pd-email" class="text-xs font-medium text-neutral-700 block">Email Address</label>
            <input id="pd-email" v-model="draft.email" type="email" :class="inputCls" />
            <span
                v-if="profile.isVerified"
                class="text-[10px] text-[#C84518] font-medium flex items-center space-x-1"
            >
                <span>✓</span>
                <span>Verified Primary Email</span>
            </span>
            <span v-else class="text-[10px] text-neutral-400 block">Email not verified</span>
          </div>
          <div class="space-y-1">
            <label for="pd-phone" class="text-xs font-medium text-neutral-700 block">Mobile Phone (Drop &amp; Shipment Alerts)</label>
            <input id="pd-phone" v-model="draft.phoneNumber" type="tel" :class="inputCls" />
            <span class="text-[10px] text-neutral-400 block">
                {{ profile.smsConsent ? 'SMS delivery notifications enabled' : 'SMS notifications off' }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label for="pd-hub" class="text-xs font-medium text-neutral-700 block">Preferred Boutique Atelier Hub</label>
            <select id="pd-hub" v-model="draft.preferredHub" :class="[inputCls, 'cursor-pointer']">
              <option value="tokyo">Tokyo Atelier // Minato-ku (Express 4H)</option>
              <option value="nyc">New York // SoHo Archive Hub</option>
              <option value="paris">Paris // Marais Salon</option>
              <option value="indonesia">Indonesia // Atelier Hub</option>
            </select>
          </div>
          <div class="space-y-1">
            <label for="pd-cur" class="text-xs font-medium text-neutral-700 block">Settlement Currency</label>
            <select id="pd-cur" v-model="draft.currency" :class="[inputCls, 'cursor-pointer']">
              <option value="usd">USD ($) — United States Dollar</option>
              <option value="jpy">JPY (¥) — Japanese Yen</option>
              <option value="eur">EUR (€) — Euro</option>
              <option value="idr">IDR (Rp) — Indonesian Rupiah</option>
            </select>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-3 pt-3">
          <button
            type="button"
            class="px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
            @click="discard"
          >
            Discard
          </button>
          <button
            type="submit"
            :disabled="saving"
            class="bg-black hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-xs font-medium transition-all shadow-sm disabled:opacity-50"
          >
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>