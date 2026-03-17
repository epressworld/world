"use client"

function ComplexityCurveSvg() {
  return (
    <svg
      viewBox="0 0 240 88"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="eco-curve-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <line
        x1="20"
        y1="20"
        x2="220"
        y2="20"
        strokeOpacity="0.06"
        strokeWidth="0.8"
      />
      <line
        x1="20"
        y1="44"
        x2="220"
        y2="44"
        strokeOpacity="0.06"
        strokeWidth="0.8"
      />
      <line
        x1="20"
        y1="68"
        x2="220"
        y2="68"
        strokeOpacity="0.06"
        strokeWidth="0.8"
      />

      <path
        d="M 28 72 C 60 68, 90 52, 130 38 C 160 28, 185 22, 216 18"
        stroke="url(#eco-curve-grad)"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="40" cy="71" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="130" cy="38" r="4" fill="currentColor" fillOpacity="0.55" />

      <circle
        cx="216"
        cy="18"
        r="9"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="none"
      />
      <circle cx="216" cy="18" r="5" fill="currentColor" fillOpacity="0.9" />

      <text
        x="40"
        y="83"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        compile from source
      </text>
      <text
        x="130"
        y="83"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        docker run
      </text>
      <text
        x="216"
        y="83"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.85"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        one click ✦
      </text>
    </svg>
  )
}

function BandwidthComparisonSvg() {
  return (
    <svg
      viewBox="0 0 260 90"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect
        x="30"
        y="28"
        width="48"
        height="34"
        rx="6"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.3"
      />
      <text
        x="54"
        y="48"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Platform
      </text>

      <line x1="82" y1="45" x2="100" y2="45" strokeOpacity="0.5" />
      <polygon
        points="82,45 88,42 88,48"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="none"
      />

      <text
        x="91"
        y="40"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.35"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        100%
      </text>

      <text
        x="54"
        y="78"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Centralized
      </text>

      <text
        x="130"
        y="50"
        fontSize="10"
        fontWeight="700"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        VS
      </text>

      <circle
        cx="206"
        cy="45"
        r="16"
        fill="currentColor"
        fillOpacity="0.1"
        strokeOpacity="0.5"
      />
      <text
        x="206"
        y="48"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.6"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Node
      </text>

      <circle
        cx="178"
        cy="26"
        r="9"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.35"
      />
      <text
        x="178"
        y="27"
        fontSize="6"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        CDN
      </text>

      <circle
        cx="232"
        cy="26"
        r="9"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.35"
      />
      <text
        x="232"
        y="27"
        fontSize="6"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Fans
      </text>

      <circle
        cx="206"
        cy="75"
        r="9"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.35"
      />
      <text
        x="206"
        y="76"
        fontSize="6"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Subs
      </text>

      <line
        x1="184"
        y1="31"
        x2="193"
        y2="38"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <line
        x1="225"
        y1="31"
        x2="218"
        y2="38"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <line
        x1="206"
        y1="62"
        x2="206"
        y2="66"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />

      <text
        x="206"
        y="90"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        epress
      </text>
    </svg>
  )
}

function DeveloperRolesList() {
  const roles = [
    { name: "Theme Designers", desc: "sell node skins & layouts" },
    { name: "Node Installers", desc: "on-site and remote setup" },
    { name: "Managed Hosting", desc: "for users who want it simple" },
    { name: "Plugin Builders", desc: "extend any node, permissionlessly" },
  ]

  return (
    <div className="space-y-0">
      {roles.map((role, index) => (
        <div
          key={role.name}
          className={`flex items-center gap-2.5 py-1.5 ${
            index < roles.length - 1 ? "border-b border-white/5" : ""
          }`}
        >
          <div
            className="w-2 h-2 rounded-sm flex-shrink-0"
            style={{ background: "rgba(232, 160, 74, 0.4)" }}
          />
          <span className="font-semibold text-xs text-white/75 whitespace-nowrap">
            {role.name}
          </span>
          <span className="text-xs text-white/30 flex-1">{role.desc}</span>
        </div>
      ))}
    </div>
  )
}

export function EcosystemPreview() {
  return (
    <section className="landing-section bg-dark-surface/40">
      <div className="container-custom">
        <p className="section-label text-center">THE ECOSYSTEM</p>
        <h2 className="landing-heading text-center mb-3">
          Built to Scale. Designed to be Owned.
        </h2>
        <p className="landing-subheading text-center mx-auto mb-12 max-w-xl">
          Self-hosting sounds technical. The ecosystem that grows around epress
          makes it simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="landing-card">
            <div className="bg-dark-surface/30 rounded-lg p-4 mb-4">
              <ComplexityCurveSvg />
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-2 mt-1"
              style={{ color: "rgba(248, 113, 113, 0.55)" }}
            >
              Common objection
            </p>
            <h3 className="font-semibold text-lg leading-snug mb-2">
              &ldquo;Neither was anyone who owns a router.&rdquo;
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              One-click deployment, managed hosting, and professional
              installation services emerge wherever there&apos;s demand. The
              ecosystem handles complexity — you just flip the switch.
            </p>
          </div>

          <div className="landing-card">
            <div className="bg-dark-surface/30 rounded-lg p-4 mb-4">
              <BandwidthComparisonSvg />
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-2 mt-1"
              style={{ color: "rgba(248, 113, 113, 0.55)" }}
            >
              Common objection
            </p>
            <h3 className="font-semibold text-lg leading-snug mb-2">
              &ldquo;Influence has always had a cost. Now it has a
              market.&rdquo;
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              When bandwidth is a transparent cost, markets organize around it —
              CDN partners, infrastructure sponsors, paying subscribers. Value
              flows to those who provide it.
            </p>
          </div>

          <div className="landing-card">
            <div className="bg-dark-surface/30 rounded-lg p-4 mb-4">
              <DeveloperRolesList />
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-2 mt-1"
              style={{ color: "rgba(74, 222, 128, 0.55)" }}
            >
              For developers & builders
            </p>
            <h3 className="font-semibold text-lg leading-snug mb-2">
              &ldquo;Every node is a customer. Every customization is a
              market.&rdquo;
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              An open platform with millions of independent nodes creates
              perpetual demand for themes, tools, integrations, and services.
              Build once, sell everywhere.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-dark-muted mb-1">
            Skeptical about the economics?
          </p>
          <a href="/ecosystem" className="text-sm text-primary hover:underline">
            Read the full ecosystem argument →
          </a>
        </div>
      </div>
    </section>
  )
}
