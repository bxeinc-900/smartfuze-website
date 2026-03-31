# Design System Specification: The Kinetic Luminary

## 1. Overview & Creative North Star

This design system is built to reflect the intersection of high-level engineering and explosive creativity. We are moving away from the static, "boxy" nature of traditional mobile development and toward a philosophy we call **"The Kinetic Luminary."**

The North Star of this system is the tension between deep, stable space (the charcoal void) and the vibrant, energetic sparks of innovation (the red-to-yellow spectrum). To achieve a high-end editorial feel, we prioritize **intentional asymmetry**, **overlapping glass layers**, and **extreme typographic scale**. This isn't just a functional tool; it’s a visual narrative of energy being harnessed.

---

## 2. Colors: The Depth of the Fuse

Our palette is rooted in the "void" of `#121212`, allowing our accent colors to vibrate with a neon-like intensity.

### The "No-Line" Rule

To maintain a premium, seamless aesthetic, **1px solid borders are strictly prohibited for sectioning content.** Boundaries must be defined through:

* **Background Shifts:** Placing a `surface-container-low` (`#131313`) element against a `surface` (`#121212`) background.
* **Tonal Transitions:** Using soft gradients or subtle shifts in container tiers to imply an edge without drawing a line.

### Surface Hierarchy & Nesting

Treat the UI as a physical stack of frosted glass.

* **Level 0 (Base):** `surface` (#121212)
* **Level 1 (Sections):** `surface-container-low` (#131313)
* **Level 2 (Cards):** `surface-container` (#1a1a1a) or `surface-container-high` (#20201f)
* **Level 3 (Floating/Glass):** Use `surface-variant` (#262626) with 60-80% opacity and a `backdrop-blur` of 20px–40px.

### The "Glass & Gradient" Rule

Standard flat colors lack "soul." Main CTAs and high-impact hero elements should utilize a signature linear gradient:

* **Primary Pulse:** `primary` (`#d42d2f`) transitioning to `primary-container` (`#b02526`).
* **Secondary Glow:** `secondary` (`#F59E0B`) transitioning to `tertiary` (`#FBBF24`).

---

## 3. Typography: Professional Playfulness

We use **Bebas Neue** across the board. Its geometric foundation provides professional stability, while its open apertures and modern curves feel friendly and approachable.

* **Display Scale:** Use `display-lg` (3.5rem) for hero statements. Tighten letter-spacing by -0.02em to give it an "editorial" punch.
* **Hierarchy as Identity:** Pair massive headlines with significantly smaller `label-md` (0.75rem) metadata. This high-contrast gap is what creates the "custom" feel, moving away from the "medium-size-everything" trap of generic apps.
* **Body Text:** `body-lg` (1rem) should be used sparingly for lead-ins, while `body-md` (0.875rem) handles the heavy lifting with a generous line-height (1.6) to ensure readability against the dark background.

---

## 4. Elevation & Depth: Tonal Stacking

We reject traditional "drop shadows" that look like heavy gray mud. Instead, we use light and transparency.

* **The Layering Principle:** Depth is achieved by stacking. An inner card should use a higher tier (e.g., `surface-container-highest`) than its parent container to create a natural visual lift.
* **Ambient Shadows:** If a floating element (like a bottom sheet or modal) requires a shadow, it must be an **Ambient Glow**. Use a blur of 40px–60px with the shadow color set to a 5% opacity version of the `primary` (`#d42d2f`) or `on-surface` color.
* **The "Ghost Border" Fallback:** If accessibility requires a stroke, use a "Ghost Border": `outline-variant` (#484847) at **15% opacity**. It should be felt, not seen.
* **Glassmorphism:** Apply to navigation bars and top headers. Use `surface-container-high` at 70% opacity with a heavy backdrop blur. This allows content to bleed through as the user scrolls, maintaining a sense of "tech-forward" depth.

---

## 5. Components: Refined Primitives

### Buttons

* **Primary:** Full-rounded (`3`). Background: Signature Primary Pulse gradient. Text: `on-primary` (`#ffffff`).
* **Secondary (Glass):** Full-rounded (`3`). Background: `surface-variant` at 20% opacity with backdrop blur. Ghost border enabled.
* **States:** On hover/active, increase the `surface-tint` overlay to make the button "glow" rather than just darken.

### Cards & Lists

* **Rules:** Never use divider lines.
* **Spacing:** Use `spacing-8` (2rem) or `spacing-10` (2.5rem) to separate list items vertically.
* **Glass Cards:** Use `surface-container` with an `xl` (1.5rem) corner radius. For added flair, add a top-down subtle 10% opacity gradient stroke to mimic light catching the "top edge" of the glass.

### Inputs

* **Style:** Minimalist. No background fill—only a bottom "Ghost Border."
* **Focus State:** The border transitions to a 100% opaque `secondary` (`#F59E0B`) line with a small "spark" (a 4px dot) at the end of the line to mimic a fuse.

### Action Chips

* **Visuals:** Use `tertiary-fixed` (`#FBBF24`) for active states to provide a "warning/energy" pop against the dark UI. Use `md` (0.75rem) rounding.

---

## 6. Do's and Don'ts

### Do

* **Do** embrace negative space. Let the charcoal background breathe; it makes the colorful accents feel more precious.
* **Do** use asymmetrical layouts. For example, a headline that is left-aligned while its supporting body text is indented by `spacing-12`.
* **Do** use the `full` roundedness scale for interactive elements to emphasize the "friendly" brand vibe.

### Don't

* **Don't** use pure white (#ffffff) for long-form body text; use `on-surface-variant` (#adaaaa) to reduce eye strain in dark mode.
* **Don't** use 90-degree corners. Everything must have at least a `sm` (0.25rem) radius to stay within the "friendly" brand identity.
* **Don't** use standard "Material Design Blue" or generic grays. If you need a neutral, lean into the charcoal and warm-tinted "surface" tokens.
* **Don't** ever use a divider line to separate two pieces of content. If they are different, use a background color shift or a `spacing-6` gap.

---
