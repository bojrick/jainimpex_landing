"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] py-12 md:py-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Premium Metal Products for Your Industry
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Discover our extensive range of high-quality metal products. From copper to stainless steel, we deliver excellence in every piece.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/products">
                  Explore Our Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto pt-4">
              {[
                { label: "Years Experience", value: "25+" },
                { label: "Products", value: "500+" },
                { label: "Countries Served", value: "30+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="flex flex-col items-center p-4 rounded-lg bg-background/60 backdrop-blur shadow-sm"
                >
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden order-first lg:order-last"
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