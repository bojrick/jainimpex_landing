"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react"

const navigation = {
  products: [
    { name: "Round Bars", href: "/products/round-bars" },
    { name: "Aluminium Sheets", href: "/products/aluminium-sheets" },
    { name: "Copper Products", href: "/products/copper-products" },
    { name: "Hot Dip Galvanizing", href: "/products/galvanizing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Certifications", href: "/about#certifications" },
  ],
  support: [
    { name: "Get a Quote", href: "/contact" },
    { name: "Technical Support", href: "/contact#support" },
    { name: "Product Catalogue", href: "/products" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Jain Impex</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>123 Industrial Area, Ahmedabad, Gujarat, India - 380001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+917942825807" className="hover:text-white">+91 79428 25807</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@jainimpex.com" className="hover:text-white">info@jainimpex.com</a>
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Products</h3>
            <ul className="space-y-2 text-sm">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white p-2"
              aria-label={item.name}
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 Jain Impex. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white py-1">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white py-1">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 