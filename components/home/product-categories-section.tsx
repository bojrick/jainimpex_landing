"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CircleDot, Box, Layers3, Hammer, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  {
    title: "Round Bars",
    icon: <CircleDot className="w-8 h-8" />,
    description: "Premium-grade metal round bars engineered for industrial excellence",
    href: "/products?category=round-bars",
    image: "/products/round-bars.jpg",
    gradient: "from-[#D4D4D8] via-[#E4E4E7] to-[#D4D4D8]",
    iconBg: "bg-zinc-200",
  },
  {
    title: "Aluminium Sheets",
    icon: <Layers3 className="w-8 h-8" />,
    description: "High-performance aluminum sheets and coils for versatile applications",
    href: "/products?category=aluminum-sheets",
    image: "/products/sheets.jpg",
    gradient: "from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB]",
    iconBg: "bg-gray-200",
  },
  {
    title: "Copper Products",
    icon: <Box className="w-8 h-8" />,
    description: "Specialized copper solutions crafted for superior conductivity",
    href: "/products?category=copper-products",
    image: "/products/copper.jpg",
    gradient: "from-[#FCD34D] via-[#FBBF24] to-[#F59E0B]",
    iconBg: "bg-amber-200",
  },
  {
    title: "Hot Dip Galvanizing",
    icon: <Hammer className="w-8 h-8" />,
    description: "Professional galvanizing services for ultimate durability",
    href: "/products?category=galvanizing",
    image: "/products/galvanizing.jpg",
    gradient: "from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]",
    iconBg: "bg-blue-200",
  },
]

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

export function ProductCategoriesSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
      <div className="relative z-10">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Excellence in Metal Distribution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our premium range of industrial metal products crafted with precision
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {categories.map((category) => (
              <motion.div key={category.title} variants={item}>
                <Link href={category.href} className="block">
                  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br bg-white/80 backdrop-blur-sm border-0">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${category.gradient}`} />
                    
                    <div className="p-6 relative z-10">
                      <div className={`w-16 h-16 rounded-2xl ${category.iconBg} bg-opacity-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-primary">
                          {category.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium group/link">
                        <span>View Products</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
              onClick={() => window.open('/product-catalog.pdf', '_blank')}
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              Download Product Catalogue
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 