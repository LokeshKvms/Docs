# Contact Me Section – Final Specification

## Purpose

- Give visitors a clear and simple way to contact you.
- No backend or form logic required.
- Closes the page with a professional and minimal touch.

---

## Layout & Content

### Section Heading

- Title: “Contact Me” or “Get in Touch”
- Consistent section title styling
- Optional short message beneath:
  > “Have an opportunity or just want to connect? I’m open to conversation.”

---

### Contact Options (Minimal Style)

- **Email link**: 
  - Shown directly as text: `youremail@gmail.com`
  - Clickable with `mailto:` to open user’s email client
- **Icons Row**:
  - SVG icons for:
    - Gmail
    - GitHub
    - LinkedIn
  - Same set and style as in Hero section
  - Inline layout (horizontal row)
  - Hover effect: subtle scale or color shift
  - Icons open links in a new tab (`target="_blank"` with `rel="noopener"`)

- **Optional**: Resume button (secondary, if not too repetitive from Hero)

---

## Layout Behavior

### On Desktop / Normal Screens

- Section content centered in a **single column**
- Spacing between heading, subtext, icons, and email
- Max width container (like other sections)

### On Mobile

- Fully stacked layout
- Icons row centered and tap-friendly
- Padding and font-size adjusted for small screens

---

## Visual Design

- Background matches adjacent section or has slight variation for contrast
- Section spacing: same vertical rhythm (`py-16`, `py-20`)
- Icons and text theme-aware (light/dark fill)
- Typography consistent with other sections
- No visual noise — keep it clean

---

## Interactions

- Fade-in animation on scroll
- Icons and email hover effect (subtle scale or fill color change)
- All elements keyboard focusable
- Email copyable

---

## Accessibility

- `aria-label`s for each social icon link
- Color contrast for text and icons meets accessibility standards
- Links open in new tab where appropriate

---

## No Form Needed

- No input fields or validation logic
- No backend
- Just straightforward static contact options

