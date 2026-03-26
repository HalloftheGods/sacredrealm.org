<template>
  <div class="flex flex-wrap items-center justify-end gap-1.5 relative z-20">
    <NuxtLink
      v-for="tag in filteredTags"
      :key="tag.path + tag.title"
      :to="tag.path"
      class="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono uppercase tracking-widest rounded-sm border shadow-inner transition-all duration-300 backdrop-blur-sm opacity-60 hover:opacity-100 hover:scale-105"
      :class="tagStyle"
    >
      <UIcon :name="tag.icon" class="w-3 h-3" />
      <span class="font-semibold">{{ shortTitle(tag.title) }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'
import { useResonancesByColor, type RoygbivColor } from '~/composables/sacredMatrix'

const props = defineProps<{ color: string }>()

const route = useRoute()

const allTags = computed(() => useResonancesByColor(props.color as RoygbivColor))

const shortTitle = (title?: string) => {
  if (!title) return ''
  const hasColon = title.includes(':')
  const hasDash = title.includes('-')
  if (hasColon) return title.split(':')[1]!.trim()
  if (hasDash) return (title.split('-')[1] ?? title.split('-')[0]!).trim()
  return title.trim()
}

const filteredTags = computed(() => {
  const seenTitles = new Set<string>()
  return allTags.value.filter(tag => {
    if (tag.path === route.path) return false
    const title = shortTitle(tag.title)
    if (seenTitles.has(title)) return false
    seenTitles.add(title)
    return true
  })
})

const TAG_STYLES: Record<string, string> = {
  red: 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/80',
  orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/80',
  yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/80',
  green: 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/80',
  blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/80',
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-500/80',
  violet: 'bg-violet-500/10 border-violet-500/30 text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/80',
}

const tagStyle = computed(() =>
  TAG_STYLES[props.color] || 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/40'
)
</script>
