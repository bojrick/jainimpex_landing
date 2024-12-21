"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function OverviewSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Who We Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A trusted name in industrial manufacturing since 2008
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={item} className="text-lg text-muted-foreground">
              Jain Impex has established itself as a leading manufacturer of high-quality industrial products, specializing in Round Bars, Aluminium Sheets, and various metal components.
            </motion.p>
            
            <motion.p variants={item} className="text-lg text-muted-foreground">
              Our state-of-the-art manufacturing facility, combined with our team of skilled professionals, enables us to deliver products that consistently exceed industry standards.
            </motion.p>

            <motion.div variants={item}>
              <Card className="p-6 bg-primary/5 border-none">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide high-quality materials with a commitment to customer satisfaction and innovation, setting new benchmarks in industrial manufacturing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be a global leader in the manufacturing of industrial products, recognized for our quality, reliability, and customer-centric approach.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-[4/3]"
          >
            <Image
              src="/images/facility.jpg"
              alt="Jain Impex Manufacturing Facility"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 