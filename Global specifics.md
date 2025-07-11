# Sticky Navbar

- Sticky at the top of the viewport with high z-index  
- Compact and minimal height to avoid visual clutter  
- Semi-transparent or soft solid background with optional blur  
- Horizontal layout with name/logo on the left and nav links on the right  
- On small screens, switches to a hamburger menu  
- Smooth scrolling behavior to anchor sections  

# Mobile Navigation (Hamburger Menu)

- Only visible on small screens  
- Opens a full-screen overlay or slide-down menu with navigation links  
- Vertical stack with adequate spacing  
- Closes on link click or outside interaction  
- Transition effects for opening and closing  
- Accessible via keyboard navigation (optional)  

# Dark/Light Mode Toggle

- Positioned in top-right of the Hero image or within the navbar  
- Uses sun/moon icon that visually indicates current mode  
- Mode state persists using `localStorage` or similar mechanism  
- Components adapt styling using theme-aware utility classes  

# Scroll Behavior

- Scrollbar hidden via CSS while scroll remains enabled  
- Smooth scrolling enabled globally  
- Layout and spacing indicate that scrolling is possible  
- No full-screen lock-in on any single section  

# Layout Consistency

- All sections wrapped in a shared max-width container  
- Consistent vertical padding and spacing between and within sections  
- Typography follows a consistent scale across all breakpoints  
- Layout adapts seamlessly on all screen sizes  
- Flex and grid layouts used responsively without breakage  

# Component System

- Each section and element is modular and reusable  
- Component props handle data injection (e.g., project cards)  
- Avoids repetition through parameterized, clean structure  
- Enables future scalability without rewriting logic  

# Theme-Aware Components

- Dark and light styles handled using consistent Tailwind `dark:` classes  
- All components adapt visually when the theme toggles  
- No inline or hardcoded color overrides that break theming  

# Global Design System

- Shared utility classes or tokens for spacing, font sizes, colors  
- Color palette limited to beige, black, and one accent  
- One or two fonts used site-wide for visual harmony  
- Minimal use of shadows, borders, or gradients to maintain clarity  

# Responsive Rules

- Mobile-first layout ensures proper stacking and spacing on small screens  
- Navigation, cards, and images adjust without layout issues  
- Typography remains legible across all breakpoints  
- Grid systems are fluid, not rigid, and collapse gracefully on small screens  

# Smooth Anchor Navigation

- Navigation links scroll smoothly to corresponding sections  
- Sections have unique, semantic `id` values for anchor targeting  
- Header offset considered if the navbar overlays section headings  

# Section Awareness (Intersection Observer)

- Intersection Observer API can optionally be used to:  
  - Highlight the active section in the navbar  
  - Animate components into view as user scrolls  
- Enhances user awareness of current scroll position on the page  
- Improves engagement without additional navigation complexity  
