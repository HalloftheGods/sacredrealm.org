<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <button class="group flex items-center justify-between py-1 hover:text-amber-300 transition-all duration-300 w-full text-left outline-none cursor-pointer">
    <div class="flex items-center gap-3">
      <span class="w-1.5 h-1.5 rounded-full bg-grimoire-gold/40 group-hover:bg-amber-300 group-hover:shadow-[0_0_8px_rgba(252,211,77,0.8)] transition-all duration-300"></span>
      <span class="group-hover:translate-x-1 transition-transform duration-300 text-amber-200">
        <slot />
      </span>
    </div>
    <UIcon name="i-lucide-chevron-down" :class="['w-3 h-3 text-grimoire-gold/40 group-hover:text-amber-300 transition-transform duration-300', isOpen ? 'rotate-180' : '']" />
  </button>
</template>
