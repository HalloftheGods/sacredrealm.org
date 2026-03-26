<script setup lang="ts">
/**
 * HudMetric Molecule
 * A numeric readout with a specialized label and directional trend indicator
 */
const props = defineProps<{
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'stable'
}>()
</script>

<template>
  <div class="flex flex-col items-start bg-gradient-to-r from-amber-400/10 to-transparent border-l border-amber-400/40 pl-4 py-2 relative overflow-hidden group">
    <!-- Highlight flash on hover -->
    <div class="absolute left-0 top-0 w-[2px] h-full bg-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(252,211,77,1)]"></div>
    
    <div class="text-[9px] font-mono text-amber-400/60 uppercase tracking-widest mb-1">{{ label }}</div>
    <div class="flex items-end gap-1.5 shadow-sm">
      <div class="text-2xl sm:text-3xl font-light font-mono text-amber-50 tracking-tight leading-none text-shadow-glow">{{ value }}</div>
      <div v-if="unit" class="text-[10px] text-amber-400/50 uppercase font-bold tracking-widest mb-1">{{ unit }}</div>
    </div>
    
    <div v-if="trend" class="text-[8px] uppercase tracking-[0.2em] mt-2 flex items-center gap-1 font-bold" :class="{ 'text-emerald-400': trend === 'up', 'text-amber-500': trend === 'stable', 'text-rose-500': trend === 'down' }">
      <span v-if="trend === 'up'">▲ INCREASE</span>
      <span v-if="trend === 'down'">▼ DECREASE</span>
      <span v-if="trend === 'stable'">■ STABLE</span>
    </div>
  </div>
</template>

<style scoped>
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(254, 243, 199, 0.4);
}
</style>
