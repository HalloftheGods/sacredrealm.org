<script setup lang="ts">
/**
 * WisdomCard Molecule
 * A card for highlighting specific insights, using UCard.
 */
const props = withDefaults(defineProps<{
  title?: string
  icon?: string
  footer?: string
  position?: 'inline' | 'top' | 'top-right' | 'bottom-right' | 'bottom-left' | 'float-right' | 'float-left'
}>(), {
  position: 'float-right'
})
</script>

<template>
  <UCard
    :class="[
      'bg-grimoire-deep/60 border border-grimoire-gold/15 backdrop-blur-md group hover:border-grimoire-gold/40 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-700 rounded-lg overflow-hidden relative transform hover:-translate-y-1',
      position === 'float-right' ? 'sm:float-right sm:w-72 md:w-80 sm:ml-8 sm:mb-6 sm:-mr-8 md:-mr-16 lg:-mr-32 z-10 clear-both my-6' : '',
      position === 'float-left' ? 'sm:float-left sm:w-72 md:w-80 sm:mr-8 sm:mb-6 sm:-ml-8 md:-ml-16 lg:-ml-32 z-10 clear-both my-6' : '',
      position === 'bottom-right' ? 'fixed bottom-12 right-12 w-80 z-50 shadow-2xl' : '',
      position === 'bottom-left' ? 'fixed bottom-12 left-[360px] w-80 z-50 shadow-2xl' : '',
      position === 'top-right' ? 'fixed top-12 right-12 w-80 z-50 shadow-2xl' : '',
      position === 'inline' ? 'my-8 w-full z-10' : '',
      position === 'top' ? 'w-full mb-10 z-10 shadow-xl' : ''
    ]"
    :ui="{
      root: 'shadow-none ring-0 divide-y divide-grimoire-gold/10',
      header: 'flex items-center gap-4 py-3 px-5 sm:px-6 border-b border-grimoire-gold/10 bg-gradient-to-r from-grimoire-gold/10 to-transparent relative z-10',
      body: 'prose prose-sm sm:prose-base prose-invert prose-grimoire max-w-none pt-4 pb-6 px-5 sm:px-6 leading-relaxed font-serif text-grimoire-parchment/90 relative z-10',
      footer: 'py-2 px-5 sm:px-6 bg-black/20 border-t border-grimoire-gold/10 text-[10px] font-mono uppercase tracking-[0.3em] text-grimoire-gold/50 text-right relative z-10'
    }"
  >
    <!-- Faint Background Icon -->
    <UIcon 
      v-if="icon" 
      :name="icon" 
      class="absolute bottom-4 right-4 w-32 h-32 sm:w-48 sm:h-48 text-grimoire-gold/20 pointer-events-none transform -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-0" 
    />

    <!-- Aesthetic Corner Accent -->
    <ContainerBox class="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-[0_0_5px_rgba(197,160,89,0.8)] z-20">
      <ContainerBox class="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-grimoire-gold to-transparent"></ContainerBox>
      <ContainerBox class="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-grimoire-gold to-transparent"></ContainerBox>
    </ContainerBox>

    <template v-if="title || icon" #header>
      <UIcon v-if="icon" :name="icon" class="w-4 h-4 text-grimoire-gold" />
      <TextHeading v-if="title" level="h3" class="text-xs font-mono uppercase tracking-[0.2em] italic text-grimoire-gold/80">{{ title }}</TextHeading>
    </template>

    <slot />

    <template v-if="footer" #footer>
      {{ footer }}
    </template>
  </UCard>
</template>
