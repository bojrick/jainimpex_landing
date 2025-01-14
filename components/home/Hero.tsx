'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div 
        className="container relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[80vh] py-8 md:py-12">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Leading Metal Distributor</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[800px] mx-auto lg:mx-0">
                Forge Your Success with{" "}
                <span className="text-primary">Premium Metals</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                Unleash the power of quality metals. From copper to stainless steel, we deliver excellence in every piece.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 w-full"
            >
              {['Copper', 'Round Bars', 'Aluminium', 'Pipe Fittings', 'Hexagonal', 'Flat Bars'].map((product) => (
                <span 
                  key={product} 
                  className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-muted-foreground"
                >
                  {product}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/products" className="flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/contact" className="flex items-center">
                  Get a Quote
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 w-full max-w-[600px] mx-auto lg:mx-0"
            >
              {[
                { label: "Years Experience", value: "2.5+" },
                { label: "Products", value: "100+" },
                { label: "Countries Served", value: "2" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-3 rounded-lg bg-background/60 backdrop-blur shadow-sm"
                >
                  <span className="text-xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[350px] lg:h-[500px] w-full rounded-lg overflow-hidden order-first lg:order-last"
          >
            <Image
              src="/hero-image.jpg"
              alt="Industrial metal products showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 lg:bg-gradient-to-r" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

