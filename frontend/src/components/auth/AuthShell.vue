<script setup lang="ts">
import { computed } from 'vue'
import { Terminal, Fingerprint, KeyRound } from 'lucide-vue-next'

const props = defineProps<{ mode: 'signin' | 'register' }>()

const copy = computed(() =>
  props.mode === 'signin'
    ? {
        label: 'Member Account Access',
        title: 'Sign In to Your Account',
        desc: 'Sign in to access your orders, saved items, and exclusive drops.',
        alt: 'Or sign in with',
      }
    : {
        label: 'New Profiles',
        title: 'Create Your Account',
        desc: 'Create an authenticated identity to access your orders, saved items, and exclusive drops.',
        alt: 'Or sign up with',
      }
)

const tabBase =
  'flex-1 py-space-sm px-space-xs text-center font-label-technical text-label-technical uppercase transition-all'
const tabOn = 'bg-primary text-on-primary font-bold shadow-sm'
const tabOff = 'text-on-surface-variant hover:text-primary hover:bg-surface-container'

const handleWebAuthn = (type: string) => {
  alert(`Triggered ${type.toUpperCase()} biometric authentication.`)
}
</script>

<template>
  <div class="w-full px-margin-mobile lg:px-margin pb-space-xl">
    <!-- Sub-bar -->
    <div class="w-full py-space-sm flex flex-wrap items-center justify-between text-on-surface-variant font-label-technical text-label-technical tracking-widest uppercase mb-space-md">
      <div class="flex items-center gap-space-sm tracking-wider">
        <RouterLink to="/" class="text-primary hover:text-secondary transition-colors font-bold">HOME</RouterLink>
        <span class="text-outline">/</span>
        <span>SIGN IN &amp; ACCOUNT ACCESS</span>
      </div>
      <div class="flex items-center gap-space-sm text-label-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        <span>SECURE CHECKOUT &amp; ACCOUNT PORTAL</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
      <!-- LEFT -->
      <div class="lg:col-span-7 flex flex-col justify-between bg-surface-container-low p-space-md lg:p-space-lg relative overflow-hidden group">
        <div class="relative z-10 space-y-space-xs">
          <div class="flex items-center justify-between">
            <span class="font-label-technical text-label-technical uppercase tracking-widest text-secondary font-bold">[ EDITION // 04.26 DROP ]</span>
            <span class="font-label-technical text-label-technical uppercase text-on-surface-variant">STATUS: ARCHIVE OPEN</span>
          </div>
          <div class="pt-space-sm">
            <h1 class="font-display-xl text-display-xl-mobile md:text-display-xl text-primary tracking-tighter uppercase font-bold select-none">
              WHERE<br />
              <span class="text-outline-variant hover:text-primary transition-colors">STYLE</span><br />
              LIVES NOW
            </h1>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md pt-space-xs leading-relaxed">
            Exclusive runway manifestations, deadstock utility outerwear, and bespoke volumetric tailoring. Entry reserves your priority 72h early queue footprint.
          </p>
        </div>

        <div class="relative my-space-lg flex flex-col sm:flex-row items-center sm:items-end gap-space-md z-10">
          <div class="relative w-full sm:w-3/5 bg-surface-container shadow-xl overflow-hidden aspect-[3/4]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLXGyw9VXJbvFa5r8DI0Y5r30lG00wZHGk0USB5xzOiHLDtlyZ319rVJ6Qu60Xv7g6XoQ3BHAvunPREe4qx9F_hvCuBwmAxfxwd-8zutZUZYlrQiirbQHVPZ-1nKBsqAI4rcgu5lxb0ucESyZMcRVieoM2Zd0vYM0JRG7QnMBp_VEECj_atMNNe2OjCZaXEV7NtwEuLHh5HVRa8NlTqnpANxhDIDxvqzmsYQUuOso8DCHVT2S7BYxg4g"
              alt="Editorial lookbook portrait, technical oversized parka"
              class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute top-space-sm left-space-sm bg-primary text-on-primary font-label-technical text-label-technical uppercase px-2 py-1 tracking-widest">
              SERIES 04 / LOOK 12
            </div>
            <div class="absolute bottom-space-sm right-space-sm bg-surface-bright/90 backdrop-blur-md px-space-sm py-1 font-label-technical text-label-sm text-primary uppercase">
              SPEC: 420GSM NYLON-TASLAN
            </div>
          </div>

          <div class="w-full sm:w-2/5 flex flex-col gap-space-sm -mt-6 sm:mt-0 sm:-ml-8 z-20">
            <div class="bg-surface-container-lowest p-space-sm shadow-md">
              <div class="aspect-square w-full overflow-hidden mb-space-xs bg-surface-container">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6wCSwDpguZ4KYJxAvZfe3RfSttBehSweBFPFaac9GmNMMd7B2USyLwueB39BDXbN7XokidzLcTUvR-XcpEvpA-Eih4xXFbPZomjo1C0IrrDlOhDW-yxyFvWocCpDOOFnw4zLNz0c-GcMpLJa24LAzwejZePiUKdAJf1pN1gNcn1L62xCJRkmojV6-i9n8TZ7Pa5aFQZFNtugHIYYdhP0YNWmUZB-7n5Uw5edXpWd693g-XwUVhRvUeA" alt="Macro detail of parka zipper pull" class="w-full h-full object-cover" />
              </div>
              <div class="flex justify-between items-center font-label-technical text-label-technical">
                <span class="font-bold text-primary">ZIP-PULL 03</span>
                <span class="text-secondary">$420 // DROP</span>
              </div>
            </div>
            <div class="bg-primary text-on-primary p-space-md shadow-md space-y-space-xs">
              <div class="flex items-center justify-between text-secondary font-label-technical text-label-technical">
                <span>[COMMUNITY REPUTATION]</span>
                <span class="w-2 h-2 rounded-full bg-secondary"></span>
              </div>
              <div class="font-headline-sm text-headline-sm tracking-tight text-on-primary font-bold">280,000+</div>
              <p class="font-label-technical text-label-technical text-on-primary/70 uppercase">
                ACTIVE COLLECTORS GLOBALLY VERIFIED IN THE ARCHIVE
              </p>
            </div>
          </div>
        </div>

        <div class="pt-space-md flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-label-technical text-label-technical uppercase z-10">
          <span class="text-primary font-bold">"EVERY SEAM MUST RESIST THE WEAR OF CITIES."</span>
          <span class="text-secondary font-bold">Official Kyuric Account</span>
        </div>

        <div class="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-5 text-primary">
          <svg class="w-full h-full stroke-current" fill="none" stroke-width="1.5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" stroke-dasharray="4 4" />
            <circle cx="100" cy="100" r="60" />
            <line x1="100" x2="100" y1="0" y2="200" />
            <line x1="0" x2="200" y1="100" y2="100" />
          </svg>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="lg:col-span-5 flex flex-col justify-between bg-surface-container-lowest p-space-md lg:p-space-lg shadow-sm">
        <div>
          <div class="flex items-center gap-space-xs mb-space-lg bg-surface-container-low p-1">
            <RouterLink to="/signin" :class="[tabBase, mode === 'signin' ? tabOn : tabOff]">Sign In</RouterLink>
            <RouterLink to="/register" :class="[tabBase, mode === 'register' ? tabOn : tabOff]">Create Account</RouterLink>
          </div>

          <div class="mb-space-md">
            <div class="flex items-center gap-space-xs text-secondary font-label-technical text-label-technical uppercase tracking-wider mb-space-xs">
              <Terminal class="w-3.5 h-3.5" />
              <span>{{ copy.label }}</span>
            </div>
            <h2 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight">{{ copy.title }}</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant pt-1">{{ copy.desc }}</p>
          </div>

          <slot />

          <div class="pt-space-lg">
            <div class="relative flex items-center justify-center mb-space-md">
              <div class="w-full h-px bg-surface-container-highest"></div>
              <span class="absolute px-space-sm bg-surface-container-lowest font-label-technical text-label-sm text-outline uppercase tracking-wider">{{ copy.alt }}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              <button type="button" @click="handleWebAuthn('passkey')"
                class="flex items-center justify-center gap-space-xs py-space-sm px-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-label-technical text-label-technical uppercase transition-all">
                <Fingerprint class="w-4 h-4 text-secondary" />
                <span>Passkey / Face ID</span>
              </button>
              <button type="button" @click="handleWebAuthn('security-key')"
                class="flex items-center justify-center gap-space-xs py-space-sm px-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-label-technical text-label-technical uppercase transition-all">
                <KeyRound class="w-4 h-4" />
                <span>Security Key</span>
              </button>
            </div>
          </div>
        </div>

        <div class="pt-space-lg mt-space-lg bg-surface-container-low p-space-sm">
          <div class="flex items-center gap-space-xs text-secondary font-label-technical text-label-technical uppercase font-bold mb-1">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Member Benefits</span>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Enjoy early access to limited seasonal collections, complimentary carbon-neutral worldwide shipping, and saved sizing preferences.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>