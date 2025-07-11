# Hero Section – Final Specification

## Layout

- Two-column layout on medium and larger screens:
  - **Left column** (stacked vertically):
    - Full name (heading)
    - Title (e.g., "Frontend Developer")
    - Short description (1–2 sentences)
    - Inline row of social icons (Gmail, GitHub, LinkedIn) – SVG only
    - Resume button (clear call to action)
  - **Right column**:
    - Circular profile image with slight elevation (e.g., shadow or border ring)
    - Dark/light mode toggle button placed near top-right corner of the image (not overlapping)

- One-column layout on small screens:
  - Profile image and dark/light toggle come first (top)
  - Text content stacks below

## Responsiveness

- Layout shifts from two-column to one-column at mobile breakpoint
- Text and icons remain centered/aligned properly on small screens
- Touch-friendly spacing for all interactive elements

## Dark/Light Mode Toggle

- Positioned near the top-right of the image container
- Icon changes between sun and moon (SVG only)
- Seamless theme switching with smooth visual feedback
- Icon color or stroke adjusts based on active theme

## Social Icons

- Gmail, GitHub, and LinkedIn
- SVG only, consistent size
- Responsive to dark/light mode
- Placed in a horizontal row with equal spacing

## Resume Button

- Clearly labeled ("Resume")
- Opens PDF in a new tab or downloads it
- Styled to match theme (adaptive to light/dark)
- Includes subtle hover animation (e.g., scale or background change)

## Profile Image

- Circular shape with `border-radius: 50%`
- Slight shadow or elevation effect for visual lift
- Responsive sizing across breakpoints
- Slight scale-up on hover

## Animations

- Fade-in animation for text block and image on page load (with staggered order)
- Hover scale on image (slight, smooth)
- Subtle hover effects on buttons and icons (scale or color transition)
- Transitions should use soft timing (200–300ms, ease-in-out)

## Spacing & Container

- Section wrapped in a consistent max-width container
- Adequate vertical padding (`py-20` or similar)
- Left and right columns spaced evenly with grid or flex layout
- Typography and spacing match the rest of the site design system

