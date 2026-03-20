"use client"

import { motion } from "framer-motion"
import { ArrowRight, MonitorPlay, Rocket } from "lucide-react"
import Link from "next/link"
import { HeroNetworkCanvas } from "./hero-network-canvas"
import { HeroNetworkSvg } from "./hero-network-svg"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg z-10" />
        <div className="relative w-full h-full">
          <HeroNetworkSvg />
          <HeroNetworkCanvas />
        </div>
      </div>

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
            Your Digital Home.
            <br />
            <span className="text-primary">For Life.</span>
          </motion.h1>

          <motion.div
            className="mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="text-xl md:text-2xl mb-3"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontWeight: 500,
              }}
            >
              Not a platform account. Not a rental space.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              A self-hosted node where your identity, content, and social graph
              are secured by cryptography — yours to keep, inherit, and pass
              down.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/features"
              className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              <MonitorPlay className="w-5 h-5" />
              See It in Action
            </Link>
            <Link
              href="/docs"
              className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Deploy Your Node
            </Link>
          </motion.div>

          <motion.p
            className="mt-6 text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            See it live →{" "}
            <a
              href="https://blog.epress.world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              blog.epress.world
            </a>{" "}
            is a real node on the network
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  )
}
