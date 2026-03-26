<script setup lang="ts">
/**
 * RunicDivider Atom
 * A stylized separator using Nuxt UI's USeparator with Grimoire aesthetics.
 */
defineProps<{
  icon?: string
  label?: string
}>()
</script>

<template>
  <USeparator
    :icon="icon || 'i-lucide-sparkles'"
    :label="label"
    class="my-16"
    :ui="{
      border: 'border-white/10 dark:border-grimoire-gold/20 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-grimoire-gold/30 before:to-transparent',
      icon: 'text-amber-200 w-5 h-5 drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]',
      label: 'text-grimoire-gold font-mono text-xs uppercase tracking-[0.4em] italic whitespace-nowrap bg-grimoire-deep/80 px-4 drop-shadow-md'
    }"
  />
</template>
