# epress world

Official website and documentation hub for the epress ecosystem.

- Website: [https://epress.world](https://epress.world)
- Whitepaper page: [https://epress.world/whitepaper](https://epress.world/whitepaper)
- epress node repository: [https://github.com/epressworld/epress](https://github.com/epressworld/epress)
- world repository: [https://github.com/epressworld/world](https://github.com/epressworld/world)

## Canonical terminology

Use these terms consistently across pages and docs:

- `epress world`: the decentralized social network
- `epress world protocol`: the interoperability protocol (EWP)
- `epress node`: the node software implementation

## What this repository contains

- Landing page and narrative for epress world
- Whitepaper rendering page with TOC
- Two-lane docs:
  - Node Operator Docs
  - Developer Docs
    - epress world protocol track
    - epress node developer track
- Developer docs snapshot pipeline synced from `../epress`

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Static JSON content snapshots for developer references

## Quick start (5 minutes)

### 1. Prerequisites

- Node.js 22+
- npm 10+

### 2. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Production build check

```bash
npm run build
```

## Repository map

```text
src/app/
  page.jsx                         # Landing page
  whitepaper/page.jsx              # Whitepaper renderer
  docs/                            # Docs routes
    page.jsx                       # Node Operator overview
    developer/                     # Developer docs entry
    developer/ewp/                 # epress world protocol docs
    developer/node/                # epress node developer docs

src/components/
  docs-*                           # Docs navigation UI
  whitepaper-renderer.jsx          # Markdown + math + diagram rendering
  developer/                       # Reusable developer-doc components

src/content/developer/             # Generated documentation snapshots
scripts/sync-epress-docs.mjs       # Snapshot generator from ../epress
WHITEPAPER.md                      # Whitepaper source in this repo
public/WHITEPAPER.md               # Public static whitepaper source
```

## Update developer docs from epress node implementation

Developer API and protocol reference pages are snapshot-driven.

### Requirement

This repo expects the sibling path below to exist:

```text
../epress
```

Resolved absolute path in local setup:

```text
/Users/garbin/Documents/projects/epressworld/epress
```

### Sync command

```bash
npm run docs:sync:epress
```

### What it generates

Under `src/content/developer/`, including:

- `ewp-endpoints.json`
- `node-rest-endpoints.json`
- `graphql-operations.json`
- `graphql-operation-details.json`
- `protocol-mapping.json`
- `eip712-types.json`
- `eip712-verification.json`
- `eip712-errors.json`

After sync, always run:

```bash
npm run build
```

## Contribution workflow (human collaborators)

1. Read [`CONTRIBUTING.md`](./CONTRIBUTING.md)
2. Align work with an issue
3. Create a branch from `main`
4. Implement changes
5. Run `npm run build`
6. Open PR to `main`

## Contribution workflow (AI collaborators)

1. Read [`AGENTS.md`](./AGENTS.md) and [`CONTRIBUTING.md`](./CONTRIBUTING.md) first
2. Keep docs and user-facing text in English by default
3. Use canonical terminology exactly (`epress world`, `epress world protocol`, `epress node`)
4. Prefer updating source logic rather than patching generated JSON by hand
5. If developer docs depend on implementation state, run `npm run docs:sync:epress`
6. Run `npm run build` before finalizing changes

## Content editing guide

- Landing page: `src/app/page.jsx`
- Whitepaper page: `src/app/whitepaper/page.jsx`
- Node Operator Docs: `src/app/docs/*`
- Developer Docs:
  - Protocol: `src/app/docs/developer/ewp/*`
  - Node: `src/app/docs/developer/node/*`

## Deployment

- Production is deployed on Vercel and aliased to `epress.world`
- Main branch is the production branch

Manual deployment command:

```bash
npx vercel --prod
```

## First tasks for a new collaborator

1. Run local project and verify `/`, `/docs`, `/docs/developer`, `/whitepaper`
2. Read docs navigation structure in `src/app/docs/config.js`
3. Pick one page and improve clarity or visuals
4. Run build and open a PR
