export const nodeOperatorDocsNav = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/setup", label: "First-Time Setup" },
  { href: "/docs/usage", label: "Usage Guide" },
  { href: "/docs/faq", label: "FAQ" },
]

export const ewpDocsNavGroups = [
  {
    label: "Protocol Fundamentals",
    items: [
      { href: "/docs/developer/ewp", label: "Protocol Overview" },
      { href: "/docs/developer/ewp/quick-start", label: "Quick Start" },
      { href: "/docs/developer/ewp/architecture", label: "Architecture" },
      { href: "/docs/developer/ewp/flows", label: "Core Flows" },
      { href: "/docs/developer/ewp/reference", label: "API Reference" },
    ],
  },
  {
    label: "EIP-712 Signing Layer",
    items: [
      { href: "/docs/developer/ewp/eip712", label: "Signing Spec" },
      {
        href: "/docs/developer/ewp/eip712/typed-data-catalog",
        label: "Typed Data Catalog",
      },
      {
        href: "/docs/developer/ewp/eip712/verification-rules",
        label: "Verification Rules",
      },
      {
        href: "/docs/developer/ewp/eip712/security-model",
        label: "Security Model",
      },
    ],
  },
]

export const ewpDocsNav = ewpDocsNavGroups.flatMap((group) => group.items)

export const nodeDeveloperDocsNav = [
  { href: "/docs/developer/node", label: "Overview" },
  { href: "/docs/developer/node/setup", label: "Dev Setup" },
  { href: "/docs/developer/node/contributing", label: "Contributing" },
  { href: "/docs/developer/node/configuration", label: "Configuration" },
  { href: "/docs/developer/node/architecture", label: "Architecture" },
  {
    href: "/docs/developer/node/auth-permissions",
    label: "Auth and Permissions",
  },
  { href: "/docs/developer/node/api/graphql", label: "GraphQL API" },
  { href: "/docs/developer/node/api/rest", label: "REST API" },
]
