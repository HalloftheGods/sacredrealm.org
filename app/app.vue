<script setup lang="ts">
import { version } from '../package.json'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Sacred Realm` : 'Sacred Realm | The Golden Land'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Rajdhani:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Global Copyright Overlay -->
  <div class="fixed bottom-2 left-0 w-full px-4 flex justify-between items-end text-xs text-grimoire-gold/30 font-mono z-50 pointer-events-none">
    <div class="flex-1 text-left lowercase">
      v{{ version }}
    </div>
    <div class="flex-1 text-center">
      © 2006-2026 <a href="https://hallofthegods.com/" target="_blank" class="text-grimoire-gold/50 hover:text-grimoire-gold transition-colors pointer-events-auto">Hall of the Gods, Inc.</a> All rights reserved.
    </div>
    <div class="flex-1 text-right">
      [w⁴(YouMeOS)]<sup>G</sup> = X
    </div>
  </div>
</template>

<style>
@import "~/assets/css/main.css";

/* System-wide overrides */
::selection {
  @apply bg-grimoire-gold/30 text-grimoire-parchment;
}
</style>
