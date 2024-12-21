import { ContactHeroSection } from "@/components/contact/hero-section"
import { ContactInfoSection } from "@/components/contact/info-section"
import { EnquiryFormSection } from "@/components/contact/enquiry-form"
import { FaqSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoSection />
      <EnquiryFormSection />
      <FaqSection />
    </main>
  )
} 