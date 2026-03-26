# Typography Standards

This document outlines the typography constants and styling patterns used across the Sacred Realm project.

## Font Families

- **Display**: [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) - Used for primary headings and arcane titles.
- **Sans**: [Rajdhani](https://fonts.google.com/specimen/Rajdhani) - Default body font, a tech-fantasy hybrid.
- **Mono**: [Fira Code](https://fonts.google.com/specimen/Fira+Code) - Used for system status reports, technical overlays, and the Terminal HUD.

## Letter Spacing (Tracking)

- **Headings (h1-h6)**: `tracking-widest` (Tailwind default: 0.1em) - Provides a grand, epic presence.
- **Body Text (p, li)**: `tracking-[1px]` - Enhanced spacing to reflect the open, resonant nature of the Sacred Realm.
- **Technical Overlays (HUD Titles)**: `tracking-[0.2em]` - Ultra-wide spacing for high-tech legibility.

## Text Presets

### Global Body
- Size: `text-lg`
- Line Height: `leading-relaxed`
- Color: `text-grimoire-parchment`

### HUD Terminal
- Selection: `.not-prose font-mono text-xs sm:text-sm`
- Line Height: `leading-relaxed`
- Color: Context-specific (e.g., `text-red-100/70` for red theme)
