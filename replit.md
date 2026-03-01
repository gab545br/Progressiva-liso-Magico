# Replit.md

## Overview

This is a high-converting sales landing page for a Brazilian hair straightening product called **"Progressiva Liso Mágico"**. The application is a single-page sales funnel built with React on the frontend and Express on the backend. All page content is in Brazilian Portuguese (PT-BR). The page emphasizes cash-on-delivery payment ("Pagamento na Entrega"), features before/after photos, product offer tiers with external checkout links, testimonials, and a lead capture system backed by a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently only two routes: `/` (LandingPage) and a 404 catch-all
- **Styling**: Tailwind CSS with a custom gold/black/rose color palette. Uses CSS variables for theming. Fonts are Inter (body) and Playfair Display (headings) loaded via Google Fonts
- **UI Components**: shadcn/ui (new-york style) installed with extensive Radix UI primitives. Custom components include `Button`, `OfferCard`, and `SectionHeader` with Framer Motion animations
- **State Management**: TanStack React Query for server state. No global client state library — local state via React hooks
- **Animations**: Framer Motion for scroll-triggered animations, hover effects, and transitions
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (via tsx)
- **API Pattern**: REST API with routes defined in `server/routes.ts`. Route contracts (method, path, input/output schemas) are defined in `shared/routes.ts` using Zod, making them shared between client and server
- **Development**: Vite dev server is used as middleware in development mode (HMR via `server/vite.ts`). In production, the built static files are served from `dist/public`
- **Build**: Custom build script (`script/build.ts`) uses Vite for client and esbuild for server, outputting to `dist/`

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single `leads` table with `id`, `email`, `name`, and `createdAt` fields (defined in `shared/schema.ts`)
- **Migrations**: Managed via `drizzle-kit push` command (`npm run db:push`)
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing an `IStorage` interface, allowing for easy swapping of storage implementations

### API Endpoints
- `POST /api/leads` — Creates a new lead with email and optional name. Validates input with Zod. Returns 201 on success, 400 on validation error.

### Key Design Decisions
1. **Shared route contracts**: The `shared/routes.ts` file defines API routes with their Zod schemas, used by both server (validation) and client (type-safe fetching). This prevents drift between frontend and backend.
2. **No authentication**: This is a public-facing sales page with no user accounts. The only data flow is lead capture.
3. **External checkout (Affiliate model)**: Purchase buttons link to external checkout URLs on `entrega.logzz.com.br` — affiliate checkout, no payment processing handled in this app.
4. **No WhatsApp integration**: Per explicit requirements, all WhatsApp references have been removed from the page.
5. **Mobile-first design**: The page is designed for mobile conversion with responsive layouts and touch-friendly interactions.

## External Dependencies

- **PostgreSQL**: Required database. Connection string must be provided via `DATABASE_URL` environment variable
- **Google Fonts**: Inter and Playfair Display fonts loaded from Google's CDN
- **Logzz Checkout (Affiliate)**: External checkout links for three product tiers:
  - 1 unit (R$ 149,00): `https://entrega.logzz.com.br/pay/mem60mkm8/progressivalisomagico`
  - 3 units (R$ 397,00): `https://entrega.logzz.com.br/pay/mem60mkm8/liso3unidades`
  - 2 units (R$ 297,00): `https://entrega.logzz.com.br/pay/mem60mkm8/liso2unidades`
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` used in development on Replit
- **No external auth providers, no payment processing, no email service** integrated directly into the app