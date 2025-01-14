"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/products-data"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { 
  CircleDot,
  Box,
  Layers3,
  Hammer,
  ChevronRight
} from "lucide-react"

type CategoryId = "round-bars" | "aluminum-sheets" | "copper-products" | "galvanizing"

const categoryIcons: Record<CategoryId, React.ReactNode> = {
  "round-bars": <CircleDot className="h-8 w-8" />,
  "aluminum-sheets": <Layers3 className="h-8 w-8" />,
  "copper-products": <Box className="h-8 w-8" />,
  "galvanizing": <Hammer className="h-8 w-8" />
}

export function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  useEffect(() => {
    const categoryId = searchParams.get("category")
    if (categoryId) {
      const category = categories.find((cat) => cat.id === categoryId)
      if (category) {
        setSelectedCategory(category)
      }
    }
  }, [searchParams])

  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed Category Navigation */}
      <div className="fixed left-0 top-20 z-50">
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="flex flex-col gap-2 bg-background/95 backdrop-blur-sm p-2 rounded-r-lg shadow-lg border-r border-y"
        >
          {categories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Button
                variant={selectedCategory.id === category.id ? "default" : "ghost"}
                size="icon"
                className={cn(
                  "relative z-10 transition-all duration-200 h-12 w-12 flex items-center justify-center",
                  selectedCategory.id === category.id 
                    ? "bg-primary hover:bg-primary/90"
                    : "hover:bg-accent"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                <div className={cn(
                  selectedCategory.id === category.id 
                    ? "text-white" 
                    : "text-muted-foreground group-hover:text-primary"
                )}>
                  {categoryIcons[category.id as CategoryId]}
                </div>
              </Button>
              
              <AnimatePresence>
                {hoveredCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full ml-2 whitespace-nowrap z-50"
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border">
                      <span className="text-sm font-medium">{category.title}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container py-8 pl-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{selectedCategory.title}</h1>
          <p className="text-muted-foreground">{selectedCategory.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${selectedCategory.id}/${product.id}`}
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 