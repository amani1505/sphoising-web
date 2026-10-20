# CLAUDE.md

Project guide for Claude Code. Read this file fully before writing, editing, or deleting anything in this repository.

## 1. Project Context

- **Framework:** Next.js 16+ (App Router only, no Pages Router)
- **Language:** TypeScript (strict mode)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui
- **Validation:** Zod
- **Forms:** React Hook Form + Zod resolver
- **Client data fetching:** TanStack Query (only when client-side fetching is truly needed)
- **Bundler:** Turbopack (default)
- **Package manager:** pnpm

Update this section when the stack changes. If anything here contradicts the code, ask before assuming.

## 2. Workflow Rules (Read First)

1. **Do not execute immediately.** For any non-trivial task, first review the request, restate it, and look for gaps or conflicts.
2. **95% confidence threshold.** Do not write code until you are at least 95% confident in the expected outcome. If you are below that:
   - Ask precise, numbered clarifying questions.
   - Present a short execution plan: files to create, files to change, and why.
   - Wait for confirmation before proceeding.
3. **Never commit.** Never run `git commit`, `git push`, `git merge`, `git rebase`, or `git stash` on behalf of the user. Leave all changes uncommitted for review.
4. **No generic templates.** Never default to a boilerplate answer. Every design, pattern, and architecture decision must be deliberate, justified, and consistent with this file.
5. **Explain trade-offs.** When there is more than one reasonable approach, state the options and the reason for the choice.
6. **Stay in scope.** Do not refactor, rename, or reformat code outside the task unless asked.

## 3. Folder Structure

Feature-first architecture. Routing lives in `app/`, business logic lives in `features/`, shared primitives live in `components/` and `lib/`.

```
.
├── public/                     # Static assets (images, fonts, icons)
├── src/
│   ├── app/                    # Routing only: pages, layouts, route handlers
│   │   ├── (marketing)/        # Route group: public pages
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── (auth)/             # Route group: login, register
│   │   │   ├── login/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/        # Route group: authenticated app
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── error.tsx
│   │   │   └── layout.tsx
│   │   ├── api/                # Route handlers (webhooks, external consumers only)
│   │   │   └── webhooks/route.ts
│   │   ├── layout.tsx          # Root layout
│   │   ├── not-found.tsx
│   │   ├── global-error.tsx
│   │   └── globals.css         # Tailwind import, theme tokens, fluid tokens
│   │
│   ├── features/               # One folder per business domain
│   │   └── users/
│   │       ├── components/     # Feature-specific UI
│   │       │   ├── user-table.tsx
│   │       │   └── user-form.tsx
│   │       ├── hooks/          # Client hooks (use-user-filters.ts)
│   │       ├── actions/        # Server Actions ("use server")
│   │       │   └── update-user.action.ts
│   │       ├── server/         # Server-only data access ("server-only")
│   │       │   ├── user.queries.ts
│   │       │   └── user.repository.ts
│   │       ├── schemas/        # Zod schemas (shared by client and server)
│   │       │   └── user.schema.ts
│   │       ├── types/          # Feature types
│   │       │   └── user.types.ts
│   │       ├── utils/          # Pure helpers for this feature
│   │       ├── constants.ts
│   │       ├── index.ts        # Client-safe public API
│   │       └── server.ts       # Server-only public API
│   │
│   ├── components/
│   │   ├── ui/                 # shadcn/ui primitives (button, input, dialog)
│   │   ├── layout/             # Header, sidebar, footer, container
│   │   ├── shared/             # Cross-feature composites (data-table, empty-state)
│   │   └── providers/          # Context providers (theme, query client)
│   │
│   ├── lib/                    # Framework-agnostic utilities
│   │   ├── api/                # HTTP client for external APIs
│   │   │   └── http-client.ts
│   │   ├── utils.ts            # cn() and small helpers
│   │   └── formatters.ts
│   │
│   ├── server/                 # App-wide server infrastructure
│   │   ├── db/                 # Database client
│   │   ├── auth/               # Session and auth helpers
│   │   └── errors.ts           # Typed server errors
│   │
│   ├── config/
│   │   ├── env.ts              # Validated environment variables
│   │   ├── site.ts             # Site metadata
│   │   └── routes.ts           # Route path constants
│   │
│   ├── hooks/                  # Global client hooks (use-media-query.ts)
│   ├── types/                  # Global types and module augmentations
│   └── proxy.ts                # Request interception (formerly middleware.ts)
│
├── tests/
│   ├── e2e/                    # Playwright
│   └── setup.ts
├── .env.example
├── next.config.ts
├── tsconfig.json
└── CLAUDE.md
```

### Placement rules

| What | Where |
| --- | --- |
| A new page or route | `src/app/` (keep `page.tsx` thin, compose from features) |
| Logic tied to one domain | `src/features/<feature>/` |
| A UI primitive used everywhere | `src/components/ui/` |
| A composite used by 2+ features | `src/components/shared/` |
| Database or secret-bearing code | `src/features/<feature>/server/` or `src/server/` |
| A pure helper with no domain meaning | `src/lib/` |

A feature must never import from another feature's internal folders. Import only from its `index.ts` or `server.ts`. If two features need the same thing, move it to `components/shared/` or `lib/`.

## 4. Universal Rules

1. **Max 400 lines per file.** If a file passes 400 lines, refactor by extracting logic into separate files.
2. **Single Responsibility.** Every file, function, and component does one thing.
3. **No business logic in UI components.** Components render UI. Logic lives in hooks, actions, and server modules.
4. **No direct network calls from UI components.** Never call `fetch` inside a component. Server Components call functions from `features/<feature>/server/`. Client Components use Server Actions or hooks that wrap the API layer.
5. **Type safety everywhere.** `strict: true`. No `any`. Use `unknown` and narrow it. Infer types from Zod schemas with `z.infer`.
6. **Environment variables.** Never hardcode URLs, secrets, or keys. Read them only through `src/config/env.ts`, which validates them with Zod at startup. Only variables prefixed with `NEXT_PUBLIC_` may reach the client.
7. **Barrel exports.** Each feature has an `index.ts` for client-safe exports and a `server.ts` for server-only exports. Never mix the two, and never re-export `server-only` code from `index.ts`.
8. **Consistent imports.** Use the `@/` alias (`@/features/users`). Never use deep relative paths like `../../../`.

## 5. SOLID in Next.js

- **S (Single Responsibility):** A page composes, a component renders, a hook manages client state, an action mutates, a repository talks to the database.
- **O (Open/Closed):** Extend components through props, variants (`cva`), and composition (`children`, slots). Do not edit a shared primitive to serve one feature.
- **L (Liskov Substitution):** Wrapper components accept and forward the native props of the element they wrap (`React.ComponentProps<"button">`).
- **I (Interface Segregation):** Props interfaces stay small and specific. Split a component when its props interface grows large.
- **D (Dependency Inversion):** Server modules depend on interfaces (repositories), not on a concrete database client. UI depends on actions and queries, never on the data source.

## 6. Next.js Conventions

### Server and Client Components

- Every component is a Server Component by default.
- Add `"use client"` only when the component needs state, effects, event handlers, or browser APIs.
- Push `"use client"` as far down the tree as possible. Wrap only the interactive leaf.
- Add `import "server-only"` at the top of every file in a `server/` folder.

### Data fetching

- Fetch in Server Components through feature query functions.
- Run independent requests in parallel with `Promise.all`.
- Use `<Suspense>` with a skeleton for slow data. Every route segment with async data has a `loading.tsx`.
- Use `"use cache"` with `cacheLife` and `cacheTag` for cacheable data. Invalidate with `revalidateTag` after mutations.

### Mutations

- Use Server Actions in `features/<feature>/actions/`.
- Every action validates input with Zod, checks auth, and returns a typed result:

```ts
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };
```

- Never throw raw errors to the client. Never return stack traces or database messages.

### Routing

- `page.tsx` files stay under 50 lines and only compose feature components.
- `params` and `searchParams` are async. Always `await` them.
- Every route group that can fail has an `error.tsx`.
- Export `metadata` or `generateMetadata` from every public page.

### Route handlers

Use `app/api/` only for webhooks, third-party callbacks, or endpoints consumed outside this app. Internal data flows use Server Components and Server Actions.

## 7. Responsive Design (Critical Rule)

Every component Claude generates **must be fully responsive and work on all devices**, from 320px phones to ultrawide monitors. This is non-negotiable.

- All styles are written **mobile-first**.
- Responsiveness is **fluid**. No layout jumps between breakpoints.
- Test mentally at 320px, 768px, 1024px, 1440px, and 2560px before finishing.

### Mobile-first principle

Base classes target the smallest screen. Add complexity with `min-width` breakpoints only. Never use `max-*` variants to undo desktop styles.

```tsx
// Correct: mobile first, then enhance
<div className="grid grid-cols-1 gap-fluid-md sm:grid-cols-2 lg:grid-cols-3">

// Wrong: desktop first, then override
<div className="grid grid-cols-3 max-md:grid-cols-1">
```

Plain CSS follows the same rule:

```css
.card {
  padding: var(--spacing-fluid-sm);
}

@media (min-width: 48rem) {
  .card {
    padding: var(--spacing-fluid-lg);
  }
}
```

### Fluid design tokens

Every project includes these tokens in `src/app/globals.css`. They scale smoothly from a 320px to a 1440px viewport using `clamp()`.

```css
@import "tailwindcss";

@theme {
  /* Fluid type scale */
  --text-fluid-xs: clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);
  --text-fluid-sm: clamp(0.875rem, 0.83rem + 0.22vw, 1rem);
  --text-fluid-base: clamp(1rem, 0.95rem + 0.27vw, 1.125rem);
  --text-fluid-lg: clamp(1.125rem, 1.04rem + 0.45vw, 1.375rem);
  --text-fluid-xl: clamp(1.25rem, 1.11rem + 0.71vw, 1.75rem);
  --text-fluid-2xl: clamp(1.5rem, 1.27rem + 1.16vw, 2.25rem);
  --text-fluid-3xl: clamp(1.875rem, 1.5rem + 1.88vw, 3rem);
  --text-fluid-4xl: clamp(2.25rem, 1.66rem + 2.95vw, 4rem);

  /* Fluid spacing */
  --spacing-fluid-xs: clamp(0.25rem, 0.21rem + 0.18vw, 0.375rem);
  --spacing-fluid-sm: clamp(0.5rem, 0.43rem + 0.36vw, 0.75rem);
  --spacing-fluid-md: clamp(1rem, 0.86rem + 0.71vw, 1.5rem);
  --spacing-fluid-lg: clamp(1.5rem, 1.21rem + 1.43vw, 2.5rem);
  --spacing-fluid-xl: clamp(2rem, 1.43rem + 2.86vw, 4rem);
  --spacing-fluid-2xl: clamp(3rem, 2.14rem + 4.29vw, 6rem);
}

:root {
  /* Layout */
  --container-max: 90rem;
  --gutter: clamp(1rem, 0.71rem + 1.43vw, 2rem);
}
```

Usage: `text-fluid-lg`, `p-fluid-md`, `gap-fluid-sm`, `py-fluid-xl`.

### Responsive checklist

- Use the fluid tokens for type and spacing instead of stacking breakpoint overrides.
- Use `min-h-dvh` instead of `h-screen` for full-height layouts.
- Images use `next/image` with a correct `sizes` attribute.
- Tap targets are at least 44 x 44px.
- No horizontal scroll at 320px. Long text uses `break-words` or `truncate`.
- Tables become cards or scroll inside a wrapper on small screens.
- Prefer container queries (`@container`, `@md:`) for components reused in different widths.
- Respect `prefers-reduced-motion` for animations.

## 8. Naming Conventions

| Item | Convention | Example |
| --- | --- | --- |
| Files and folders | kebab-case | `user-table.tsx` |
| Components | PascalCase | `UserTable` |
| Hooks | camelCase with `use` | `useUserFilters` |
| Server Actions | camelCase with `Action` | `updateUserAction` |
| Zod schemas | camelCase with `Schema` | `createUserSchema` |
| Types | PascalCase | `CreateUserInput` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_UPLOAD_SIZE` |

File suffixes: `.action.ts`, `.queries.ts`, `.repository.ts`, `.schema.ts`, `.types.ts`, `.test.ts`.

## 9. Styling Rules

- Tailwind utilities only. No inline `style` except for dynamic values.
- Merge classes with `cn()` from `@/lib/utils`.
- Variants use `class-variance-authority`.
- Colors come from theme tokens. No raw hex values in components.
- Support dark mode through tokens, not per-component overrides.

## 10. Accessibility

- Use semantic HTML first (`button`, `nav`, `main`, `section`).
- Every interactive element is keyboard reachable with a visible focus state.
- Every input has a label. Every image has meaningful `alt` text (or `alt=""` if decorative).
- Color contrast meets WCAG 2.2 AA.

## 11. Error Handling and Security

- Validate every external input with Zod: form data, params, search params, and API responses.
- Check authorization inside every Server Action and server query. Never trust the client or rely on `proxy.ts` alone.
- Never expose secrets, tokens, or internal IDs in client bundles.
- Log errors on the server. Show users a safe, friendly message.

## 12. Testing

- Unit tests (Vitest) for utils, schemas, and server logic.
- Component tests (Testing Library) for interactive components.
- E2E tests (Playwright) for critical user flows, run at mobile and desktop viewports.
- Tests live next to the file they test, except E2E tests in `tests/e2e/`.

## 13. Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Lint
pnpm typecheck    # tsc --noEmit
pnpm test         # Unit and component tests
pnpm test:e2e     # Playwright
```

Run `pnpm typecheck` and `pnpm lint` after every change. Report any failures instead of hiding them.

## 14. Definition of Done

A task is complete only when:

- [ ] It follows the folder structure and placement rules
- [ ] No file passes 400 lines
- [ ] Every component is responsive, mobile-first, and fluid
- [ ] Types are strict with no `any`
- [ ] Inputs are validated with Zod
- [ ] Typecheck and lint pass
- [ ] Nothing has been committed