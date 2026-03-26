<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <ActionLink :to="to" class="group flex items-center gap-3 py-1 hover:text-amber-300 transition-all duration-300">
    <span class="w-1.5 h-1.5 rounded-full bg-grimoire-gold/20 group-hover:bg-amber-300 group-hover:shadow-[0_0_8px_rgba(252,211,77,0.8)] transition-all duration-300"></span>
    <span class="group-hover:translate-x-1 transition-transform duration-300"><slot /></span>
  </ActionLink>
</template>
