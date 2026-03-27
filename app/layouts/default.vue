<script setup lang="ts">
const revealActive = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)
const route = useRoute()
const isMobileMenuOpen = ref(false)

watch(() => route.fullPath, () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'auto' })
  }
  isMobileMenuOpen.value = false
})

const panelStyle = computed(() => ({
  backdropFilter: revealActive.value ? 'blur(2px)' : 'blur(16px)',
  backgroundColor: revealActive.value ? 'rgba(10, 10, 20, 0.03)' : 'rgba(10, 10, 20, 0.15)',
  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
}))

const sidebarStyle = computed(() => ({
  backgroundColor: revealActive.value ? 'rgba(5, 5, 15, 0.03)' : 'rgba(5, 5, 15, 0.1)',
  transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
}))

const fadeOpacity = computed(() => ({
  opacity: revealActive.value ? 0.15 : 1,
  transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
}))
</script>

<template>
  <ContainerBox
    class="h-screen w-screen bg-grimoire-deep text-grimoire-parchment font-sans flex relative overflow-hidden"
  >
    <!-- Cosmic Desktop Background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-grimoire-ink)_0%,_var(--color-grimoire-deep)_100%)] z-0 pointer-events-none"
    ></div>
    <SacredCanvas class="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" />

    <!-- Foreground Application Panel -->
    <div class="relative z-10 flex w-full h-full p-0 sm:p-6 lg:p-10 pointer-events-none">
      <div
        id="site-container"
        :style="panelStyle"
        class="w-full h-full flex flex-col md:flex-row rounded-none sm:rounded-3xl border-0 sm:border border-grimoire-gold/20 shadow-2xl overflow-hidden pointer-events-auto relative"
      >
        <!-- Site Container Background Image -->
        <div class="absolute inset-0 pointer-events-none bg-[url('/logo.png')] bg-no-repeat bg-center opacity-5 z-0"></div>

        <!-- Nexus Sidebar -->
        <ContainerBox
          tag="aside"
          :style="sidebarStyle"
          class="w-full md:w-72 lg:w-80 border-b md:border-b-0 md:border-r border-grimoire-gold/10 flex flex-col flex-shrink-0 relative"
        >
          <div
            class="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
          ></div>
          <div class="p-8 flex flex-col h-full z-10 relative">
            <SiteBranding
              class="mb-1"
              @reveal="(active: boolean) => revealActive = active"
            />

            <button
              class="md:hidden flex items-center justify-center gap-2 w-full py-3 mb-4 text-grimoire-gold bg-grimoire-gold/5 hover:bg-grimoire-gold/10 rounded-lg transition-colors border border-grimoire-gold/20 text-xs font-mono tracking-widest uppercase"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <UIcon
                :name="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
                class="w-4 h-4"
              />
              <span>{{ isMobileMenuOpen ? 'Close Menu' : 'Menu' }}</span>
            </button>

            <NavigationMenu
              :style="fadeOpacity"
              class="flex-col gap-4 md:mt-8"
              :class="isMobileMenuOpen ? 'flex' : 'hidden md:flex'"
            />
          </div>
          <!-- Ambient Side Glow -->
          <div
            class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-grimoire-gold/5 to-transparent pointer-events-none mix-blend-overlay"
          ></div>
        </ContainerBox>

        <!-- Grimoire Display Area (Scrollable) -->
        <ContainerBox
          :style="fadeOpacity"
          class="flex-grow h-full overflow-hidden flex flex-col relative"
        >

          <!-- Top subtle gradient for depth -->
          <div
            class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-grimoire-deep/20 to-transparent z-10 pointer-events-none"
          ></div>

          <div
            ref="scrollContainer"
            class="flex-grow h-full overflow-y-auto px-8 py-16 sm:px-16 lg:px-24 scroll-smooth custom-scrollbar relative z-10"
          >
            <ContainerBox
              tag="main"
              class="w-full max-w-none mx-auto prose prose-invert prose-grimoire md:prose-lg prose-h1:font-display prose-h2:font-display prose-h3:font-display prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-amber-200 prose-h1:to-grimoire-gold prose-h2:text-grimoire-gold prose-h3:text-grimoire-gold prose-a:text-amber-300 hover:prose-a:text-yellow-200 prose-a:underline-offset-4 prose-strong:text-amber-100 selection:bg-grimoire-gold/40 selection:text-white prose-blockquote:border-l-grimoire-gold prose-blockquote:bg-grimoire-gold/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:italic prose-p:leading-relaxed pb-32"
            >
              <slot />
            </ContainerBox>
          </div>

          <!-- Bottom subtle gradient -->
          <div
            class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-grimoire-deep/20 to-transparent z-10 pointer-events-none"
          ></div>
        </ContainerBox>

      </div>
    </div>
  </ContainerBox>
</template>

<style scoped>
  .prose {
    --tw-prose-body: var(--color-grimoire-parchment);
    --tw-prose-headings: var(--color-grimoire-gold);
    --tw-prose-links: var(--color-grimoire-gold);
    --tw-prose-bold: var(--color-grimoire-gold);
    --tw-prose-quotes: var(--color-grimoire-gold);
    --tw-prose-quote-borders: var(--color-grimoire-gold);
    --tw-prose-captions: var(--color-grimoire-gold);
    --tw-prose-code: var(--color-grimoire-gold);
    --tw-prose-pre-code: var(--color-grimoire-parchment);
    --tw-prose-pre-bg: var(--color-grimoire-ink);
    --tw-prose-th-borders: var(--color-grimoire-gold);
    --tw-prose-td-borders: var(--color-grimoire-gold);
  }
</style>
