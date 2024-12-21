"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container px-4 mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917942825807" className="flex items-center gap-2 hover:text-white/90">
              <Phone className="h-4 w-4" />
              +91 79428 25807
            </a>
            <a href="mailto:info@jainimpex.com" className="flex items-center gap-2 hover:text-white/90">
              <Mail className="h-4 w-4" />
              info@jainimpex.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Jain Impex Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-primary">Jain Impex</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 