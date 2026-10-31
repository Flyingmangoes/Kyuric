<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <h1 class="text-3xl font-extrabold text-black mb-2">{{ title }}</h1>
    <p class="text-neutral-500">This page is coming soon.</p>
  </div>
</template>
