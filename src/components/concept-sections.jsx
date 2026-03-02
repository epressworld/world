"use client";

import {
  CalendarClock,
  FileCheck2,
  Handshake,
  House,
  KeyRound,
} from "lucide-react";

const concepts = [
  {
    id: "identity",
    icon: KeyRound,
    title: "Identity",
    subtitle: "Your Identity = Your Ethereum Address",
    helper:
      "In epress, you do not create a platform account. Your Ethereum address is your identity, controlled by your private key. No platform can take it away.",
    points: ["No username/password lock-in", "Portable and self-owned identity"],
  },
  {
    id: "node",
    icon: House,
    title: "Node",
    subtitle: "Your Node = Your Personal Website",
    helper:
      "Every user runs a node as a personal social website. Your posts, pages, and settings live on your node under your control.",
    points: ["Self-hosted digital home", "Your data stays with you"],
  },
  {
    id: "connection",
    icon: Handshake,
    title: "Connection",
    subtitle: "Follow = Mutual Agreement",
    helper:
      "A follow is created only after both nodes confirm it. This synchronous handshake keeps social relationships consistent on both sides.",
    points: ["No unilateral follow records", "Both nodes store the same relationship"],
  },
  {
    id: "content",
    icon: FileCheck2,
    title: "Content",
    subtitle: "Content = Cryptographically Signed",
    helper:
      "Signed publication creates Proof of Source (PoS), so anyone can verify who published the content, when it was published, and whether it changed.",
    points: ["Verifiable source", "Tamper-evident integrity"],
  },
  {
    id: "timeline",
    icon: CalendarClock,
    title: "Timeline",
    subtitle: "Timeline = Your Local Aggregation",
    helper:
      "Your timeline is generated on your own node from your posts and content from people you follow, sorted by timestamp.",
    points: ["No opaque ranking algorithm", "Your timeline, your control"],
  },
];

function IdentityDiagram() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="idGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a1a09" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>
      </defs>
      <rect width="560" height="300" rx="18" fill="#101010" />
      <rect x="26" y="26" width="160" height="248" rx="14" fill="#171717" stroke="#333" />
      <circle cx="106" cy="86" r="30" fill="#212121" stroke="#F7931A" strokeWidth="2" />
      <text x="106" y="92" textAnchor="middle" fill="#FBBF24" fontSize="12">You</text>
      <rect x="48" y="132" width="116" height="36" rx="10" fill="#101010" stroke="#393939" />
      <text x="106" y="154" textAnchor="middle" fill="#9CA3AF" fontSize="10">Private Key</text>
      <rect x="40" y="184" width="132" height="44" rx="10" fill="#0e2238" stroke="#3B82F6" />
      <text x="106" y="210" textAnchor="middle" fill="#93C5FD" fontSize="11">0x7a2...f9</text>

      <rect x="224" y="56" width="148" height="78" rx="12" fill="url(#idGrad)" stroke="#F7931A" />
      <text x="298" y="84" textAnchor="middle" fill="#FBBF24" fontSize="11">Sign Message</text>
      <text x="298" y="104" textAnchor="middle" fill="#FDE68A" fontSize="10">SIWE / EIP-712</text>

      <path d="M186 150 L224 95" stroke="#F7931A" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M372 95 L416 95" stroke="#F7931A" strokeWidth="2" />
      <polygon points="416,95 406,89 406,101" fill="#F7931A" />

      <rect x="416" y="42" width="120" height="110" rx="12" fill="#171717" stroke="#3f3f46" />
      <text x="476" y="70" textAnchor="middle" fill="#D4D4D8" fontSize="10">Node Auth</text>
      <circle cx="476" cy="108" r="20" fill="#10281a" stroke="#34D399" />
      <text x="476" y="114" textAnchor="middle" fill="#34D399" fontSize="16">✓</text>

      <rect x="224" y="172" width="312" height="82" rx="12" fill="#151515" stroke="#2f2f2f" />
      <text x="244" y="198" fill="#A1A1AA" fontSize="10">What this means</text>
      <text x="244" y="220" fill="#E5E7EB" fontSize="11">Your identity is self-owned and verifiable.</text>
      <text x="244" y="238" fill="#E5E7EB" fontSize="11">No platform can freeze or revoke it.</text>
    </svg>
  );
}

function NodeDiagram() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="300" rx="18" fill="#101010" />
      <rect x="28" y="32" width="302" height="210" rx="14" fill="#171717" stroke="#343434" />
      <rect x="44" y="50" width="270" height="20" rx="6" fill="#212121" />
      <circle cx="58" cy="60" r="3" fill="#ef4444" />
      <circle cx="69" cy="60" r="3" fill="#f59e0b" />
      <circle cx="80" cy="60" r="3" fill="#22c55e" />
      <rect x="44" y="84" width="170" height="28" rx="8" fill="#23180a" stroke="#F7931A" />
      <text x="129" y="102" textAnchor="middle" fill="#FBBF24" fontSize="10">your-node.example</text>
      <rect x="44" y="124" width="270" height="98" rx="10" fill="#121212" stroke="#2e2e2e" />
      <rect x="58" y="140" width="88" height="14" rx="4" fill="#303030" />
      <rect x="58" y="162" width="238" height="10" rx="3" fill="#252525" />
      <rect x="58" y="178" width="208" height="10" rx="3" fill="#252525" />
      <rect x="58" y="194" width="224" height="10" rx="3" fill="#252525" />

      <path d="M330 138 L382 138" stroke="#F7931A" strokeWidth="2" />
      <polygon points="382,138 372,132 372,144" fill="#F7931A" />

      <rect x="382" y="52" width="150" height="190" rx="14" fill="#151515" stroke="#353535" />
      <text x="457" y="80" textAnchor="middle" fill="#D4D4D8" fontSize="10">What your node stores</text>
      <rect x="402" y="96" width="110" height="34" rx="10" fill="#10281a" stroke="#34D399" />
      <text x="457" y="117" textAnchor="middle" fill="#6EE7B7" fontSize="10">Your Content</text>
      <rect x="402" y="138" width="110" height="34" rx="10" fill="#0e2238" stroke="#60A5FA" />
      <text x="457" y="159" textAnchor="middle" fill="#93C5FD" fontSize="10">Connections</text>
      <rect x="402" y="180" width="110" height="34" rx="10" fill="#23180a" stroke="#F7931A" />
      <text x="457" y="201" textAnchor="middle" fill="#FBBF24" fontSize="10">Profile & Config</text>
    </svg>
  );
}

function ConnectionDiagram() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="300" rx="18" fill="#101010" />
      <circle cx="110" cy="98" r="34" fill="#1b1b1b" stroke="#F7931A" strokeWidth="2" />
      <text x="110" y="103" textAnchor="middle" fill="#FBBF24" fontSize="13">Alice</text>

      <circle cx="450" cy="98" r="34" fill="#1b1b1b" stroke="#60A5FA" strokeWidth="2" />
      <text x="450" y="103" textAnchor="middle" fill="#93C5FD" fontSize="13">Bob</text>

      <rect x="206" y="48" width="148" height="44" rx="10" fill="#23180a" stroke="#F7931A" />
      <text x="280" y="75" textAnchor="middle" fill="#FBBF24" fontSize="10">Signed Follow Intent</text>

      <path d="M144 98 L206 70" stroke="#F7931A" strokeWidth="2" />
      <polygon points="206,70 195,68 200,78" fill="#F7931A" />
      <path d="M354 70 L416 98" stroke="#60A5FA" strokeWidth="2" />
      <polygon points="416,98 405,90 402,101" fill="#60A5FA" />

      <rect x="78" y="174" width="178" height="78" rx="12" fill="#151515" stroke="#343434" />
      <text x="167" y="202" textAnchor="middle" fill="#D4D4D8" fontSize="10">Alice Node</text>
      <text x="167" y="224" textAnchor="middle" fill="#6EE7B7" fontSize="11">I follow Bob  ✓</text>

      <rect x="304" y="174" width="178" height="78" rx="12" fill="#151515" stroke="#343434" />
      <text x="393" y="202" textAnchor="middle" fill="#D4D4D8" fontSize="10">Bob Node</text>
      <text x="393" y="224" textAnchor="middle" fill="#6EE7B7" fontSize="11">Alice follows me  ✓</text>

      <path d="M256 214 L304 214" stroke="#34D399" strokeWidth="2" strokeDasharray="4 4" />
      <text x="280" y="200" textAnchor="middle" fill="#34D399" fontSize="9">synchronous confirmation</text>
    </svg>
  );
}

function ContentDiagram() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="300" rx="18" fill="#101010" />

      <rect x="28" y="92" width="128" height="118" rx="12" fill="#171717" stroke="#353535" />
      <text x="92" y="118" textAnchor="middle" fill="#D4D4D8" fontSize="10">Content</text>
      <rect x="44" y="136" width="96" height="10" rx="3" fill="#2d2d2d" />
      <rect x="44" y="152" width="78" height="10" rx="3" fill="#2d2d2d" />
      <rect x="44" y="168" width="90" height="10" rx="3" fill="#2d2d2d" />

      <path d="M156 152 L210 152" stroke="#F7931A" strokeWidth="2" />
      <polygon points="210,152 200,146 200,158" fill="#F7931A" />

      <rect x="210" y="114" width="138" height="76" rx="12" fill="#23180a" stroke="#F7931A" />
      <text x="279" y="142" textAnchor="middle" fill="#FBBF24" fontSize="10">SoS</text>
      <text x="279" y="160" textAnchor="middle" fill="#FDE68A" fontSize="9">hash + publisher + time</text>

      <path d="M348 152 L392 152" stroke="#F7931A" strokeWidth="2" />
      <polygon points="392,152 382,146 382,158" fill="#F7931A" />

      <rect x="392" y="96" width="140" height="112" rx="12" fill="#111f16" stroke="#34D399" />
      <text x="462" y="126" textAnchor="middle" fill="#6EE7B7" fontSize="10">Proof of Source</text>
      <text x="462" y="145" textAnchor="middle" fill="#6EE7B7" fontSize="9">SoS + signature</text>
      <circle cx="462" cy="170" r="16" fill="#10281a" stroke="#34D399" />
      <text x="462" y="176" textAnchor="middle" fill="#34D399" fontSize="14">✓</text>

      <rect x="28" y="226" width="504" height="46" rx="10" fill="#151515" stroke="#303030" />
      <text x="46" y="253" fill="#E5E7EB" fontSize="10">Every signed post can be verified before it enters someone else&apos;s timeline.</text>
    </svg>
  );
}

function TimelineDiagram() {
  return (
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="300" rx="18" fill="#101010" />

      <rect x="26" y="44" width="156" height="206" rx="12" fill="#151515" stroke="#343434" />
      <text x="104" y="68" textAnchor="middle" fill="#D4D4D8" fontSize="10">Stored Locally</text>
      <rect x="42" y="84" width="124" height="30" rx="8" fill="#10281a" stroke="#34D399" />
      <text x="104" y="103" textAnchor="middle" fill="#6EE7B7" fontSize="9">Your posts</text>
      <rect x="42" y="122" width="124" height="30" rx="8" fill="#0e2238" stroke="#60A5FA" />
      <text x="104" y="141" textAnchor="middle" fill="#93C5FD" fontSize="9">Followed content</text>
      <rect x="42" y="160" width="124" height="30" rx="8" fill="#23180a" stroke="#F7931A" />
      <text x="104" y="179" textAnchor="middle" fill="#FBBF24" fontSize="9">Timestamps</text>

      <path d="M182 146 L236 146" stroke="#F7931A" strokeWidth="2" />
      <polygon points="236,146 226,140 226,152" fill="#F7931A" />

      <rect x="236" y="54" width="298" height="196" rx="12" fill="#171717" stroke="#363636" />
      <rect x="252" y="74" width="266" height="24" rx="8" fill="#23180a" stroke="#F7931A" />
      <text x="385" y="90" textAnchor="middle" fill="#FBBF24" fontSize="10">Your Timeline (newest first)</text>

      <rect x="252" y="108" width="266" height="34" rx="8" fill="#202020" />
      <text x="266" y="129" fill="#E5E7EB" fontSize="10">12:08  Bob published a signed post</text>

      <rect x="252" y="148" width="266" height="34" rx="8" fill="#202020" />
      <text x="266" y="169" fill="#E5E7EB" fontSize="10">11:55  Your local draft was updated</text>

      <rect x="252" y="188" width="266" height="34" rx="8" fill="#202020" />
      <text x="266" y="209" fill="#E5E7EB" fontSize="10">11:26  Alice&apos;s content passed PoS check</text>

      <rect x="430" y="20" width="104" height="24" rx="12" fill="#2a1616" stroke="#ef4444" />
      <text x="482" y="36" textAnchor="middle" fill="#fca5a5" fontSize="9">No hidden feed ranking</text>
    </svg>
  );
}

const diagrams = {
  identity: IdentityDiagram,
  node: NodeDiagram,
  connection: ConnectionDiagram,
  content: ContentDiagram,
  timeline: TimelineDiagram,
};

export function ConceptSections() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {concepts.map((concept) => {
          const Icon = concept.icon;
          return (
            <a
              key={concept.id}
              href={`#concept-${concept.id}`}
              className="concept-nav-card"
            >
              <span className="mx-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary shadow-[0_8px_20px_-14px_rgba(247,147,26,0.9)]">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-sm font-semibold">{concept.title}</div>
            </a>
          );
        })}
      </div>

      {concepts.map((concept) => {
        const Icon = concept.icon;
        const Diagram = diagrams[concept.id];
        return (
          <section
            key={concept.id}
            id={`concept-${concept.id}`}
            className="concept-section-card"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] items-center">
              <div className="concept-diagram-frame">
                <Diagram />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">{concept.subtitle}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{concept.helper}</p>
                <div className="flex flex-wrap gap-2">
                  {concept.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
