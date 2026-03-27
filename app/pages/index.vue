<script setup lang="ts">
import { useDailyDoctrine, SYSTEM_KEYS, SYSTEM_LABELS, SACRED_MATRIX } from '~/composables/sacredMatrix'

const today = useDailyDoctrine()
const { dayName, celestial, color } = today

const systemEntries = SYSTEM_KEYS.map(key => {
  const entry = today[key] as SystemEntry
  const meta = SYSTEM_LABELS[key]
  
  let id = ''
  const t = entry?.title || ''
  
  if (key === 'day') {
    id = t.split(':')[0]?.toLowerCase() ?? ''
  } else if (key === 'chakra' || key === 'crystal' || key === 'key' || key === 'metal') {
    const part = t.split(': ')[1]
    id = part?.split(' ')[0]?.toLowerCase() ?? ''
  } else if (key === 'frequency') {
    id = t.split(': ')[1]?.toLowerCase() ?? ''
  } else if (key === 'sage') {
    id = (t.split(':')[0]?.replace('Sage of ', '') ?? '').toLowerCase()
  } else {
    id = t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  return { 
    ...entry,
    label: meta.label, 
    path: `${meta.path}/${id}`
  }
})
</script>

<template>
  <ContainerBox class="w-full">
    <ContainerBox class="mb-12 pb-6 border-b border-grimoire-gold/10 relative">
      <ContainerBox class="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-amber-400 to-transparent" />
      <TextHeading class="font-display text-4xl sm:text-5xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-grimoire-gold mb-4">
        {{ dayName }}'s Doctrine
      </TextHeading>
      <TextParagraph class="font-mono text-xs sm:text-sm text-amber-500/60 uppercase tracking-widest border-l-2 border-amber-500/30 pl-4 mb-6">
        Metaphysical alignments attuned to the rhythmic cycles of the week.
      </TextParagraph>
      <ContainerBox class="flex items-center gap-3">
        <HudPanel :color="color" class="!mb-0 !p-2 !px-3 inline-flex">
          {{ celestial }}'s Day
        </HudPanel>
      </ContainerBox>
    </ContainerBox>

    <ContainerBox class="w-full not-prose mb-8">
      <ul class="list-none flex flex-col gap-6 pl-0">
        <li
          v-for="entry in systemEntries"
          :key="entry.label"
          :class="['flex flex-col gap-1.5 border-l-2 pl-4 py-2 relative overflow-hidden rounded-r-lg', `roygbiv-${color}-border`]"
        >
          <div :class="['absolute inset-0 bg-gradient-to-r opacity-20', `roygbiv-${color}-wash`]"></div>
          <div class="flex flex-wrap items-baseline gap-2 relative z-10">
            <UIcon :name="entry.icon" :class="['w-4 h-4 translate-y-0.5', `roygbiv-${color}-icon`]" />
            <NuxtLink :to="entry.path" class="font-display font-bold uppercase tracking-widest transition-opacity text-sm sm:text-base hover:opacity-80">
              <span class="text-grimoire-gold">{{ entry.label }}:</span>
              <span class="text-white ml-2">{{ entry.title }}</span>
            </NuxtLink>
            <span class="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-grimoire-gold opacity-80 ml-1">
              {{ entry.subtitle }}
            </span>
          </div>
          <TextParagraph class="text-sm sm:text-base opacity-90 leading-relaxed relative z-10 !mb-0 mt-1">
            {{ entry.description }}
          </TextParagraph>
        </li>
      </ul>
    </ContainerBox>
  </ContainerBox>
</template>
