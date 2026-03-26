<script setup lang="ts">
const props = withDefaults(defineProps<{
  tag?: string
}>(), {
  tag: 'div'
})
</script>

<template>
  <component :is="tag">
    <slot />
  </component>
</template>
