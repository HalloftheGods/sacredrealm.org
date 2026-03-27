<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, async () => {
  const exactPage = await queryCollection('content').path(route.path).first()
  if (exactPage) return exactPage

  const parts = route.path.split('/').filter(Boolean)
  if (parts.length > 1) {
    const parentPath = '/' + parts.slice(0, -1).join('/')
    const parentPage = await queryCollection('content').path(parentPath).first()
    return parentPage
  }
  
  return null
})

useHead({
  title: page.value?.title
})

useSeoMeta({
  description: page.value?.description
})
</script>

<template>
  <ContainerBox class="w-full">
    <div v-if="page" class="mb-12 pb-6 border-b border-grimoire-gold/10 relative">
      <div class="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
      <h1 class="font-display text-4xl sm:text-5xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-grimoire-gold mb-4">{{ page.title }}</h1>
      <p class="font-mono text-xs sm:text-sm text-amber-500/60 uppercase tracking-widest border-l-2 border-amber-500/30 pl-4">{{ page.description }}</p>
    </div>
    <ContentRenderer v-if="page" :value="page" />
    <ContainerBox v-else>
      <TextHeading class="text-white text-4xl">Codex Not Found</TextHeading>
      <ContainerBox tag="pre" class="text-xs text-grimoire-gold/30 mt-4">The sacred texts at '{{ route.path }}' have not yet been inscribed.</ContainerBox>
    </ContainerBox>
  </ContainerBox>
</template>
