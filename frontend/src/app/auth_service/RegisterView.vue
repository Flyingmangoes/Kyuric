<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Eye, EyeOff, ArrowRight } from 'lucide-vue-next'
import AuthShell from '@/components/auth/AuthShell.vue'
import { inputCls, labelCls, submitCls } from '@/components/auth/authStyles'

const router = useRouter()
const showPassword = ref(false)
const isLoading = ref(false)

const fits = ['BOXY / OVERSIZED', 'ARCHITECTURAL', 'SLIM TAILORED']

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  fit: fits[0],
  smsOptIn: true,
  agreeTerms: false,
})

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    alert(`Account created for ${formData.firstName} ${formData.lastName} (${formData.email}), fit: ${formData.fit}`)
    router.push('/signin')
  }, 700)
}
</script>

<template>
  <AuthShell mode="register">
    <form class="space-y-space-md" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <div class="space-y-1">
          <label for="reg-first" :class="labelCls">First Name</label>
          <input id="reg-first" v-model="formData.firstName" type="text" required placeholder="KENZO" :class="inputCls" />
        </div>
        <div class="space-y-1">
          <label for="reg-last" :class="labelCls">Last Name</label>
          <input id="reg-last" v-model="formData.lastName" type="text" required placeholder="TAKAHASHI" :class="inputCls" />
        </div>
      </div>

      <div class="space-y-1">
        <label for="reg-email" :class="labelCls"> Email</label>
        <input id="reg-email" v-model="formData.email" type="email" required placeholder="CLIENT.DOSSIER@DOMAIN.ARCHIVE" :class="inputCls" />
      </div>

      <div class="space-y-1">
        <label for="reg-pass" :class="labelCls">Password</label>
        <div class="relative flex items-center">
          <input id="reg-pass" v-model="formData.password" :type="showPassword ? 'text' : 'password'" required minlength="12" placeholder="MINIMUM 12 CHARACTERS" :class="[inputCls, 'pr-12']" />
          <button type="button" aria-label="Toggle password visibility" class="absolute right-space-sm text-on-surface-variant hover:text-primary transition-colors p-1" @click="showPassword = !showPassword">
            <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex justify-between items-center font-label-technical text-label-technical uppercase">
          <span class="text-primary font-bold">Preferred Style &amp; Preset</span>
          <span class="text-secondary text-label-sm">// CALIBRATION</span>
        </div>
        <div class="grid grid-cols-3 gap-space-xs">
          <button
            v-for="fit in fits" :key="fit" type="button"
            class="py-space-xs px-1 text-center font-label-technical text-label-technical uppercase transition-all"
            :class="formData.fit === fit ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container-low text-on-surface-variant hover:text-primary'"
            @click="formData.fit = fit"
          >
            {{ fit }}
          </button>
        </div>
      </div>

      <label class="flex items-start gap-space-xs cursor-pointer select-none pt-1">
        <input v-model="formData.smsOptIn" type="checkbox" class="w-4 h-4 mt-0.5 accent-primary rounded-none cursor-pointer" />
        <span class="font-label-technical text-label-technical uppercase text-on-surface-variant leading-snug">
          Allow SMS notifications 15 minutes prior new drops
        </span>
      </label>

      <label class="flex items-start gap-space-xs cursor-pointer select-none">
        <input v-model="formData.agreeTerms" type="checkbox" required class="w-4 h-4 mt-0.5 accent-primary rounded-none cursor-pointer" />
        <span class="font-label-technical text-label-technical uppercase text-on-surface-variant leading-snug">
          Agree to terms &amp; privacy 
        </span>
      </label>

      <button type="submit" :disabled="isLoading" :class="submitCls">
        <span>{{ isLoading ? 'Verifying...' : 'Create Client Profile & Record' }}</span>
        <ArrowRight class="w-4 h-4" />
      </button>
    </form>
  </AuthShell>
</template>