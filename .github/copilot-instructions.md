# Project: Arabic personal portfolio website for a Saudi copywriter

## Stack
- Astro (static output), Tailwind CSS, minimal vanilla JS. No backend, no database, no React.
- Hosting: free static hosting. Site URL comes from an env var (PUBLIC_SITE_URL); never hardcode a domain.

## Language & direction
- The UI is Arabic only: <html lang="ar" dir="rtl">.
- Use Tailwind logical utilities (ms-, me-, ps-, pe-, start-, end-, text-start). Never use ml-/mr-/pl-/pr-/left-/right-.
- NEVER rewrite, translate, or "improve" Arabic copy. Use text exactly as provided in the prompt.

## Design tokens (define in Tailwind theme, no random hex values in components)
- espresso #4A2C20 (primary, headings, buttons) | coffee #8B5E3C (links, hover)
- cream #FAF5EC (page bg) | sand #EFE4D2 (surfaces, sidebar)
- gold #C08A3E (decorative lines/icons only, never small text) | sage #4F5D4A (secondary tags)
- ink #2A1B14 (body text)
- Fonts (self-hosted via @fontsource): IBM Plex Sans Arabic for body, Alexandria for headings, Amiri for quotes.

## Code rules
- Small reusable components in src/components. Content lives in src/data, never hardcoded in components.
- Use astro:assets <Image> for local images (width/height set, lazy loading except above the fold).
- Semantic HTML, visible focus states, respect prefers-reduced-motion, keep animations subtle.
- Mobile-first. Do not add dependencies without asking.
- Change only the files needed for the task. If something is ambiguous, ask before assuming.


## Visual Design Direction

- Create a premium Arabic editorial portfolio, not a generic developer or agency template.
- The visual identity should communicate copywriting, advertising creativity, storytelling, and professional writing.
- Use an elegant editorial layout with strong Arabic typography, generous whitespace, asymmetric compositions, and carefully balanced visual hierarchy.
- Make the Arabic typography a central design element, using expressive headings and selective word emphasis.
- Incorporate subtle writing-inspired details: quotation marks, editorial underlines, numbered projects, small annotations, and refined typography accents.
- Avoid cliché visuals such as excessive pen, pencil, keyboard, or notebook icons.

## Portfolio & Work Presentation

- Treat every portfolio item as a creative advertising case, not just an image card.
- Give featured projects strong visual presentation with varied but balanced aspect ratios.
- Use subtle image reveal animations, staggered entrances, and smooth hover zoom effects.
- Provide an accessible lightbox with clear project information and readable Arabic copy.
- Never sacrifice image clarity or text readability for animation.
- Keep original advertising artwork intact. Never alter or regenerate its Arabic text.

## Motion & Interaction

- Use smooth CSS transitions and lightweight animations.
- Add subtle scroll-reveal effects to sections and portfolio cards.
- Use restrained hover interactions and elegant transitions.
- Prefer transform and opacity animations for performance.
- Respect prefers-reduced-motion.
- Avoid unnecessary animation libraries and heavy JavaScript.
- Ensure all interactions work on touch devices.

## Design Quality Standards

- The final result must feel custom-designed, polished, and visually memorable.
- Avoid generic portfolio templates and repetitive card layouts.
- Maintain consistent spacing, typography, colors, and component styling.
- Ensure excellent visual hierarchy on desktop and mobile.
- Prioritize clarity, credibility, accessibility, and conversion to WhatsApp.
- Do not invent testimonials, client names, results, or project information.
- Do not invent or rewrite the supplied Arabic copy.
