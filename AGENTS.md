# Epress World Development Guide

This document provides project development standards and guidelines for AI agents.

## Project Overview

"epress" is a decentralized Web3 blog and social network built on the Ethereum ecosystem. The goal is to create a truly decentralized content and social network where users have full control over their data and identity. The project is the official website of epress project.

This is a Next.js 16 application using React 19, JavaScript/JSX, and Tailwind CSS.

## Build, Lint, and Development Commands

### Development
```bash
npm run dev          # Start development server
```

### Build
```bash
npm run build        # Production build
npm start            # Start production server
```

### Linting
```bash
npm run lint         # Run Biome check
npm run lint:fix     # Run Biome check with auto-fix
```

### Notes
- This project uses Biome for linting and formatting
- Run `npm run lint:fix` before committing to fix code style issues
- There is no `lint:fix` script - manually fix lint errors or configure your editor

## Comment Guidelines

- Do not add any comments unless explicitly requested by user
- Code should be self-explanatory

## Code Style Guidelines

### General
- Use JavaScript/JSX (not TypeScript) for this project
- Use functional components with arrow functions or function declarations
- Prefer default exports for page components, named exports for utilities

### Naming Conventions
- **Components**: PascalCase (e.g., `ConceptCards`, `ThemeProvider`)
- **Files**: kebab-case for components (e.g., `concept-cards.jsx`), PascalCase for pages
- **Variables/functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE

### Imports
- Use path aliases: `@/*` maps to `./src/*`
- Group imports: React/Next imports first, then third-party, then local
- Example:
  ```javascript
  import { useState } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { Github } from "lucide-react";
  import { ThemeProvider } from "@/components/theme-provider";
  import { cn } from "@/lib/utils";
  ```

### Components
- Use `"use client"` directive for client-side components
- Destructure props in function parameters when simple
- Keep components focused and small
- Use Tailwind CSS classes for styling (follow existing patterns)

### Conditionals
- Use ternary operators for simple conditions
- Use && for inline conditionals (truthy renders)
- Avoid unnecessary ternaries

### Event Handlers
- Use arrow functions or bind in callbacks
- Handle common events: onClick, onChange, onSubmit

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages
- Use console.error for debugging (avoid in production)

### Tailwind CSS
- Use existing color tokens: `bg-dark-bg`, `text-dark-text`, `border-dark-border`, etc.
- Use semantic classes: `btn-primary`, `btn-secondary`, `btn-ghost`
- Use container-custom for page containers

### Accessibility
- Include alt text for images
- Use semantic HTML elements (header, main, footer, nav, article, section)
- Add rel="noopener noreferrer" for external links

## Issue and PR Workflow

### Issue Creation Workflow

When asked to create an Issue:
1. Determine Issue type (bug / improvement / feature) based on the Chinese description
2. Read the corresponding template from `.github/ISSUE_TEMPLATE/` directory
3. Organize the English title and content according to the template
4. **Confirm the Issue title and content with the user before creation**
5. After confirmation, use GitHub MCP's issue write tool to create the Issue on GitHub

### Before Working on an Issue

When asked to work on an Issue together:
1. **Read `CONTRIBUTING.md`** to understand the workflow and branch naming conventions
2. Create the corresponding branch based on the Issue information
3. **Do NOT make any code changes** - code changes will be made by the user manually
4. After the user confirms code changes are complete, proceed with the remaining workflow (commit, PR creation, etc.)

## Language Guidelines

- This is a globalized project, all documentation, comments, and Issues must use English by default unless there are special circumstances

## Commit Guidelines

- **Do not** use any markdown syntax in commit messages
- **Must** get user confirmation for commit message before committing
- Commit messages should describe changes in detail
- Review `git diff` to understand specific changes
- If creating an Improvement type Issue, determine if it is a good first issue; if not, remove the `good first issue` label from the labels

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── docs/         # Documentation pages
│   ├── whitepaper/   # Whitepaper page
│   ├── layout.js     # Root layout
│   └── page.jsx      # Home page
├── components/       # React components
│   ├── svgs.jsx      # SVG components
│   └── ...
├── lib/              # Utilities
│   └── utils.js      # cn() utility for Tailwind
└── content/          # Static content
```

## Key Dependencies

- Next.js 16 with App Router
- React 19
- Tailwind CSS 3
- next-themes (dark mode)
- lucide-react (icons)
- react-markdown (markdown rendering)
- clsx + tailwind-merge (className utility)
