## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


# Project: Ibn Khaleel - Arabic Copywriter Portfolio

## Project Context
- Build a premium Arabic personal portfolio for a Saudi copywriter.
- Brand name: ابن خليل.
- The primary goal is to showcase copywriting work and generate WhatsApp inquiries.
- The website is Arabic-only and RTL.

## Design Direction
- Create a premium editorial-style design, not a generic portfolio template.
- Communicate creativity, advertising, storytelling, and professional copywriting.
- Use expressive Arabic typography, generous whitespace, elegant compositions, and refined details.
- Make the website visually memorable and professionally polished.

## Technology Stack
- Astro with static site generation (SSG).
- Tailwind CSS v4.
- Minimal vanilla JavaScript.
- No backend, database, React, or unnecessary dependencies.
- Keep the architecture ready for future content expansion.

## Language and RTL
- Always use Arabic copy exactly as provided.
- Never rewrite, translate, or improve supplied Arabic text.
- Use logical CSS properties and RTL-aware layouts.
- Ensure correct Arabic typography and text rendering.

## Design Tokens
Use only the established project colors:
- Espresso: #4A2C20
- Coffee: #8B5E3C
- Cream: #FAF5EC
- Sand: #EFE4D2
- Gold: #C08A3E
- Sage: #4F5D4A
- Ink: #2A1B14

Fonts:
- IBM Plex Sans Arabic for body text.
- Alexandria for headings.
- Amiri for quotations.

## Portfolio Presentation
- Treat each project as an advertising case, not just an image card.
- Use attractive layouts and balanced image aspect ratios.
- Add subtle image reveal animations and staggered entrances.
- Use smooth hover zoom effects.
- Provide an accessible lightbox for viewing project images and copy.
- Never modify or regenerate Arabic text inside original advertising artwork.

## Animations and Interactions
- Use lightweight CSS animations and transitions.
- Prefer transform and opacity animations.
- Respect prefers-reduced-motion.
- Avoid excessive motion and heavy animation libraries.
- Ensure interactions work on mobile and desktop.

## Code Quality
- Keep content separate from presentation.
- Create small reusable Astro components.
- Use semantic HTML and accessible interactions.
- Optimize local images using astro:assets.
- Avoid unnecessary dependencies.
- Do not modify unrelated files.
- Ask before making assumptions about ambiguous requirements.

## SEO and Performance
- Use server-generated HTML.
- Add appropriate metadata and Open Graph tags.
- Include sitemap.xml and robots.txt.
- Optimize images and loading behavior.
- Maintain good Core Web Vitals.

## Project Workflow
- Work in small, clearly defined stages.
- Inspect existing files before modifying them.
- Explain planned changes before large modifications.
- Verify the build after each major stage.
- Report modified files and any remaining issues.
