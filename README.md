# Portfolio

Personal portfolio of Roope Salonen - live at [roopesalonen.fi](https://roopesalonen.fi).

A single-page site: an intro header, a skills list, and a staggered
grid of project cards, each linking out to a live demo and/or its source
repository.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [react-icons](https://react-icons.github.io/react-icons/) for skill/brand
  icons, plus a few hand-rolled SVGs in [`src/components/icons.tsx`](src/components/icons.tsx)

## Project structure

```
src/
  data/
    profile.ts      name, title, description, avatar, social links
    projects.ts     project cards: title, description, image, links, tags
    skills.ts       skills grouped into three tiers
  components/       one component per page section (Intro, Skills,
                    ProjectCard, Footer, Toast) plus shared icons.tsx
  hooks/
    useCopyEmail.ts  copies a mailto: link's address to the clipboard and
                     shows a toast
  index.css          design tokens (colors, fonts) as CSS variables
```

All page content - intro, projects, skills - lives in `src/data/`. Editing the
site day to day means editing those three files, not the components.

### Adding a project

Add an entry to the `projects` array in [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  title: 'Project name',
  description: 'Small description on what it does and how it was built.',
  image: '/project-screenshot.webp', // put the file in public/
  href: 'https://example.com',       // optional — live demo, shows "View project"
  repo: 'https://github.com/...',    // optional — shows "Source code"
  tags: ['TypeScript', 'React'],
}
```

Screenshots should be roughly 16:9 so they aren't
cropped by the card. Project cards render in the order listed and alternate
which side the screenshot sits on.

### Design tokens

Colors, not layout, are centralized in [`src/index.css`](src/index.css) as
CSS custom properties (`--page-bg`, `--text`, `--heading`, `--accent`,
`--border`, `--card-bg`, `--chip-bg`, …). Components reference them via
Tailwind's arbitrary-value syntax, e.g. `text-[var(--heading)]`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build     # type-checks, then outputs static files to dist/
npm run preview   # serve the built dist/ locally
```
