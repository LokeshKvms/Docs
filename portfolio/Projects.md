# Projects Section – Final Specification

## Purpose

- Showcase your best work with visual clarity and consistent structure.
- Allow visitors to quickly understand what you built, how, and where to view it.
- Each project is presented in a clean vertical card layout, using a reusable component.

---

## ProjectCard (Single Project Component)

### Structure (Top to Bottom)

1. **Project Image**
   - Mockup, screenshot, or banner of the project
   - Scales responsively and maintains aspect ratio
   - Slight border radius or shadow for elevation

2. **Project Title**
   - Bold, readable heading
   - Prominently placed below the image

3. **Description**
   - Short paragraph (3–4 lines max)
   - Explains what the project is and any key challenges or features

4. **Tech Stack**
   - Small inline list or badge-like pills (e.g., React, Tailwind, Firebase)
   - Style to match Skills section for visual consistency

5. **Links**
   - Icons or labeled buttons:
     - Live Demo (if available)
     - GitHub Repo
   - Only shown if links are provided
   - Hover interaction (e.g., underline, color shift)

### Interactivity & Behavior

- Hover effects:
  - Subtle scale-up or shadow
  - Buttons or links have hover transitions
- Entire card does **not** need to be clickable — just the links
- Consistent animation/timing with other sections

---

## Layout Strategy

### On Normal Screens (Desktop & Tablets)

- **Grid layout** (e.g., 2 or 3 columns depending on screen width)
  - Uniform card height if content lengths allow
  - Responsive gap between cards (`gap-6` or `gap-8`)
  - Cards aligned vertically (image on top, then text)

### On Small Screens

- **Single-column layout**
  - Each project card stacks vertically
  - Adjust padding and width for comfortable readability
  - Image scales full-width with consistent border radius

### Section Container

- Max-width container shared with other sections
- Section heading: “Projects” or “My Work”
- Top and bottom padding consistent (`py-16` or `py-20`)
- Scroll behavior smooth when navigated from nav

---

## Styling Notes

- Theme-aware (dark/light mode styling)
- Cards should not be overly styled — clean borders, soft shadows if needed
- Image loading should be optimized (`lazy` if possible)
- Font and button styles consistent with Resume and Skills sections
- Responsive, accessible, and keyboard-navigable where applicable

---

## Optional Enhancements

- Fade-in animation for cards as they scroll into view (using Intersection Observer)
- Hover effect on image (e.g., brightness, scale)
- Show "In Progress" badge if applicable
- Optional tags like “Featured” or “Team Project”

