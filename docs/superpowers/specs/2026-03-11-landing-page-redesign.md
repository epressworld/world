# epress.world Landing Page Redesign Spec

## Overview

Redesign the epress.world official website to better communicate the project vision, drive GitHub stars, and convince technical users to deploy their own nodes.

**Core Principle**: Diagrams First. Every section must lead with a visual diagram; text serves as annotation.

## Design Decisions

### Visual Identity

| Element | Decision | Rationale |
|---------|----------|-----------|
| Primary Color | `#F7931A` (orange) | Keep existing brand identity |
| Background | `#0f0f0f` | Deep black, editorial feel |
| Accent | `#F7931A` for highlights, `#34D399` for success, `#ef4444` for danger | Semantic color usage |
| Fonts | **Playfair Display** (headings) + **IBM Plex Mono** (body) | Editorial + technical aesthetic |
| Diagram Style | Minimal line art, accent-colored paths | Linear.app-inspired clarity |

### Hero Network Animation

**Approach**: Hybrid (Static SVG + Canvas Particles)

1. Static SVG renders 8-12 nodes with connection lines
2. Canvas overlay adds subtle particle drift animation
3. Mouse hover highlights nearest node with "your node" tooltip
4. No central node - demonstrates decentralization visually

**Performance**: SVG loaded immediately (SEO-friendly), Canvas initialized on viewport entry via Intersection Observer.

## Homepage Structure (7 Sections)

### Section 1: Hero

**Visual (60% area)**: Decentralized network animation

**Content**:
```
Heading: "Your Digital Home. For Life."
Subheading: Not a platform account. A self-hosted node you own, inherit, and pass down — like property.
CTAs: [⭐ Star on GitHub] [Read the Vision →]
```

### Section 2: Era Context (AI Content Flood vs Proof of Source)

**Visual**: Two-column comparison cards

Left card (warning tone):
- Title: "AI Content Flood"
- Visual: Blurred text stream, indistinguishable sources
- Caption: "Is this human or AI? No way to know."

Right card (positive tone):
- Title: "Proof of Source"
- Visual: Verified metadata display (address, timestamp, hash, signature)
- Caption: "Cryptographically proven."

### Section 3: AI Agent Era

**Visual**: Two-column flow comparison

Left (Today):
```
Your AI Agent → Centralized Platform → ❌ Pay/Rate limited/Blocked → Agent cannot work
```

Right (epress):
```
Your AI Agent → epress Network → ✓ Open RSS/API/No limits → Agent operates freely
```

**Style**: Left column uses muted/danger tones, right uses accent/success tones. VS divider in center.

### Section 4: Lifetime Journey (Emotional Core)

**Visual**: Horizontal timeline with icons

```
👶 Birth → 📖 Growing Up → 🔑 Handover → 🏛️ Legacy
   │            │              │             │
Parents      Memories       Private key   Children
deploy       recorded       yours         inherit
your node    on YOUR node   forever       your node
```

**Animation**: Timeline nodes have subtle pulse. Hover expands details.

**Heading**: "One node. One lifetime. A new kind of digital inheritance."

### Section 5: Three Technical Cards

Each card contains embedded mini-diagram:

**Card 1 - Proof of Source**:
```
content → SHA-256 → hash
                      \
address ───────────── SoS → sign → PoS ✓
                      /
timestamp ───────────
```

**Card 2 - Open Protocol**:
```
Node A ←── EWP ──→ Node B
   ↑                  ↑
   └──── Node C ──────┘
No auth. No payment. Just protocol.
```

**Card 3 - Self-Hosted**:
```
$ docker run epress
  ████████████ 100%
✓ Your machine ✓ Your data ✓ Your rules
```

### Section 6: vs Existing Solutions

**Visual**: Comparison table with colored cells

| Feature | Traditional | epress |
|---------|-------------|--------|
| Data ownership | ✗ Platform owns | ✓ You own |
| Identity | ✗ Platform account | ✓ Ethereum address |
| API access | △ Rate limited | ✓ Open & unlimited |
| AI Agent compatible | ✗ Blocked | ✓ Native support |
| Self-hosted | ✗ No | ✓ Yes |

**Interaction**: Hover on column highlights entire column. epress column has accent border.

### Section 7: Call to Action

**Visual**: Growing network animation or star count

**Content**:
```
Heading: "The direction is right. Help us build it."
Primary CTA: [⭐ Star on GitHub]
Secondary links: Read Whitepaper · How It Works · Deploy a Node
```

## Component Specifications

### NetworkDiagram Component

**Props**: None (self-contained animation)

**Implementation**:
1. `NetworkDiagramSvg.jsx` - Static SVG structure with nodes and connections
2. `NetworkDiagramCanvas.jsx` - Client-side Canvas overlay for particle animation
3. Parent component composites both with absolute positioning

**Node positions**: Pre-calculated for consistent layout across SSR/CSR

### ComparisonCard Component

**Props**:
- `variant`: "warning" | "success"
- `title`: string
- `children`: ReactNode (diagram content)
- `caption`: string

**Styling**: Border color and background gradient based on variant

### Timeline Component

**Props**:
- `items`: Array<{icon, title, description, details}>

**Animation**: CSS keyframes for pulse effect, hover state expands details panel

### TechCard Component

**Props**:
- `title`: string
- `diagram`: ReactNode
- `points`: string[]

**Layout**: Diagram takes 60% width on desktop, stacks on mobile

### ComparisonTable Component

**Props**:
- `features`: Array<{name, traditional, epress}>
- `valueType`: "boolean" | "string"

**Styling**: 
- ✓ → green fill
- ✗ → red fill
- △ → gray fill

## Animation Guidelines

### Scroll Reveal

- Use Intersection Observer
- Threshold: 0.2
- Animation: fade-up with 0.5s ease-out
- Stagger delay: 0.1s per child element

### Hover States

- Node highlight: scale(1.1) + glow shadow
- Button: background opacity increase
- Card: border color transition

### Timing

- All animations < 600ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Respect `prefers-reduced-motion`

## Responsive Behavior

### Mobile (< 768px)

- Hero: Stack network diagram above text
- Comparison cards: Stack vertically
- Timeline: Horizontal scroll with snap points
- Tech cards: Full width, stack diagram above text
- Comparison table: Horizontal scroll or transform to card list

### Tablet (768px - 1024px)

- Two-column layouts where applicable
- Reduced padding/margins

### Desktop (> 1024px)

- Full layouts as specified

## File Structure

```
src/
├── app/
│   ├── page.jsx              # Homepage (redesigned)
│   ├── vision/page.jsx       # Vision page (Phase 2)
│   ├── how-it-works/page.jsx # How it works page (Phase 1)
│   └── whitepaper/page.jsx   # Existing, minor polish
├── components/
│   ├── home/
│   │   ├── hero-network.jsx       # Hero section network animation
│   │   ├── era-comparison.jsx     # AI content flood vs PoS
│   │   ├── agent-era.jsx          # AI Agent era comparison
│   │   ├── lifetime-timeline.jsx  # Lifetime journey timeline
│   │   ├── tech-cards.jsx         # Three technical cards
│   │   ├── solution-comparison.jsx # vs existing solutions
│   │   └── cta-section.jsx        # Call to action
│   └── shared/
│       ├── comparison-card.jsx    # Reusable comparison card
│       ├── timeline.jsx           # Horizontal timeline
│       └── mini-diagram.jsx       # Embedded diagram wrapper
└── lib/
    └── animations.js         # Animation utilities
```

## Implementation Phases

### Phase 1 (Current Focus)

1. Update fonts in `layout.js`
2. Create Hero section with network animation
3. Create Era Comparison section
4. Create AI Agent Era section
5. Create Lifetime Timeline section
6. Create Tech Cards section
7. Create Solution Comparison section
8. Create CTA section
9. Update navigation and footer

### Phase 2 (After Homepage)

1. Create `/how-it-works` page with technical details
2. Update `/whitepaper` page for better reading experience
3. Create `/vision` page

## Success Criteria

1. First Contentful Paint < 1.5s
2. Lighthouse Performance > 90
3. All diagrams render correctly on mobile
4. Smooth animations at 60fps
5. Accessible (WCAG 2.1 AA)

## Out of Scope

- Blog system redesign
- Documentation system changes
- Backend changes
- Authentication features
