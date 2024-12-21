"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const highlights = [
  "ISO 9001:2015 Certified",
  "Pan-India Delivery",
  "Custom Specifications",
  "Expert Technical Support",
]

const featuredProducts = [
  {
    name: "Copper Round Bar",
    category: "Round Bars",
    price: "Rs. 685/kg",
    image: "/products/copper-bars.jpg",
    specs: [
      "4 inches diameter",
      "Cold Rolled",
      "Industrial Grade",
    ],
  },
  {
    name: "Aluminium Sheet",
    category: "Sheets",
    price: "Rs. 245/kg",
    image: "/products/aluminium-sheets.jpg",
    specs: [
      "Custom thickness",
      "High durability",
      "Corrosion resistant",
    ],
  },
  {
    name: "Copper Busbar",
    category: "Copper Products",
    price: "Rs. 750/kg",
    image: "/products/copper-busbar.jpg",
    specs: [
      "High conductivity",
      "Custom length",
      "Industrial quality",
    ],
  },
  {
    name: "Galvanized Steel",
    category: "Galvanizing",
    price: "Rs. 125/kg",
    image: "/products/galvanized-steel.jpg",
    specs: [
      "Uniform coating",
      "Corrosion protection",
      "Long service life",
    ],
  },
  {
    name: "Copper Nickel Alloy",
    category: "Alloys",
    price: "Rs. 890/kg",
    image: "/products/copper-nickel.jpg",
    specs: [
      "Marine grade",
      "Heat resistant",
      "Custom composition",
    ],
  },
]

export function HeroSection() {
  const [currentProduct, setCurrentProduct] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % featuredProducts.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const product = featuredProducts[currentProduct]

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/50" />
      </div>

      <div className="container relative px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Leading Industrial Manufacturer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-primary">Industrial Metal Products</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Delivering Excellence in Copper, Aluminium, and Alloy Products with Precision and Quality
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="text-primary h-3 w-3" />
                  </div>
                  <span className="text-gray-300 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Featured Product Card */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Featured Product</h3>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {product.category}
                </span>
              </div>
              
              <div className="aspect-video bg-gray-800 rounded-lg mb-6 relative overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-lg">{product.name}</span>
                  <span className="text-primary font-semibold">{product.price}</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white hover:text-primary">
                  View Details
                </Button>
              </div>

              {/* Product Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProduct(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentProduct ? "bg-primary" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 