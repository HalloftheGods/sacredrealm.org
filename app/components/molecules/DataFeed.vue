<script setup lang="ts">
/**
 * DataFeed Molecule
 * Simulates a live scrolling technical feed of operations and connections.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  speed?: number
  lines?: number
}>(), {
  speed: 2000,
  lines: 6
})

const logs = ref<string[]>([])
let intervalId: ReturnType<typeof setInterval> | null = null

const generateIp = () => `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.X.X`
const generateHex = () => Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toUpperCase()

const actions = [
  'HANDSHAKE_INIT', 
  'DECRYPT_STREAM', 
  'SYNC_PROTOCOL', 
  'NODE_RESOLVE', 
  'PING_RELAY', 
  'ESTABLISH_LINK', 
  'QUANTUM_LOCK',
  'AUTHORIZE_SIG'
]
const statuses = ['OK', 'OK', 'OK', 'OK', 'WARN', 'SYNC']

const generateLog = () => {
  const hex = generateHex()
  const ip = generateIp()
  const action = actions[Math.floor(Math.random() * actions.length)] || 'UNKNOWN'
  const status = statuses[Math.floor(Math.random() * statuses.length)] || 'OK'
  const paddedStatus = status.padEnd(4, ' ')
  return `[${hex}] ${action} => ${ip} [${paddedStatus}]`
}

onMounted(() => {
  if (import.meta.server) return // prevent hydration mismatch
  for(let i = 0; i < props.lines; i++) {
    logs.value.push(generateLog())
  }
  
  intervalId = setInterval(() => {
    logs.value.push(generateLog())
    if (logs.value.length > props.lines) logs.value.shift()
  }, props.speed)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <div class="font-mono text-[9px] sm:text-[10px] text-amber-500/50 leading-[1.6] bg-black/60 p-4 rounded-sm border border-amber-500/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-md">
    <!-- Scanning gradient line -->
    <div class="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
    
    <div class="flex flex-col gap-1 w-full relative z-10 transition-all duration-300">
      <div 
        v-for="(log, i) in logs" 
        :key="i" 
        class="whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 transform transition-all"
        :class="{ 
          'text-amber-300 drop-shadow-[0_0_5px_rgba(252,211,77,0.5)] font-bold': i === logs.length - 1,
          'text-red-400/80': log.includes('WARN'),
          'opacity-40': i < logs.length - 2
        }"
      >
        <span class="opacity-40 inline-block w-3">❯</span> 
        <span>{{ log }}</span>
      </div>
    </div>
    
    <!-- Glare overlay -->
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-amber-200/5 pointer-events-none mix-blend-screen"></div>
  </div>
</template>
