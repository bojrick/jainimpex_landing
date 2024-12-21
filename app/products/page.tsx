"use client"

import { Suspense } from "react"
import { ProductsContent } from "@/components/products/products-content"
import { Card } from "@/components/ui/card"

function ProductsLoading() {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <div className="w-64 bg-white border-r border-gray-200 shrink-0">
        <div className="p-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-96 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video bg-gray-100 animate-pulse" />
                <div className="p-4">
                  <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-full bg-gray-100 rounded animate-pulse mb-4" />
                  <div className="space-y-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-3 w-full bg-gray-50 rounded animate-pulse" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
} 