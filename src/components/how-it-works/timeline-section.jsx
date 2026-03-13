function FeedComparisonDiagram() {
  return (
    <div className="w-full bg-dark-surface border border-dark-border rounded-xl overflow-hidden p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Left Column - Platform Algorithmic Feed */}
        <div
          className="w-full md:w-[48%] bg-[rgba(255,60,60,0.05)] border-l-4 border-red-500/60 pl-4 pr-3 py-2 rounded-r-lg"
          style={{ opacity: 0.85 }}
        >
          <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-4">
            Platform Algorithmic Feed
          </p>

          <div className="space-y-3">
            {/* Entry 1 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-red-500/20">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-red-500/80 text-white rounded mb-2">
                🔥 TRENDING · SPONSORED
              </span>
              <p className="text-sm font-mono text-gray-400 mb-1">
                You won&apos;t believe what happened...
              </p>
              <p className="text-[10px] font-mono text-red-400/80">
                ⚠ Paid promotion
              </p>
            </div>

            {/* Entry 2 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-red-500/20">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-red-500/80 text-white rounded mb-2">
                💰 AD · PROMOTED
              </span>
              <p className="text-sm font-mono text-gray-400 mb-1">
                Buy this product — limited offer
              </p>
              <p className="text-[10px] font-mono text-red-400/80">
                ⚠ Advertiser content
              </p>
            </div>

            {/* Entry 3 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-yellow-500/20">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-yellow-500/80 text-black rounded mb-2">
                👁 VISIBILITY THROTTLED
              </span>
              <p className="text-sm font-mono text-gray-400 mb-1 opacity-50">
                My honest opinion about...
              </p>
              <p className="text-[10px] font-mono text-yellow-400/80">
                ⚠ Reach limited by algorithm
              </p>
            </div>

            {/* Entry 4 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-500/20">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-gray-500/80 text-white rounded mb-2">
                🔁 SUGGESTED · NOT FOLLOWED
              </span>
              <p className="text-sm font-mono text-gray-400 mb-1">
                We think you&apos;ll like this...
              </p>
              <p className="text-[10px] font-mono text-gray-500">
                ⚠ Platform chose this for you
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs font-mono text-red-400">
            Platform decides what you see.
          </p>
        </div>

        {/* VS Divider */}
        <div className="flex md:flex-col items-center justify-center w-full md:w-[4%]">
          <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
          <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <span className="absolute md:relative text-xl font-mono font-bold text-white bg-dark-surface px-2 md:px-0">
            VS
          </span>
        </div>

        {/* Right Column - epress Timestamp Timeline */}
        <div className="w-full md:w-[48%] bg-[rgba(74,240,212,0.05)] border-l-4 border-[#4af0d4] pl-4 pr-3 py-2 rounded-r-lg">
          <p className="text-xs font-mono font-bold text-[#4af0d4] uppercase tracking-wider mb-4">
            epress Timestamp Timeline
          </p>

          <div className="space-y-3">
            {/* Entry 1 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#4af0d4]/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-mono font-bold text-[#e8a04a]">
                  14:32
                </span>
                <span className="text-sm font-mono text-white">Bob</span>
              </div>
              <p className="text-sm font-mono text-white mb-1">
                Just deployed my epress node, feels great
              </p>
              <p className="text-[10px] font-mono text-[#4af0d4]">
                ✓ Content + PoS verified
              </p>
            </div>

            {/* Entry 2 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#4af0d4]/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-mono font-bold text-[#e8a04a]">
                  13:15
                </span>
                <span className="text-sm font-mono text-white">Carol</span>
              </div>
              <p className="text-sm font-mono text-white mb-1">
                Signed my first post on epress network
              </p>
              <p className="text-[10px] font-mono text-[#4af0d4]">
                ✓ Content + PoS verified
              </p>
            </div>

            {/* Entry 3 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#e8a04a]/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-mono font-bold text-[#e8a04a]">
                  12:08
                </span>
                <span className="text-sm font-mono text-white">You</span>
              </div>
              <p className="text-sm font-mono text-white mb-1">
                Welcome to my node — this is home
              </p>
              <p className="text-[10px] font-mono text-[#4af0d4]">
                ✓ Content + PoS verified
              </p>
            </div>

            {/* Entry 4 */}
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#4af0d4]/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-mono font-bold text-[#e8a04a]">
                  11:45
                </span>
                <span className="text-sm font-mono text-white">Bob</span>
              </div>
              <p className="text-sm font-mono text-white mb-1">
                Reading the epress whitepaper, chapter 12 is wild
              </p>
              <p className="text-[10px] font-mono text-[#4af0d4]">
                ✓ Content + PoS verified
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs font-mono text-[#4af0d4]">
            You choose sources. Timestamp order. Nothing hidden.
          </p>
        </div>
      </div>
    </div>
  )
}

export function TimelineSection() {
  return (
    <section id="timeline" className="landing-section">
      <div className="container-custom">
        <p className="section-label">Experience</p>
        <h2 className="landing-heading mb-4">Local Timeline</h2>
        <p className="landing-subheading mb-12">
          Your timeline is generated locally by your node, aggregating content
          from everyone you follow. No algorithmic manipulation — just a simple,
          timestamp-ordered feed you control.
        </p>

        <FeedComparisonDiagram />
      </div>
    </section>
  )
}
