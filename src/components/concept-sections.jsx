"use client";

import { useRef } from "react";

const concepts = [
  {
    id: "identity",
    title: "Identity",
    icon: "🔑",
    subtitle: "Your Identity = Your Ethereum Address",
    desc: "In epress, you don't create an account on a platform. Your identity IS your Ethereum address — controlled by your private key. No username, no password, no platform can ban you or take it away.",
    align: "left"
  },
  {
    id: "node",
    title: "Node",
    icon: "🌐",
    subtitle: "Your Node = Your Personal Website",
    desc: "Every user runs their own node — a personal website you fully control. Think of it as your digital home. You publish posts, manage pages, and interact with visitors. But unlike Twitter or Facebook, this website belongs entirely to YOU.",
    align: "right"
  },
  {
    id: "connection",
    title: "Connection",
    icon: "🔗",
    subtitle: "Follow = Mutual Agreement",
    desc: "When you follow someone on epress, you're creating a direct peer-to-peer connection. But here's the key: both parties must confirm. This 'synchronous handshake' ensures the relationship exists on BOTH nodes simultaneously. No fake followers, no unilateral decisions.",
    align: "left"
  },
  {
    id: "content",
    title: "Content",
    icon: "📄",
    subtitle: "Content = Cryptographically Signed",
    desc: "When you publish content on epress, it's cryptographically signed with your private key, creating a 'Proof of Source' (PoS). This proves WHO created it, WHEN it was published, and that it hasn't been tampered with. Anyone can verify — but no one can forge or alter.",
    align: "right",
    isKey: true
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: "📅",
    subtitle: "Timeline = Your Local View",
    desc: "Your timeline is generated entirely on YOUR node. It combines your posts with posts from everyone you follow, sorted by timestamp. No algorithm decides what you see. No one can manipulate your feed. It's your personal view of the network, generated locally, controlled by you.",
    align: "left"
  }
];

function IdentitySvg() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="ethGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#627EEA"/>
          <stop offset="100%" stopColor="#3c3c3d"/>
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="300" height="200" fill="#0f0f0f" rx="12"/>
      
      {/* User Icon */}
      <circle cx="150" cy="50" r="25" fill="#2a2a2a" stroke="#F7931A" strokeWidth="2"/>
      <circle cx="150" cy="42" r="10" fill="#F7931A"/>
      <path d="M130 65 Q150 80 170 65" stroke="#F7931A" strokeWidth="2" fill="none"/>
      
      {/* Arrow Down */}
      <path d="M150 85 L150 105" stroke="#444" strokeWidth="2"/>
      <polygon points="145,100 150,110 155,100" fill="#444"/>
      
      {/* Wallet */}
      <rect x="110" y="110" width="80" height="50" rx="8" fill="url(#ethGrad)"/>
      <text x="150" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Wallet</text>
      
      {/* Key */}
      <circle cx="200" cy="135" r="15" fill="#F7931A"/>
      <text x="200" y="140" textAnchor="middle" fill="white" fontSize="14">🔑</text>
      
      {/* Address */}
      <rect x="80" y="170" width="140" height="20" rx="4" fill="#1a1a1a"/>
      <text x="150" y="184" textAnchor="middle" fill="#627EEA" fontSize="10" fontFamily="monospace">0x7a2...f9</text>
    </svg>
  );
}

function NodeSvg() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="300" height="200" fill="#0f0f0f" rx="12"/>
      
      {/* Globe */}
      <circle cx="150" cy="40" r="25" fill="none" stroke="#F7931A" strokeWidth="2"/>
      <ellipse cx="150" cy="40" rx="25" ry="8" fill="none" stroke="#F7931A" strokeWidth="1"/>
      <line x1="125" y1="40" x2="175" y2="40" stroke="#F7931A" strokeWidth="1"/>
      <line x1="150" y1="15" x2="150" y2="65" stroke="#F7931A" strokeWidth="1"/>
      
      {/* Server */}
      <rect x="75" y="75" width="150" height="90" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
      
      {/* Screen */}
      <rect x="85" y="85" width="130" height="40" rx="4" fill="#0a0a0a"/>
      <circle cx="100" cy="105" r="3" fill="#00ff00"/>
      <circle cx="115" cy="105" r="3" fill="#00ff00"/>
      <circle cx="130" cy="105" r="3" fill="#ff0000"/>
      
      {/* Content blocks */}
      <rect x="85" y="130" width="40" height="25" rx="2" fill="#2a2a2a"/>
      <rect x="130" y="130" width="40" height="25" rx="2" fill="#2a2a2a"/>
      <rect x="175" y="130" width="40" height="25" rx="2" fill="#2a2a2a"/>
      
      <text x="150" y="185" textAnchor="middle" fill="#888" fontSize="11">your-domain.com</text>
    </svg>
  );
}

function ConnectionSvg() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="300" height="200" fill="#0f0f0f" rx="12"/>
      
      {/* Alice */}
      <circle cx="70" cy="80" r="25" fill="#2a2a2a" stroke="#F7931A" strokeWidth="2"/>
      <text x="70" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">A</text>
      <text x="70" y="120" textAnchor="middle" fill="#888" fontSize="10">Alice</text>
      
      {/* Bob */}
      <circle cx="230" cy="80" r="25" fill="#2a2a2a" stroke="#4a9" strokeWidth="2"/>
      <text x="230" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">B</text>
      <text x="230" y="120" textAnchor="middle" fill="#888" fontSize="10">Bob</text>
      
      {/* Follow Arrow */}
      <path d="M100 80 Q150 50 200 80" stroke="#F7931A" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
      
      {/* Sync */}
      <path d="M180 120 Q150 140 120 120" stroke="#4a9" strokeWidth="2" fill="none"/>
      
      {/* Confirmed badges */}
      <circle cx="70" cy="150" r="12" fill="#1a3a1a" stroke="#4a9"/>
      <text x="70" y="154" textAnchor="middle" fill="#4a9" fontSize="12">✓</text>
      
      <circle cx="150" cy="150" r="12" fill="#1a3a1a" stroke="#4a9"/>
      <text x="150" y="154" textAnchor="middle" fill="#4a9" fontSize="12">✓</text>
      
      <circle cx="230" cy="150" r="12" fill="#1a3a1a" stroke="#4a9"/>
      <text x="230" y="154" textAnchor="middle" fill="#4a9" fontSize="12">✓</text>
      
      <text x="150" y="185" textAnchor="middle" fill="#4a9" fontSize="10">Both nodes confirmed</text>
    </svg>
  );
}

function ContentSvg() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="300" height="200" fill="#0f0f0f" rx="12"/>
      
      {/* Content */}
      <rect x="20" y="60" width="100" height="60" rx="4" fill="#1a1a1a" stroke="#444"/>
      <text x="70" y="85" textAnchor="middle" fill="#666" fontSize="9">Content</text>
      <text x="70" y="105" textAnchor="middle" fill="#fff" fontSize="11">"Hello World"</text>
      
      {/* Hash */}
      <path d="M130 90 L170 90" stroke="#F7931A" strokeWidth="2"/>
      <rect x="175" y="70" width="50" height="40" rx="4" fill="#1a1a1a" stroke="#F7931A"/>
      <text x="200" y="95" textAnchor="middle" fill="#F7931A" fontSize="8">SHA-256</text>
      
      {/* Sign */}
      <path d="M235 90 L255 90" stroke="#F7931A" strokeWidth="2"/>
      <rect x="260" y="50" width="30" height="80" rx="4" fill="#0f1a0f" stroke="#00ff00" strokeWidth="2"/>
      <text x="275" y="95" textAnchor="middle" fill="#00ff00" fontSize="9" fontWeight="bold">PoS</text>
      
      {/* PoS Details */}
      <rect x="20" y="140" width="260" height="45" rx="4" fill="#1a1a1a"/>
      <text x="30" y="155" fill="#00ff00" fontSize="8">✓ Owner: 0x7a2...f9</text>
      <text x="30" y="170" fill="#00ff00" fontSize="8">✓ Time: 2025-03-02</text>
      <text x="150" y="170" fill="#00ff00" fontSize="8">✓ Hash verified</text>
    </svg>
  );
}

function TimelineSvg() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="300" height="200" fill="#0f0f0f" rx="12"/>
      
      {/* Phone/Frame */}
      <rect x="80" y="20" width="140" height="160" rx="12" fill="#1a1a1a" stroke="#333"/>
      
      {/* Header */}
      <rect x="80" y="20" width="140" height="25" rx="12" fill="#F7931A"/>
      <text x="150" y="38" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Timeline</text>
      
      {/* Posts */}
      <rect x="90" y="55" width="120" height="30" rx="4" fill="#2a2a2a"/>
      <circle cx="105" cy="70" r="8" fill="#4a9"/>
      <text x="117" y="73" fill="#888" fontSize="8">Bob</text>
      <text x="117" y="81" fill="#fff" fontSize="7">Hello!</text>
      
      <rect x="90" y="90" width="120" height="30" rx="4" fill="#2a2a2a"/>
      <circle cx="105" cy="105" r="8" fill="#F7931A"/>
      <text x="117" y="108" fill="#888" fontSize="8">You</text>
      <text x="117" y="116" fill="#fff" fontSize="7">Hi there</text>
      
      <rect x="90" y="125" width="120" height="30" rx="4" fill="#2a2a2a"/>
      <circle cx="105" cy="140" r="8" fill="#4a9"/>
      <text x="117" y="143" fill="#888" fontSize="8">Alice</text>
      <text x="117" y="151" fill="#fff" fontSize="7">Hey guys</text>
      
      {/* Timeline icon */}
      <line x1="260" y1="50" x2="260" y2="160" stroke="#F7931A" strokeWidth="2"/>
      <circle cx="260" cy="55" r="3" fill="#F7931A"/>
      <circle cx="260" cy="95" r="3" fill="#F7931A"/>
      <circle cx="260" cy="135" r="3" fill="#F7931A"/>
    </svg>
  );
}

const svgComponents = {
  identity: IdentitySvg,
  node: NodeSvg,
  connection: ConnectionSvg,
  content: ContentSvg,
  timeline: TimelineSvg
};

export function ConceptSections() {
  const containerRef = useRef(null);

  const handleCardClick = (id) => {
    const element = document.getElementById(`concept-${id}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef}>
      {/* Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            onClick={() => handleCardClick(concept.id)}
            className="p-3 rounded-lg bg-dark-surface border border-dark-border hover:border-primary/50 transition-all text-center"
          >
            <div className="text-xl mb-1">{concept.icon}</div>
            <div className="font-semibold text-sm">{concept.title}</div>
          </button>
        ))}
      </div>

      {/* Concept Details */}
      {concepts.map((concept, index) => {
        const SvgComponent = svgComponents[concept.id];
        const isLeft = concept.align === "left";
        
        return (
          <div 
            key={concept.id}
            id={`concept-${concept.id}`}
            className="py-12 border-t border-dark-border first:border-t-0"
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${concept.isKey ? 'bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-xl -mx-4' : ''}`}>
              
              {/* Text */}
              <div className={`order-2 ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{concept.icon}</span>
                  <h3 className="text-2xl font-bold">{concept.subtitle}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {concept.desc}
                </p>
                {concept.isKey && (
                  <div className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-primary text-sm font-semibold">
                      💡 Proof of Source (PoS) is what makes epress different. 
                      Your content carries cryptographic proof that you created it — 
                      verifiable by anyone, forgeable by no one.
                    </p>
                  </div>
                )}
              </div>
              
              {/* SVG */}
              <div className={`order-1 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative">
                  <SvgComponent />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
