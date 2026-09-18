# Sneha Manandhar - Portfolio

A personal developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Editing content

Almost everything on the page - skills, projects, achievements, education, and contact
links - is driven by a single typed data file:

```
lib/data.ts
```

Edit the arrays there and the page updates automatically; you shouldn't need to touch the
component files (in `components/`) for normal content changes.

## Deploying

The easiest option is [Vercel](https://vercel.com/new):

1. Push this project to a GitHub repository.
2. Import the repo on Vercel.
3. Deploy - no extra configuration needed.

You can also run `npm run build && npm run start` to build and serve it yourself.
