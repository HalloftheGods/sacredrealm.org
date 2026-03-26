<script setup lang="ts">
const props = withDefaults(defineProps<{
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  level: 'h1'
})
</script>

<template>
  <component :is="level">
    <slot />
  </component>
</template>
