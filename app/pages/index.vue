<script setup lang="ts">
import { useDailyDoctrine, SYSTEM_KEYS, SYSTEM_LABELS, SACRED_MATRIX } from '~/composables/sacredMatrix'

const today = useDailyDoctrine()
const { dayName, celestial, color } = today

const systemEntries = SYSTEM_KEYS.map(key => {
  const entry = today[key]
  const meta = SYSTEM_LABELS[key]
  return { title: entry.title, subtitle: entry.subtitle, description: entry.description, icon: entry.icon, label: meta.label, path: meta.path }
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
          {{ celestial }}
        </HudPanel>
      </ContainerBox>
    </ContainerBox>

    <ContainerBox class="flex flex-col gap-6 w-full not-prose mb-8">
      <HudPanel
        v-for="entry in systemEntries"
        :key="entry.label"
        :title="entry.title"
        :icon="entry.icon"
        :color="color"
        status="nominal"
      >
        <TextParagraph class="font-semibold mb-1">{{ entry.subtitle }}</TextParagraph>
        <TextParagraph>{{ entry.description }}</TextParagraph>
        <ActionLink
          :to="entry.path"
          class="inline-flex items-center gap-1.5 mt-3 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
        >
          View Full {{ entry.label }} Lexicon →
        </ActionLink>
      </HudPanel>
    </ContainerBox>
  </ContainerBox>
</template>
