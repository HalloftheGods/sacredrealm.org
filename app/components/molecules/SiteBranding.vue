<script setup lang="ts">
import { version } from '../../../package.json'

const emit = defineEmits<{ reveal: [active: boolean] }>()
</script>

<template>
  <ContainerBox
    class="flex flex-col items-center w-full group cursor-default overflow-visible"
    @mouseenter="emit('reveal', true)"
    @mouseleave="emit('reveal', false)"
  >
    <NuxtLink
      to="/"
      class="flex flex-col items-center w-full text-center transition-transform duration-500 hover:scale-[1.05] origin-center overflow-visible"
    >
      <TextHeading
        level="h1"
        class="w-max max-w-none text-3xl lg:text-4xl xl:text-6xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-grimoire-gold via-amber-200 to-yellow-600 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)] leading-[1.1] py-2 pr-2 overflow-visible"
      >
        <span class="inline-block px-2">SACRED</span><br />
        <span class="inline-block px-2">REALM</span>
      </TextHeading>
      <TextParagraph
        class="text-grimoire-gold/50 mt-3 text-[0.6rem] tracking-[0.35em] uppercase italic font-mono group-hover:text-grimoire-gold transition-colors duration-500"
      >Living Grimoire v{{ version }}</TextParagraph>
    </NuxtLink>
  </ContainerBox>
</template>
