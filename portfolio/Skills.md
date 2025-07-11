# Skills Section – Final Specification

## Purpose

- Present your technical skill set in an organized, readable way.
- Use visual grouping to show areas of knowledge (e.g., Languages, Frameworks).
- Allow optional linking to certifications on skill click.
- Keep the entire section responsive, minimal, and consistent with the site's tone.

---

## Component Structure

### SkillCard (Individual Skill Component)

- Props:
  - `icon` – logo/icon for the skill (SVG or inline image)
  - `label` – name of the skill (e.g., JavaScript)
  - `link` – optional URL to certification or proof of learning

- Behavior:
  - Displays icon above or next to the skill name
  - If `link` is provided, the card becomes clickable and opens the link in a new tab
  - Tooltip or subtle indicator (optional) if a certification is available

- Style:
  - Small, uniform card or pill layout
  - Hover effect: slight scale or outline
  - Theme-aware (adapts to dark/light mode)

---

### SkillGroup (Grouped Skill Component)

- Props:
  - `groupTitle` – name of the group (e.g., “Languages”, “Frameworks”)
  - `skills` – an array of skill objects passed to `SkillCard`

- Layout:
  - Displays group title at the top
  - Below it, renders all related `SkillCard`s in a responsive grid or flex wrap

- Style:
  - Group box or section with clean spacing and padding
  - Optionally: divider line or light background for each group
  - Theme-aware group heading styling

---

## Suggested Groups

- **Languages**: JavaScript, TypeScript, HTML, CSS
- **Frameworks & Libraries**: React, Next.js, TailwindCSS, Bootstrap
- **Tools & Platforms**: Git, GitHub, Vercel, Netlify
- **Conceptual / Others** (Optional): Responsive Design, Web Accessibility, etc.

(Only include tools or skills you’re confident discussing or have used meaningfully.)

---

## Layout and Visual Design

### On Normal Screens

- Multi-column grid layout:
  - Each `SkillGroup` displayed in a vertical stack
  - Each group contains a responsive grid of `SkillCard`s (3–4 per row)
- Max-width container as with other sections
- Section heading (“Skills”) centered or aligned left

### On Small Screens

- Stack all `SkillGroup`s vertically
- Skill cards wrap into 2-per-row or full-width depending on screen size
- Padding and spacing optimized for tap targets

### Visual Balance

- Minimalist card design — no borders unless on hover
- Use icon + text layout (icon above or left of label)
- Maintain consistent spacing between cards and groups
- Font and size match rest of site
- Responsive sizing for icons and text

---

## Optional Enhancements

- Animate cards on load (e.g., fade-in or slide-up)
- Hover animation for each skill card (scale, underline, or color change)
- Subtle badge or icon to indicate a verified/certified skill
- Group entry animations (staggered)

---

## Accessibility and Interactivity

- All cards keyboard focusable if clickable
- `aria-label` on clickable cards for screen readers
- Links open in new tab with `rel="noopener noreferrer"`

