---
name: Rosé & Gilt
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#605c50'
  on-tertiary: '#ffffff'
  tertiary-container: '#797468'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e9e2d3'
  tertiary-fixed-dim: '#cdc6b8'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4b463c'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-desktop: 80px
  container-margin-mobile: 20px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

This design system is crafted to bridge the gap between playful, youthful energy and a premium, indulgent experience. It draws inspiration from the refreshing nature of flavoured milk while elevating it through a sophisticated "Modern Glassmorphic" aesthetic.

The visual narrative focuses on "The Chilled Indulgence." It utilizes high-quality photography of condensation-beaded glass and vibrant rose elements, set against a backdrop of clean, creamy whites and shimmering gold accents. The atmosphere is light and airy, prioritizing generous whitespace to ensure the vibrant rose pink remains the focal point without overwhelming the user. The style is professional yet energetic, suitable for an audience that values both fun and quality.

## Colors

The palette is rooted in the "Exotic Rose" flavor profile, utilizing high-contrast accents against a soothing, creamy base.

*   **Primary (Vibrant Rose):** Used for primary actions, branding elements, and highlights. It represents the intensity and freshness of the rose flavor.
*   **Secondary (Rich Metallic Gold):** Employed for premium accents, borders, and icon details. It signifies the "Gold" quality of the product.
*   **Tertiary (Creamy Milk White):** Serves as the primary surface color, providing a warm, organic alternative to pure white that mimics the base ingredient.
*   **Neutral (Rich Charcoal):** Used for body text and deep shadows to ensure high legibility and structural grounding.

## Typography

The typographic hierarchy balances expressive personality with modern functionalism.

**Bricolage Grotesque** is chosen for headlines to mirror the quirky, fluid energy of the "KOOL" logo. Its unique character adds a sense of movement and youthfulness.

**Plus Jakarta Sans** provides a clean, approachable counterpoint for all functional text. Its soft, geometric curves complement the rounded UI elements and maintain a friendly, legible tone across all device sizes. Large headlines should use tighter letter spacing for a more "designed" editorial feel.

## Layout & Spacing

The design system utilizes a **fluid 12-column grid** for desktop and a **4-column grid** for mobile. 

The layout philosophy centers on "Breathability." Section gaps are intentionally large to create a premium feel. Content should be grouped into cards or logical units with significant internal padding (minimum 32px) to support the glassmorphic aesthetic. Alignments should be crisp and generally centered for marketing sections, but left-aligned for data-heavy or interactive components to maintain clarity.

## Elevation & Depth

This system uses a tiered approach to depth:

1.  **Background:** The Tertiary Creamy White (#FDF5E6) acts as the base canvas.
2.  **Surface (Glass):** Cards use a semi-transparent white fill (80% opacity) with a `16px` backdrop blur and a `1px` subtle gold or white border.
3.  **Floating Elements:** Interactive components (buttons/floating images) utilize "Ambient Shadows." These are extra-diffused, multi-layered shadows with a slight Rose Pink (#E91E63) tint at low opacity (8-12%) to simulate light passing through the liquid product.

## Shapes

The shape language is consistently soft and organic. All primary containers and buttons use a `16px` (rounded-lg) radius. For smaller elements like chips and tags, use fully pill-shaped (rounded-full) geometry to emphasize the "bubbly" and liquid nature of the brand. Avoid sharp 90-degree corners entirely to maintain the youthful and approachable mood.

## Components

### Buttons
Primary buttons are high-contrast Rose Pink with white text. They should have a subtle gold inner-glow on hover. Secondary buttons use a gold outline with a transparent background.

### Cards (Glassmorphism)
The signature component. Cards must feature a `1px` border (Gold or White at 40% opacity) and a backdrop blur of `12px` to `20px`. Content inside should have ample padding to avoid crowding the edges.

### Input Fields
Inputs should be minimal, using the Creamy White base with a bottom-border only or a very light Gold outline. Focus states should transition to a solid Rose Pink border.

### Chips & Badges
Used for flavor notes or nutritional highlights. Use pill shapes with light Rose or Gold tinted backgrounds and darker text for accessibility.

### Product Imagery
Images of the Amul Kool Gold bottle should always be high-resolution with transparent backgrounds, layered so they slightly overlap card boundaries to create a 3D effect.