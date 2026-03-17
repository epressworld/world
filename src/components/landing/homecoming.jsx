"use client"

import { motion } from "framer-motion"

function EvolutionDiagram() {
  return (
    <svg
      viewBox="0 0 340 240"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <text
        x="0"
        y="12"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.06em"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        Web 1.0
      </text>

      <rect
        x="55"
        y="18"
        width="72"
        height="40"
        rx="4"
        fill="currentColor"
        fillOpacity="0.06"
        strokeOpacity="0.25"
      />
      <rect
        x="59"
        y="22"
        width="64"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="none"
      />
      <line x1="59" y1="33" x2="115" y2="33" strokeOpacity="0.15" />
      <line x1="59" y1="40" x2="100" y2="40" strokeOpacity="0.1" />
      <text
        x="91"
        y="65"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
      >
        your site
      </text>

      <rect
        x="213"
        y="18"
        width="72"
        height="40"
        rx="4"
        fill="currentColor"
        fillOpacity="0.06"
        strokeOpacity="0.25"
      />
      <rect
        x="217"
        y="22"
        width="64"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="none"
      />
      <line x1="217" y1="33" x2="273" y2="33" strokeOpacity="0.15" />
      <line x1="217" y1="40" x2="258" y2="40" strokeOpacity="0.1" />
      <text
        x="249"
        y="65"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
      >
        friend&apos;s site
      </text>

      <line x1="127" y1="38" x2="213" y2="38" strokeOpacity="0.3" />
      <polygon
        points="213,38 207,35 207,41"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
      />
      <text
        x="170"
        y="34"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="none"
        fontFamily="monospace"
      >
        friendship link
      </text>

      <line
        x1="310"
        y1="38"
        x2="310"
        y2="82"
        strokeOpacity="0.15"
        strokeDasharray="3 2"
      />
      <polygon
        points="313,60 307,57 307,63"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="none"
      />

      <text
        x="0"
        y="85"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.06em"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        PLATFORM ERA
      </text>

      <rect
        x="30"
        y="92"
        width="280"
        height="52"
        rx="8"
        fill="currentColor"
        fillOpacity="0.04"
        strokeOpacity="0.2"
      />
      <text
        x="40"
        y="108"
        fontSize="8"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="none"
      >
        Platform
      </text>

      <circle
        cx="100"
        cy="118"
        r="14"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.25"
      />
      <circle
        cx="240"
        cy="118"
        r="14"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.25"
      />

      <line
        x1="114"
        y1="118"
        x2="226"
        y2="118"
        strokeOpacity="0.2"
        strokeDasharray="2 2"
      />

      <circle
        cx="170"
        cy="116"
        r="5"
        fill="currentColor"
        fillOpacity="0.08"
        strokeOpacity="0.3"
      />
      <rect
        x="167"
        y="118"
        width="6"
        height="5"
        rx="1"
        fill="currentColor"
        fillOpacity="0.1"
        strokeOpacity="0.2"
      />

      <text
        x="170"
        y="155"
        fontSize="8"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        relationship lives inside the platform
      </text>

      <line
        x1="310"
        y1="118"
        x2="310"
        y2="168"
        strokeOpacity="0.15"
        strokeDasharray="3 2"
      />
      <polygon
        points="313,143 307,140 307,146"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="none"
      />

      <text
        x="0"
        y="172"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.06em"
        fill="currentColor"
        fillOpacity="0.7"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        EPRESS
      </text>

      <circle
        cx="91"
        cy="200"
        r="22"
        fill="currentColor"
        fillOpacity="0.1"
        strokeOpacity="0.6"
        strokeWidth="1.8"
      />
      <text
        x="91"
        y="228"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.45"
        stroke="none"
        fontFamily="monospace"
      >
        alice.epress.world
      </text>

      <circle
        cx="249"
        cy="200"
        r="22"
        fill="currentColor"
        fillOpacity="0.1"
        strokeOpacity="0.6"
        strokeWidth="1.8"
      />
      <text
        x="249"
        y="228"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.45"
        stroke="none"
        fontFamily="monospace"
      >
        bob.epress.world
      </text>

      <line
        x1="113"
        y1="200"
        x2="227"
        y2="200"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />

      <polygon
        points="113,200 107,197 107,203"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="none"
      />
      <polygon
        points="227,200 221,197 221,203"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="none"
      />

      <rect
        x="115"
        y="197"
        width="10"
        height="6"
        rx="2"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
        className="content-particle"
      />

      <text
        x="170"
        y="192"
        fontSize="7"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        content flows both ways
      </text>
    </svg>
  )
}

export function Homecoming() {
  return (
    <section className="landing-section">
      <style>{`
        @keyframes content-flow {
          0%   { transform: translateX(0px); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { transform: translateX(112px); opacity: 0; }
        }
        .content-particle {
          animation: content-flow 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .content-particle { animation: none; opacity: 0.3; }
        }
      `}</style>

      <div className="container-custom">
        <p className="section-label text-center mb-4">
          A FEELING YOU&apos;VE FORGOTTEN
        </p>
        <h2 className="landing-heading text-center mb-3">
          The Internet Used to Feel Like This.
        </h2>
        <p className="landing-subheading text-center mx-auto mb-16 max-w-2xl">
          Before platforms turned everyone into users, the web felt personal.
          You had a home on the internet. People visited. It meant something.
          epress brings that back.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h3 className="font-semibold text-lg mb-6">
              Your Node Is Your Home
            </h3>

            <div className="space-y-3">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4 relative overflow-hidden">
                <div className="flex gap-1.5 mb-3.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-500/60">
                      @
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/60 mb-1">
                      @alice
                      <span className="text-white/35">
                        {" "}
                        viewed your profile
                      </span>
                    </p>
                    <p className="text-[10px] text-white/20 font-mono">
                      and 2,847 others today
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.05]">
                  <p className="text-[11px] text-white/25 italic">
                    A number in a platform&apos;s engagement dashboard.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/[0.12] p-4 relative">
                <div className="flex gap-1.5 mb-3.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div
                    className="w-2 h-2 rounded-full bg-amber-400/60"
                    style={{ background: "rgba(232, 160, 74, 0.4)" }}
                  />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>

                <div className="flex items-start gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(232, 160, 74, 0.1)",
                      border: "1px solid rgba(232, 160, 74, 0.25)",
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: "rgba(232, 160, 74, 0.7)" }}
                    >
                      A
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/75 mb-1">
                      alice.epress.world
                      <span className="text-white/45"> visited your node</span>
                    </p>
                    <p className="text-[10px] text-white/35 font-mono mb-1.5">
                      5 min ago · from Tokyo
                    </p>
                    <p className="text-[10px] text-white/30 leading-relaxed">
                      Writing about cities, code, and things I notice.
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.05]">
                  <p
                    className="text-[11px] italic"
                    style={{ color: "rgba(232, 160, 74, 0.5)" }}
                  >
                    Someone&apos;s home, visiting yours.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/40 leading-relaxed italic">
              Platform notifications show numbers. Node visits show people. One
              is a metric; the other is a moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h3 className="font-semibold text-lg mb-6">
              Follow Is the New Friendship Link
            </h3>

            <div className="bg-dark-surface/30 rounded-xl p-5">
              <EvolutionDiagram />
            </div>

            <p className="mt-4 text-sm text-white/40 leading-relaxed italic">
              Follow used to mean a database entry. On epress, it means a
              direct, living connection between two homes on the internet.
            </p>
          </motion.div>
        </div>

        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[15px] text-white/50 mb-1">
              We lost something when the web industrialized.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p className="text-[15px] text-white/40 mb-1">
              Not the technology — the feeling of it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <p className="text-base font-semibold text-white/75">
              epress is its return.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
