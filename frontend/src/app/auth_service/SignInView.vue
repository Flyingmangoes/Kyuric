<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Eye, EyeOff, ArrowRight } from 'lucide-vue-next'
import AuthShell from '@/components/auth/AuthShell.vue'
import { inputCls, labelCls, submitCls } from '@/components/auth/authStyles'

const showPassword = ref(false)
const isLoading = ref(false)
const formData = reactive({ email: '', password: '', rememberMe: true })

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    alert(`Successfully signed in client: ${formData.email}`)
  }, 700)
}

const handleForgotPassword = () => {
  const email = prompt('Enter your registered account email:', formData.email || '')
  if (email) alert(`Reset instructions sent to: ${email}`)
}
</script>

<template>
  <AuthShell mode="signin">
    <form class="space-y-space-md" @submit.prevent="handleSubmit">
      <div class="space-y-1">
        <div class="flex justify-between items-center font-label-technical text-label-technical uppercase">
          <label for="signin-email" :class="labelCls">Email Address</label>
          <span class="text-on-surface-variant text-label-sm">[REQUIRED]</span>
        </div>
        <input id="signin-email" v-model="formData.email" type="email" required placeholder="your.email@example.com" :class="inputCls" />
      </div>

      <div class="space-y-1">
        <div class="flex justify-between items-center font-label-technical text-label-technical uppercase">
          <label for="signin-pass" :class="labelCls">Password</label>
          <a href="#forgot" class="text-secondary hover:underline" @click.prevent="handleForgotPassword">Forgot Password?</a>
        </div>
        <div class="relative flex items-center">
          <input id="signin-pass" v-model="formData.password" :type="showPassword ? 'text' : 'password'" required placeholder="••••••••••••••••" :class="[inputCls, 'pr-12']" />
          <button type="button" aria-label="Toggle password visibility" class="absolute right-space-sm text-on-surface-variant hover:text-primary transition-colors p-1" @click="showPassword = !showPassword">
            <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
          </button>
        </div>
      </div>

      <label class="flex items-center gap-space-xs cursor-pointer select-none pt-1">
        <input v-model="formData.rememberMe" type="checkbox" class="w-4 h-4 accent-primary rounded-none cursor-pointer" />
        <span class="font-label-technical text-label-technical uppercase text-on-surface">Remember me for 30 days</span>
      </label>

      <button type="submit" :disabled="isLoading" :class="submitCls">
        <span>{{ isLoading ? 'Verifying...' : 'Sign In' }}</span>
        <ArrowRight class="w-4 h-4" />
      </button>
    </form>
  </AuthShell>
</template>