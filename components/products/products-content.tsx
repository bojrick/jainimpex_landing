"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/products-data"

export function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  // Find the initial category based on URL parameter
  const findCategoryById = (id: string) => categories.find(cat => cat.id === id)
  const initialCategory = categoryParam ? findCategoryById(categoryParam) : categories[0]
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      const category = findCategoryById(categoryParam)
      if (category) {
        setSelectedCategory(category)
      }
    }
  }, [categoryParam])

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shrink-0">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
          <nav className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                  selectedCategory?.id === category.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{selectedCategory?.title}</h1>
            <p className="text-muted-foreground">{selectedCategory?.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory?.products.map((product) => (
              <Card key={product.id} className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary/50 rounded-full mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 