"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function AnimatedBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 360]),
    springConfig
  )
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 50]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-30, 30]),
    springConfig
  )
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.07, 0.1, 0.07]),
    springConfig
  )

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* Animated Gradient Orbs */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Primary Brand Color Orb */}
        <motion.div
          style={{ 
            rotate,
            scale,
            x: translateX,
            y: translateY
          }}
          className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-primary/5 blur-3xl"
        />

        {/* Complementary Color Orb */}
        <motion.div
          style={{ 
            rotate: rotate,
            scale: scale,
            x: translateX,
            y: translateY
          }}
          className="absolute w-[750px] h-[750px] rounded-full bg-gradient-to-r from-indigo-500/25 via-blue-500/20 to-cyan-500/15 blur-3xl"
        />

        {/* Accent Color Orb */}
        <motion.div
          style={{ 
            rotate: rotate,
            scale: scale,
            x: translateX,
            y: translateY,
            scaleX: -1 
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-yellow-500/10 blur-3xl"
        />
      </motion.div>

      {/* Enhanced Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'scale(1.5)'
        }}
      />
    </div>
  )
} 