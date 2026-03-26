<script setup lang="ts">
defineProps<{
  to: string
  colorTheme: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'
}>()

const themeClasses = {
  red: { text: 'hover:text-red-400', bg: 'group-hover:bg-red-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(239,68,68,0.8)]' },
  orange: { text: 'hover:text-orange-400', bg: 'group-hover:bg-orange-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(249,115,22,0.8)]' },
  yellow: { text: 'hover:text-yellow-400', bg: 'group-hover:bg-yellow-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(234,179,8,0.8)]' },
  green: { text: 'hover:text-green-400', bg: 'group-hover:bg-green-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]' },
  blue: { text: 'hover:text-blue-400', bg: 'group-hover:bg-blue-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]' },
  indigo: { text: 'hover:text-indigo-400', bg: 'group-hover:bg-indigo-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]' },
  violet: { text: 'hover:text-violet-400', bg: 'group-hover:bg-violet-500', shadow: 'group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)]' }
}
</script>

<template>
  <ActionLink :to="to" :class="['group flex items-center gap-3 py-1 transition-all duration-300 pl-4 border-l border-grimoire-gold/10 ml-1.5', themeClasses[colorTheme].text]">
    <span :class="['w-1 h-1 rounded-sm bg-grimoire-gold/30 transition-all duration-300', themeClasses[colorTheme].bg, themeClasses[colorTheme].shadow]"></span>
    <span class="group-hover:translate-x-1 transition-transform duration-300"><slot /></span>
  </ActionLink>
</template>
