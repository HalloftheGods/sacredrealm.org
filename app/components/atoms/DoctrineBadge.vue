<script setup lang="ts">
/**
 * DoctrineBadge Atom
 * A status or category indicator using Nuxt UI's UBadge.
 */
defineProps<{
  label: string
  icon?: string
  color?: string
}>()
</script>

<template>
  <UBadge
    variant="subtle"
    class="bg-grimoire-deep/80 text-amber-200 ring-1 ring-grimoire-gold/40 font-mono tracking-[0.25em] text-[10px] uppercase italic rounded-sm border border-grimoire-gold/20 px-3 py-1 ml-1 align-middle shadow-[0_0_8px_rgba(197,160,89,0.2)] hover:shadow-[0_0_12px_rgba(197,160,89,0.4)] transition-shadow duration-300"
  >
    <template v-if="icon" #leading>
      <UIcon :name="icon" class="w-3.5 h-3.5 mr-1.5 text-grimoire-gold drop-shadow-[0_0_3px_rgba(197,160,89,0.8)]" />
    </template>
    {{ label }}
  </UBadge>
</template>
