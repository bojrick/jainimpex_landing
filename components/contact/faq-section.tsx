"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are your delivery timelines?",
    answer: "Our standard delivery timeline is 7-10 business days for domestic orders and 15-20 business days for international orders. However, this may vary depending on the product availability and shipping destination."
  },
  {
    question: "Do you provide sample products?",
    answer: "Yes, we provide sample products for quality assessment. Please contact our sales team with your requirements, and we'll arrange samples for you to evaluate before placing a bulk order."
  },
  {
    question: "What are your payment terms?",
    answer: "We accept various payment methods including bank transfer, letter of credit (L/C), and advance payment. The specific terms can be discussed based on your order value and requirements."
  },
  {
    question: "Do you provide quality certificates?",
    answer: "Yes, we provide all necessary quality certificates including ISO, material test certificates, and product-specific certifications as required by industry standards."
  },
  {
    question: "Can you customize products according to specifications?",
    answer: "Yes, we offer customization services for most of our products. Please share your detailed specifications with our team, and we'll work with you to meet your requirements."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "MOQ varies by product category. Please contact our sales team for specific MOQ requirements for your products of interest."
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
} 