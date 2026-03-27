<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  to: string
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <ActionLink 
    :to="to" 
    :class="[
      'group flex items-center gap-3 py-1 transition-all duration-300',
      isActive ? 'text-amber-300 font-bold' : 'hover:text-amber-300'
    ]"
  >
    <span :class="[
      'w-1.5 h-1.5 rounded-full transition-all duration-300',
      isActive ? 'bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]' : 'bg-grimoire-gold/20 group-hover:bg-amber-300 group-hover:shadow-[0_0_8px_rgba(252,211,77,0.8)]'
    ]"></span>
    <span :class="[
      'transition-transform duration-300',
      isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
    ]"><slot /></span>
  </ActionLink>
</template>
