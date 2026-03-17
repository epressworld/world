"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

function GradientMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-[#1a1510]" />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,74,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          left: "-10%",
          top: "-20%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,74,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          right: "-5%",
          bottom: "-10%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          left: "40%",
          top: "30%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,160,74,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(232,160,74,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <GradientMeshBackground />

      <div className="container-custom relative z-20 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.p
            className="section-label mb-6 text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            THE SOVEREIGN INTERNET
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Sovereign Territory in the Digital World.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Not a platform. Not a rental space. epress is a decentralized
            protocol where your identity, social graph, and content belong
            entirely to you, secured by cryptography, forever.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/how-it-works"
              className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/whitepaper"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read Whitepaper
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  )
}
