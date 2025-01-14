"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/products-data"

interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

interface ProductDetails {
  id: string;
  name: string;
  description: string;
  specifications: string[];
  image: string;
  categoryTitle: string;
  features: string[];
  applications: string[];
  certifications: string[];
}

export default function ProductPage({ params }: ProductPageProps) {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const category = categories.find(cat => cat.id === params.category)
    const product = category?.products.find(prod => prod.id === params.product)
    
    if (product) {
      setProductDetails({
        ...product,
        categoryTitle: category?.title || "",
        features: [
          "High electrical conductivity",
          "Excellent thermal conductivity",
          "Good corrosion resistance",
          "Superior machinability",
          "Uniform properties throughout",
        ],
        applications: [
          "Electrical components",
          "Power distribution",
          "Industrial machinery",
          "Construction",
          "Marine applications",
        ],
        certifications: [
          "ISO 9001:2015",
          "RoHS Compliant",
          "REACH Compliant",
        ],
      })
    }
    setLoading(false)
  }, [params.category, params.product])

  if (loading) {
    return <ProductLoading />
  }

  if (!productDetails) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-6 px-4 lg:py-8 lg:px-6">
      <div className="container">
        {/* Back Button */}
        <Link 
          href={`/products?category=${params.category}`} 
          className="inline-flex items-center text-primary mb-6 lg:mb-8 hover:text-primary/90 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Image */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={productDetails.image}
                alt={productDetails.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2">{productDetails.categoryTitle}</div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4">{productDetails.name}</h1>
              <p className="text-muted-foreground text-base lg:text-lg">{productDetails.description}</p>
            </div>

            {/* Specifications */}
            <Card className="p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Technical Specifications</h2>
              <div className="grid gap-4">
                {productDetails.specifications.map((spec, index) => {
                  const [label, value] = spec.split(": ")
                  return (
                    <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b last:border-0">
                      <span className="font-medium">{label}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Features and Applications */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-4 lg:p-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {productDetails.features.map((feature) => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-4 lg:p-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Applications</h2>
                <ul className="space-y-2">
                  {productDetails.applications.map((application) => (
                    <li key={application} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Certifications */}
            <Card className="p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Certifications</h2>
              <div className="flex flex-wrap gap-2">
                {productDetails.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductLoading() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-6 px-4 lg:py-8 lg:px-6">
      <div className="container">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-6 lg:mb-8" />
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gray-100 animate-pulse" />
          </Card>
          <div className="space-y-6">
            <div>
              <div className="h-4 w-24 bg-gray-100 rounded animate-pulse mb-2" />
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-20 bg-gray-100 rounded animate-pulse" />
            </div>
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4 lg:p-6">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-4 bg-gray-100 rounded animate-pulse" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 