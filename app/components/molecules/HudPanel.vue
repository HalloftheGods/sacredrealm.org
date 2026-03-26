<script setup lang="ts">
/**
 * HudPanel Molecule
 * A sleek, high-tech interface panel for displaying system diagnostics and information
 * with corner reticles and a scanline effect.
 */
const props = withDefaults(defineProps<{
  title?: string
  status?: 'nominal' | 'warning' | 'critical' | 'offline'
  icon?: string
  color?: 'amber' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'
}>(), {
  status: 'nominal',
  color: 'amber'
})

const statusConfig = {
  nominal: {
    text: 'text-amber-400',
    border: 'shadow-[0_0_15px_rgba(251,191,36,0.05)]',
    label: 'SYS.NOMINAL'
  },
  warning: {
    text: 'text-orange-500',
    border: 'shadow-[0_0_15px_rgba(249,115,22,0.1)]',
    label: 'SYS.WARN_01'
  },
  critical: {
    text: 'text-red-500',
    border: 'shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-pulse',
    label: 'SYS.CRITICAL'
  },
  offline: {
    text: 'text-gray-500',
    border: '',
    label: 'SYS.OFFLINE'
  }
}

const currentConfig = computed(() => statusConfig[props.status || 'nominal'])
const currentTheme = computed(() => {
  const themes = {
    amber: { container: 'roygbiv-amber', border: 'roygbiv-amber-border', title: 'roygbiv-amber-title', icon: 'roygbiv-amber-icon', wash: 'roygbiv-amber-wash', divider: 'roygbiv-amber-divider', text: 'roygbiv-amber-text' },
    red: { container: 'roygbiv-red', border: 'roygbiv-red-border', title: 'roygbiv-red-title', icon: 'roygbiv-red-icon', wash: 'roygbiv-red-wash', divider: 'roygbiv-red-divider', text: 'roygbiv-red-text' },
    orange: { container: 'roygbiv-orange', border: 'roygbiv-orange-border', title: 'roygbiv-orange-title', icon: 'roygbiv-orange-icon', wash: 'roygbiv-orange-wash', divider: 'roygbiv-orange-divider', text: 'roygbiv-orange-text' },
    yellow: { container: 'roygbiv-yellow', border: 'roygbiv-yellow-border', title: 'roygbiv-yellow-title', icon: 'roygbiv-yellow-icon', wash: 'roygbiv-yellow-wash', divider: 'roygbiv-yellow-divider', text: 'roygbiv-yellow-text' },
    green: { container: 'roygbiv-green', border: 'roygbiv-green-border', title: 'roygbiv-green-title', icon: 'roygbiv-green-icon', wash: 'roygbiv-green-wash', divider: 'roygbiv-green-divider', text: 'roygbiv-green-text' },
    blue: { container: 'roygbiv-blue', border: 'roygbiv-blue-border', title: 'roygbiv-blue-title', icon: 'roygbiv-blue-icon', wash: 'roygbiv-blue-wash', divider: 'roygbiv-blue-divider', text: 'roygbiv-blue-text' },
    indigo: { container: 'roygbiv-indigo', border: 'roygbiv-indigo-border', title: 'roygbiv-indigo-title', icon: 'roygbiv-indigo-icon', wash: 'roygbiv-indigo-wash', divider: 'roygbiv-indigo-divider', text: 'roygbiv-indigo-text' },
    violet: { container: 'roygbiv-violet', border: 'roygbiv-violet-border', title: 'roygbiv-violet-title', icon: 'roygbiv-violet-icon', wash: 'roygbiv-violet-wash', divider: 'roygbiv-violet-divider', text: 'roygbiv-violet-text' }
  }
  return themes[props.color || 'amber'] || themes['amber']
})

const isActive = ref(false)
const cardRef = ref<HTMLElement | null>(null)
const cardHeight = ref(0)
const toggleActive = () => {
  const container = document.getElementById('site-container')
  
  if (!isActive.value) {
    if (cardRef.value) {
      cardHeight.value = cardRef.value.getBoundingClientRect().height
    }
    isActive.value = true
    
    if (container) {
      // Transition is already provided by default.vue's panelStyle,
      // but we explicitly add opacity handling
      container.style.opacity = '0'
      container.style.pointerEvents = 'none'
    }
  } else {
    isActive.value = false
    
    if (container) {
      container.style.opacity = '1'
      container.style.pointerEvents = 'auto'
    }
  }
}

onUnmounted(() => {
  if (isActive.value) {
    const container = document.getElementById('site-container')
    if (container) {
      container.style.opacity = '1'
      container.style.pointerEvents = 'auto'
    }
  }
})
</script>

<template>
  <div class="relative overflow-visible">
    <!-- Placeholder to prevent layout shift when teleported -->
    <div v-if="isActive" :class="['mb-6 lg:mb-8 transition-all', currentTheme.container]" :style="{ height: cardHeight + 'px' }"></div>

    <Teleport to="body" :disabled="!isActive">
      <!-- Full screen overlay when active -->
      <transition
        enter-active-class="transition-opacity duration-700"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-700"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isActive" 
          class="fixed inset-0 z-[100] bg-transparent cursor-pointer pointer-events-auto" 
          @click="toggleActive"
        ></div>
      </transition>

      <!-- Global Close Button -->
      <transition
        enter-active-class="transition-opacity duration-700 delay-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <button 
          v-if="isActive"
          @click.stop="toggleActive"
          class="fixed top-4 right-4 md:top-8 md:right-8 z-[120] p-3 border border-grimoire-gold/30 bg-black/60 backdrop-blur-md rounded-full shadow-xl hover:bg-black/80 hover:border-grimoire-gold transition-all duration-300 pointer-events-auto group"
        >
          <UIcon name="i-lucide-x" class="w-6 h-6 text-grimoire-gold/70 group-hover:text-white pointer-events-none transition-colors" />
        </button>
      </transition>

      <div 
        ref="cardRef"
        @click="!isActive && toggleActive()"
        :class="[
          'bg-grimoire-ink/10 backdrop-blur-md border border-solid p-5 sm:p-6 transition-all duration-700 not-prose',
          isActive 
            ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[95vw] md:w-[800px] lg:w-[960px] xl:w-[1024px] max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] m-0 cursor-default rounded-lg custom-scrollbar' 
            : 'relative mb-6 lg:mb-8 cursor-pointer overflow-hidden group',
          currentConfig.border, 
          currentTheme.container
        ]"
      >
    <!-- Corner Tech Ornaments -->
    <div :class="['absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-50 group-hover:opacity-100 transition-opacity', currentTheme.border]"></div>
    <div :class="['absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 opacity-50 group-hover:opacity-100 transition-opacity', currentTheme.border]"></div>
    <div :class="['absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 opacity-50 group-hover:opacity-100 transition-opacity', currentTheme.border]"></div>
    <div :class="['absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-50 group-hover:opacity-100 transition-opacity', currentTheme.border]"></div>

    <!-- Scanline effect overlay -->
    <div class="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMDUpIi8+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz4KPC9zdmc+')] pointer-events-none opacity-20 mix-blend-overlay"></div>

    <!-- Giant Background Icon Watermark -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none rounded-lg z-0">
      <UIcon 
        v-if="icon" 
        :name="icon" 
        :class="[
          'absolute -bottom-8 -right-8 w-48 h-48 sm:w-64 sm:h-64 opacity-20 transform -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6',
          currentTheme.icon
        ]"
      />
    </div>
    <!-- Header -->
    <div v-if="title || icon" :class="['flex flex-wrap items-center justify-between border-b pb-3 mb-4 relative z-10 w-full', currentTheme.divider]">
      <div class="flex items-center gap-2">
        <UIcon v-if="icon" :name="icon" :class="['w-4 h-4 relative z-10', currentTheme.icon]" />
        <h4 :class="['text-[11px] font-mono uppercase tracking-[0.2em] m-0 relative z-10', currentTheme.title]">{{ title }}</h4>
      </div>
      <div class="flex flex-wrap flex-1 justify-end">
        <SystemTags v-if="color && color !== 'amber'" :color="color" />
      </div>
    </div>

    <!-- Content -->
    <div :class="['relative z-10 font-mono text-xs sm:text-sm leading-relaxed font-light flex flex-col gap-3 max-w-none', currentTheme.text]">
      <slot />
    </div>
    
    

    <!-- Subtle gradient wash -->
    <div :class="['absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t to-transparent pointer-events-none mix-blend-screen opacity-30', currentTheme.wash]"></div>
      </div>
    </Teleport>
  </div>
</template>
