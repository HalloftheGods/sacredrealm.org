<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to?: string
  href?: string
}>()

const linkDestination = computed(() => props.to || props.href)
</script>

<template>
  <NuxtLink :to="linkDestination">
    <slot />
  </NuxtLink>
</template>
