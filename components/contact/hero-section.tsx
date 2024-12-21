"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContactHeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Jain Impex Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch with Jain Impex
          </h1>
          <p className="text-lg text-gray-300">
            We&apos;re here to help with all your industrial product needs. Reach out to us for expert assistance and solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 