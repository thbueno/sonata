# Technology Stack

## Core Framework
- **Next.js 16.0.1** (App Router)
- **React 19.2.0** with React DOM 19.2.0
- **TypeScript 5** with strict mode enabled

## Styling
- **Tailwind CSS v4** with PostCSS
- Custom fonts: Geist, Geist Mono, Petrona (Google Fonts), SF Pro (local)
- Dark mode support built-in

## Package Manager
- **pnpm** (evidenced by pnpm-lock.yaml)

## Build Configuration
- TypeScript target: ES2017
- Module resolution: bundler
- Path alias: `@/*` maps to `./src/*`
- JSX runtime: react-jsx (automatic)

## Common Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start
```

## Key Features
- Server-side rendering with App Router
- Image optimization via next/image
- Font optimization via next/font
- TypeScript strict mode
- Incremental compilation
