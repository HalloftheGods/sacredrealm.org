# The Daily Doctrine

The **Daily Doctrine** is the core foundational concept of the Sacred Realm logic. It unifies our modern concept of days of the week with the rich, interactive components of the broader spiritual structure—automatically calculating the correct alignments for the user based on the real-world day.

## How It Works

Powered by the `useDailyDoctrine()` composable (found in `app/composables/sacredMatrix.ts`), the logic detects the user's current day of the week via JavaScript's standard `new Date().getDay()` and maps it to a corresponding index in the `SACRED_MATRIX`. 

Due to the esoteric mappings, the order of logic follows a specific progression rather than the typical Monday-Sunday sequence:
- **Tuesday** (Mars / Red / Root / Iron)
- **Wednesday** (Mercury / Orange / Sacral / Quicksilver)
- **Thursday** (Jupiter / Yellow / Solar Plexus / Tin)
- **Friday** (Venus / Green / Heart / Copper)
- **Saturday** (Saturn / Blue / Throat / Lead)
- **Sunday** (The Sun / Indigo / Third Eye / Gold)
- **Monday** (The Moon / Violet / Crown / Silver)

The `SACRED_MATRIX` pairs the day with its associated ROYGBIV color, celestial body, system entries (Metal, Crystal, Chakra, Day, Key, Frequency, Sage), and custom icons.

## How To Use It

You can use the Daily Doctrine in any component to present dynamically themed content that matches the current day. 

### Implementation Example

To access the doctrine mapping within a Vue composable/component:

```vue
<script setup lang="ts">
import { useDailyDoctrine } from '~/composables/sacredMatrix'

// Retrieve the current day's corresponding matrix data
const today = useDailyDoctrine()
</script>

<template>
  <div :class="`text-${today.color}-500`">
    <h2>{{ today.dayName }}'s Doctrine</h2>
    <p>{{ today.day.description }}</p>

    <!-- Example of rendering a specific association such as Metal -->
    <div class="resonance-item">
      <UIcon :name="today.metal.icon" class="w-8 h-8" />
      <span>Metal of the Day: {{ today.metal.title }}</span>
      <p>{{ today.metal.description }}</p>
    </div>
  </div>
</template>
```

### Response Structure

The `today` object returned adheres to the `DailyResonance` interface:

```typescript
{
  dayName: 'Sunday',
  celestial: 'The Sun',
  color: 'indigo',
  metal: { title: 'Gold (The Sun)', subtitle: '...', description: '...', icon: 'i-lucide-sun' },
  crystal: { /* ... */ },
  chakra: { /* ... */ },
  day: { /* ... */ },
  key: { /* ... */ },
  frequency: { /* ... */ },
  sage: { /* ... */ }
}
```

By heavily utilizing `useDailyDoctrine()` across the application, you can easily alter entire UI color schemes, active visual states, and content selections to be reactive to the user's current day.
