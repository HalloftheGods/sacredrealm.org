type RoygbivColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

interface SystemEntry {
  title: string
  subtitle: string
  description: string
  icon: string
}

interface DailyResonance {
  dayName: string
  celestial: string
  color: RoygbivColor
  metal: SystemEntry
  crystal: SystemEntry
  chakra: SystemEntry
  day: SystemEntry
  key: SystemEntry
  frequency: SystemEntry
  sage: SystemEntry
}

const SACRED_MATRIX: DailyResonance[] = [
  {
    dayName: 'Tuesday',
    celestial: 'Mars',
    color: 'red',
    day: {
      title: 'Tuesday: Mars',
      subtitle: 'The Day of Fire and Action',
      description: 'Propelled by Mars, Tuesday carries an intense, dynamic energy designed for action, courage, and transformative willpower. Mars does not hesitate; it acts.',
      icon: 'i-lucide-flame',
    },
    sage: {
      title: 'Sage of Fire: Mars',
      subtitle: "Tuesday's Quest",
      description: 'Tap into the transformative energy of fire. Undertake a challenging task that requires determination and courage, or meditate on transformation and personal growth.',
      icon: 'i-lucide-flame',
    },
    chakra: {
      title: 'Root (Muladhara)',
      subtitle: 'The Foundation of Security',
      description: 'Located at the base of the spine, the Root Chakra is your fundamental connection to the physical world. It represents survival, stability, and your grounding in reality.',
      icon: 'i-lucide-mountain-snow',
    },
    crystal: {
      title: 'Cubic (Isometric)',
      subtitle: 'Perfect Symmetry / The Absolute',
      description: 'The cubic lattice represents complete material stability and balance, possessing equal axes intersecting at perfect right angles. Like a perfectly cut diamond or grounding salt.',
      icon: 'i-lucide-box',
    },
    metal: {
      title: 'Iron (Mars)',
      subtitle: 'The Active Force / Magnetism',
      description: 'Iron is the metal of Mars—rugged, magnetic, and fiercely protective. It conducts the active, forceful energies of the universe and courses through the very blood of your vessel.',
      icon: 'i-lucide-shield',
    },
    key: {
      title: 'Do (Dominus)',
      subtitle: 'The Root Frequency / C',
      description: 'The starting point of the scale represents the absolute foundation, the Master or Dominus. This is the anchor note from which all other frequencies originate.',
      icon: 'i-lucide-circle',
    },
    frequency: {
      title: 'Red',
      subtitle: 'The Longest Wavelength / Dense Energy',
      description: 'Red forms the foundation of the visible spectrum. It represents grounding, passion, primal instinct, and the raw life force that roots us into material existence.',
      icon: 'i-lucide-radio-receiver',
    },
  },
  {
    dayName: 'Wednesday',
    celestial: 'Mercury',
    color: 'orange',
    day: {
      title: 'Wednesday: Mercury',
      subtitle: 'The Day of Wind and Intellect',
      description: 'Ruled by Mercury, the swift-moving planet of communication and intellect, Wednesday brings adaptable, communicative energy. A day of connection and swift thoughts.',
      icon: 'i-lucide-wind',
    },
    sage: {
      title: 'Sage of Wind: Mercury',
      subtitle: "Wednesday's Quest",
      description: 'Embrace the qualities of the Sage of Wind. Engage in breathwork practices, spend time observing the wind and the movement it brings, and cultivate flexibility in thought.',
      icon: 'i-lucide-wind',
    },
    chakra: {
      title: 'Sacral (Svadhisthana)',
      subtitle: 'The Font of Creativity',
      description: 'Situated in the lower abdomen, the Sacral Chakra is the wellspring of emotional fluidity, creativity, and pleasure. It flows like water.',
      icon: 'i-lucide-droplets',
    },
    crystal: {
      title: 'Tetragonal',
      subtitle: 'Elongated Alignment / Directed Energy',
      description: 'A cube stretched along one axis. The tetragonal system points outward, representing ambition, growth, and directional focus. Found in Zircon and Rutile.',
      icon: 'i-lucide-align-vertical-space-around',
    },
    metal: {
      title: 'Quicksilver (Mercury)',
      subtitle: 'The Liquid Metal / Complete Transmutation',
      description: 'Mercury defies classification—a metal that exists as a liquid. It is the great communicator, the shape-shifter, and the ultimate agent of transmutation.',
      icon: 'i-lucide-droplets',
    },
    key: {
      title: 'Re (Resonance)',
      subtitle: 'The Frequency of Movement / D',
      description: 'Re introduces movement and tension away from the root. It represents the first step of the journey, the awakening force that pulls us out of stagnation.',
      icon: 'i-lucide-arrow-right',
    },
    frequency: {
      title: 'Orange',
      subtitle: 'The Wave of Vitality / Kinetic Warmth',
      description: 'As the wavelength shortens slightly, energy accelerates into Orange. This frequency vibrates with enthusiasm, warmth, and kinetic joy.',
      icon: 'i-lucide-flame',
    },
  },
  {
    dayName: 'Thursday',
    celestial: 'Jupiter',
    color: 'yellow',
    day: {
      title: 'Thursday: Jupiter',
      subtitle: 'The Day of Thunder and Expansion',
      description: 'Under the expansive gaze of Jupiter, Thursday represents growth, abundance, and striking power. A momentous day for expanding your horizons.',
      icon: 'i-lucide-cloud-lightning',
    },
    sage: {
      title: 'Sage of Thunder: Jupiter',
      subtitle: "Thursday's Quest",
      description: 'Embody the powerful, decisive energy of thunder. Set clear intentions, make decisive moves toward personal goals, and harness your personal power responsibly.',
      icon: 'i-lucide-cloud-lightning',
    },
    chakra: {
      title: 'Solar Plexus (Manipura)',
      subtitle: 'The Core of Willpower',
      description: 'Found in the upper abdomen, the Solar Plexus is the fiery furnace of your personal power, self-esteem, and confident action. It transforms intention into reality.',
      icon: 'i-lucide-flame',
    },
    crystal: {
      title: 'Orthorhombic',
      subtitle: 'Structural Diversity / The Crossroads',
      description: 'Three unequal axes all at perfect right angles. It bridges different dimensions and pathways, teaching us to operate efficiently within differing constraints.',
      icon: 'i-lucide-cuboid',
    },
    metal: {
      title: 'Tin (Jupiter)',
      subtitle: 'The Metal of Expansion / Malleability',
      description: 'Tin is highly pliant and resistant to corrosion. It is the metal of wisdom, preservation, and quiet expansion—a bridge stabilizing other metals when alloyed.',
      icon: 'i-lucide-expand',
    },
    key: {
      title: 'Mi (Miraculum)',
      subtitle: 'The Frequency of Harmony / E',
      description: 'Mi creates the foundational triad with Do and Sol. It determines the mood, representing emotional understanding and miracles within the mundane.',
      icon: 'i-lucide-sparkles',
    },
    frequency: {
      title: 'Yellow',
      subtitle: 'The Wave of Clarity / Radiant Intellect',
      description: 'Yellow shines with brilliant, unmistakable clarity. It embodies logic, illumination, and conscious awareness—the solar spark that cuts through confusion.',
      icon: 'i-lucide-sun',
    },
  },
  {
    dayName: 'Friday',
    celestial: 'Venus',
    color: 'green',
    day: {
      title: 'Friday: Venus',
      subtitle: 'The Day of Spirit and Harmony',
      description: 'Friday shines with the energy of Venus, embodying beauty, harmony, relationships, and deep spiritual connection. The art of attraction and appreciation.',
      icon: 'i-lucide-sparkles',
    },
    sage: {
      title: 'Sage of Water: Venus',
      subtitle: "Friday's Quest",
      description: 'Embrace the fluid and adaptable nature of water. Practice mindfulness on the flow of breath or emotions, and draw inspiration from the ever-changing yet constant nature of water.',
      icon: 'i-lucide-droplets',
    },
    chakra: {
      title: 'Heart (Anahata)',
      subtitle: 'The Bridge of Compassion',
      description: 'The Heart Chakra resides at the center of the chest, acting as the crucial intersection between the lower, physical Chakras and the higher, spiritual ones.',
      icon: 'i-lucide-heart',
    },
    crystal: {
      title: 'Hexagonal',
      subtitle: 'Cosmic Alignment / Cellular Geometry',
      description: 'Built upon four axes, the hexagonal system is the foundation of sacred geometry—quartz, snowflakes, honeycombs. Ultimate organic efficiency.',
      icon: 'i-lucide-hexagon',
    },
    metal: {
      title: 'Copper (Venus)',
      subtitle: 'The Conductor / Resonant Harmony',
      description: 'Highly conductive and brilliantly colored, Copper belongs to Venus. It is the cosmic transmitter, facilitating the flow of electricity, heat, and interpersonal energy.',
      icon: 'i-lucide-zap',
    },
    key: {
      title: 'Fa (Fata)',
      subtitle: 'The Frequency of Connection / F',
      description: 'Fa represents fate or family, creating a bridge in the middle of the scale. It softens boundaries between self and other, encouraging profound empathy.',
      icon: 'i-lucide-heart',
    },
    frequency: {
      title: 'Green',
      subtitle: 'The Center Wave / Harmonic Balance',
      description: 'Green sits in the exact middle of the visible spectrum. It resonates with profound harmony, growth, and natural equilibrium.',
      icon: 'i-lucide-leaf',
    },
  },
  {
    dayName: 'Saturday',
    celestial: 'Saturn',
    color: 'blue',
    day: {
      title: 'Saturday: Saturn',
      subtitle: 'The Day of Time and Structure',
      description: 'Saturn governs time, discipline, boundaries, and long-term synthesis. Saturday represents the culmination of effort and the respect of structure.',
      icon: 'i-lucide-hourglass',
    },
    sage: {
      title: 'Sage of Time: Saturn',
      subtitle: "Saturday's Quest",
      description: 'Explore the concept of time through mindfulness practices. Stay present, reflect on cyclic nature, and align your time management with spiritual goals.',
      icon: 'i-lucide-hourglass',
    },
    chakra: {
      title: 'Throat (Vishuddha)',
      subtitle: 'The Voice of Truth',
      description: 'Located at the throat, this Chakra governs communication, self-expression, and the power of the spoken word. Speak your truth with clarity and resonance.',
      icon: 'i-lucide-mic',
    },
    crystal: {
      title: 'Trigonal (Rhombohedral)',
      subtitle: 'Internal Power / The Triumvirate',
      description: 'Possessing a single three-fold axis of rotation, the trigonal system is highly dynamic. Found in potent stones like Ruby and Tourmaline.',
      icon: 'i-lucide-triangle',
    },
    metal: {
      title: 'Lead (Saturn)',
      subtitle: 'The Prima Materia / Density',
      description: 'Lead is the heaviest, densest metal—the starting point of the Great Work. It teaches discipline, temporal limitation, and the transmutation of darkness into light.',
      icon: 'i-lucide-weight',
    },
    key: {
      title: 'Sol (Solar)',
      subtitle: 'The Frequency of Expression / G',
      description: 'The perfect fifth creates absolute consonance with the root. Sol represents radiant expression, truth, and the authoritative projection of your voice.',
      icon: 'i-lucide-sun',
    },
    frequency: {
      title: 'Blue',
      subtitle: 'The Cool Expanse / Tranquil Resonance',
      description: 'Blue represents the infinite, from the sky to the deep ocean. It conveys truth, serenity, and the quiet depth necessary for authentic contemplation.',
      icon: 'i-lucide-waves',
    },
  },
  {
    dayName: 'Sunday',
    celestial: 'The Sun',
    color: 'indigo',
    day: {
      title: 'Sunday: The Sun',
      subtitle: 'The Day of Light and Vitality',
      description: 'The week originates with the Sun, the grand luminary. Sunday is a day of illumination, focusing on core vitality, purpose, and radiant energy.',
      icon: 'i-lucide-sun',
    },
    sage: {
      title: 'Sage of Light: Sun',
      subtitle: "Sunday's Quest",
      description: 'Embody the qualities of the Sage of Light. Meditate on the nature of light—both literal and metaphorical—and practice spreading illumination in your community.',
      icon: 'i-lucide-sun',
    },
    chakra: {
      title: 'Third Eye (Ajna)',
      subtitle: 'The Center of Intuition',
      description: 'Sitting between the eyebrows, the Third Eye Chakra is the seat of intuition, vision, and inner perception. It reveals the deeper truths of the Sacred Realm.',
      icon: 'i-lucide-eye',
    },
    crystal: {
      title: 'Monoclinic',
      subtitle: 'Fluid Adaptation / The Inclined Axis',
      description: 'With one axis skewed at an angle, the monoclinic system breaks from rigidity. Represented by Jade and Gypsum, it embodies graceful resilience.',
      icon: 'i-lucide-move',
    },
    metal: {
      title: 'Gold (The Sun)',
      subtitle: 'The Divine Center / Eternal Perfection',
      description: 'Gold is the incorruptible metal, refusing to tarnish or decay. It represents the perfected soul, pure enlightenment, and the eternal Sun.',
      icon: 'i-lucide-sun',
    },
    key: {
      title: 'La (Labii)',
      subtitle: 'The Frequency of Insight / A',
      description: 'La invites us to look deeper, representing intuition and the third eye\'s perception. It enhances our intuitive capacities beyond the material plane.',
      icon: 'i-lucide-eye',
    },
    frequency: {
      title: 'Indigo',
      subtitle: 'The Wave of Depth / Inner Vision',
      description: 'Indigo carries a mysterious and penetrating energy at the highest thresholds of human vision. It stimulates inner perception and intuition.',
      icon: 'i-lucide-moon',
    },
  },
  {
    dayName: 'Monday',
    celestial: 'The Moon',
    color: 'violet',
    day: {
      title: 'Monday: The Moon',
      subtitle: 'The Day of Tides and Reflection',
      description: 'Monday is governed by the Moon, representing the shifting tides of emotion, intuition, and the subconscious. A time for introspection and honoring cycles.',
      icon: 'i-lucide-moon',
    },
    sage: {
      title: 'Sage of Spirit: Moon',
      subtitle: "Monday's Quest",
      description: 'Connect more deeply with your own spirit or essence. Enhance your intuition, tune into inner guidance, and honor your physical, emotional, and spiritual needs.',
      icon: 'i-lucide-sparkles',
    },
    chakra: {
      title: 'Crown (Sahasrara)',
      subtitle: 'The Portal to the Divine',
      description: 'At the very top of the head lies the Crown Chakra, your direct connection to infinite cosmic consciousness. It represents enlightenment and universal awareness.',
      icon: 'i-lucide-sparkles',
    },
    crystal: {
      title: 'Triclinic',
      subtitle: 'Complete Asymmetry / True Freedom',
      description: 'The triclinic system features three unequal axes at oblique angles. No symmetry—only unique, chaotic beauty. The wild card of the Sacred Realm.',
      icon: 'i-lucide-scatter-chart',
    },
    metal: {
      title: 'Silver (The Moon)',
      subtitle: 'The Ultimate Reflector / Psychic Receptivity',
      description: 'Silver is the most reflective substance known to antiquity. It is the metal of the subconscious, intuition, and receptive wisdom—reflecting profound inner truths.',
      icon: 'i-lucide-moon',
    },
    key: {
      title: 'Ti (Microcosmos)',
      subtitle: 'The Frequency of Transcendence / B',
      description: 'The leading tone possesses extreme tension that yearns to resolve back into the Root at a higher octave. The final barrier before spiritual ascendance.',
      icon: 'i-lucide-arrow-up',
    },
    frequency: {
      title: 'Violet',
      subtitle: 'The Shortest Wavelength / Cosmic Frequency',
      description: 'Violet vibrates at the absolute highest frequency of the visible spectrum—the boundary between the visible and the invisible ultraviolet dimension.',
      icon: 'i-lucide-sparkles',
    },
  },
]

const JS_DAY_TO_CELESTIAL_INDEX: Record<number, number> = {
  0: 5, // Sunday → index 5 (Sun)
  1: 6, // Monday → index 6 (Moon)
  2: 0, // Tuesday → index 0 (Mars)
  3: 1, // Wednesday → index 1 (Mercury)
  4: 2, // Thursday → index 2 (Jupiter)
  5: 3, // Friday → index 3 (Venus)
  6: 4, // Saturday → index 4 (Saturn)
}

const SYSTEM_LABELS: Record<SystemKey, { label: string, path: string }> = {
  metal: { label: 'Alchemical Metal', path: '/metals' },
  crystal: { label: 'Crystal Lattice', path: '/crystals' },
  chakra: { label: 'Chakra', path: '/chakras' },
  day: { label: 'Celestial Day', path: '/days' },
  key: { label: 'Musical Key', path: '/keys' },
  frequency: { label: 'Frequency Wave', path: '/frequencies' },
  sage: { label: 'Sage', path: '/sages' },
}

const SYSTEM_KEYS = ['metal', 'crystal', 'chakra', 'day', 'key', 'frequency', 'sage'] as const

type SystemKey = typeof SYSTEM_KEYS[number]

const useDailyDoctrine = (): DailyResonance => {
  const jsDay = new Date().getDay()
  const celestialIndex = JS_DAY_TO_CELESTIAL_INDEX[jsDay] ?? 0
  return SACRED_MATRIX[celestialIndex]!
}

const getEntryId = (key: SystemKey, title: string): string => {
  if (!title) return ''
  
  if (key === 'day') {
    return title.split(':')[0]?.toLowerCase() || ''
  }
  if (key === 'sage') {
    return title.split(':')[0]?.replace('Sage of ', '').toLowerCase() || ''
  }
  
  // For most other types (chakra, crystal, metal, key, frequency), the ID is the first word.
  // E.g., "Root (Muladhara)" -> "root", "Solar Plexus" -> "solar", "Third Eye" -> "third"
  const firstPart = title.split(' (')[0] || title
  return firstPart.split(' ')[0]?.toLowerCase() || ''
}

const useResonancesByColor = (color: RoygbivColor) => {
  const resonance = SACRED_MATRIX.find(r => r.color === color)
  if (!resonance) return []

  return SYSTEM_KEYS.map(systemKey => {
    const entry = resonance[systemKey]
    const meta = SYSTEM_LABELS[systemKey]
    const id = getEntryId(systemKey, entry.title)
    return { title: entry.title, icon: entry.icon, path: `${meta.path}/${id}`, category: meta.label }
  })
}

export {
  SACRED_MATRIX,
  SYSTEM_KEYS,
  SYSTEM_LABELS,
  useDailyDoctrine,
  useResonancesByColor,
  getEntryId,
}

export type {
  RoygbivColor,
  SystemEntry,
  SystemKey,
  DailyResonance,
}
