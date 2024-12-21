import { HeroSection } from "@/components/home/hero-section"
import { ProductCategoriesSection } from "@/components/home/product-categories-section"
import { CertificationsSection } from "@/components/home/certifications-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="space-y-4">
        <ProductCategoriesSection />
      </div>
      <div className="space-y-2">
        <CertificationsSection />
      </div>
      <div className="space-y-2">
        <TestimonialsSection />
      </div>
    </main>
  )
}
