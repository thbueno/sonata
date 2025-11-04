# Project Structure

## Directory Organization

```
sonata/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout with font configuration
│   │   ├── globals.css   # Global styles and Tailwind directives
│   │   └── favicon.ico
│   └── Components /      # React components (note: has trailing space)
│       └── bg-gradient.tsx
├── public/               # Static assets
│   ├── fonts/           # Local font files (SF Pro)
│   ├── images/          # Product and profile images
│   └── svgs/            # Icon assets
└── [config files]       # Root-level configuration
```

## Conventions

### File Naming

- React components: PascalCase with .tsx extension
- Pages: lowercase with .tsx extension (Next.js convention)
- Styles: lowercase with .css extension

### Import Paths

- Use `@/*` alias for imports from src directory
- Example: `import Component from "@/Components/component"`

### Component Structure

- Functional components with TypeScript
- Default exports for page components
- Named exports acceptable for utility components

### Styling Approach

- Tailwind utility classes for styling
- CSS variables for theming (defined in globals.css)
- Dark mode via `dark:` prefix classes

### Assets

- Images stored in `/public/images/`
- SVG icons in `/public/svgs/`
- Fonts in `/public/fonts/`
- Use Next.js Image component for optimization

## Known Issues

- `src/Components /` folder has trailing space in name (should be fixed to `src/Components`)
- `bg-gradient.tsx` uses `class` instead of `className` (React convention)
- `bg-gradient.tsx` uses deprecated `frameborder` attribute (should be `frameBorder`)
