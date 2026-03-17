"use client"

import { motion } from "framer-motion"
import { Ban, CircleDollarSign, ShieldAlert } from "lucide-react"

const painPoints = [
  {
    icon: Ban,
    title: "Banned Without Appeal.",
    text: "Years of reputation and content wiped out by an opaque algorithmic decision. No human to talk to. No data to export.",
    borderColor: "border-red-500",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
  {
    icon: CircleDollarSign,
    title: "Forced to Pay for Your Own Audience.",
    text: "You built the following, but the platform throttles your reach unless you pay for visibility.",
    borderColor: "border-amber-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: ShieldAlert,
    title: "Hostage to Platform Economics.",
    text: "Terms of service change overnight. Features are paywalled. You are not the customer; you are the inventory.",
    borderColor: "border-gray-500",
    iconBg: "bg-gray-500/10",
    iconColor: "text-gray-400",
  },
]

export function PainPointsSection() {
  return (
    <section className="landing-section bg-dark-surface/30">
      <div className="container-custom">
        <motion.p
          className="section-label text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          THE PROBLEM
        </motion.p>

        <motion.h2
          className="landing-heading mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          It Happens More Than You Think
        </motion.h2>

        <motion.p
          className="text-center text-white/50 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Centralized platforms have a structural incentive to maximize
          extraction, not user sovereignty.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              className={`landing-card border-l-4 ${point.borderColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-4`}
              >
                <point.icon className={`w-6 h-6 ${point.iconColor}`} />
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                {point.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-white/40 italic mb-2">
            These are not bugs. They are features of the business model.
          </p>
          <p className="text-primary font-medium">
            epress makes all three impossible by design.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
