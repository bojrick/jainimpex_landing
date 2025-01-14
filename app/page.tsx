import Hero from "@/components/home/Hero"
import { ProductCategoriesSection } from "@/components/home/product-categories-section"
import { CertificationsSection } from "@/components/home/certifications-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
// import { FooterSection } from "@/components/shared/footer-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="space-y-4">
        <ProductCategoriesSection />
      </div>
      <div className="space-y-2">
        <CertificationsSection />
      </div>
      <div className="space-y-2">
        <TestimonialsSection />
      </div>
      {/* <div className="space-y-2">
        <FooterSection />
      </div> */}
    </main>
  )
}
