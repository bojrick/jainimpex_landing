"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Exceptional quality and timely delivery. Their round bars have consistently met our stringent manufacturing requirements.",
    author: "Rajesh Kumar",
    company: "Industrial Solutions Ltd",
    rating: 5,
    gradient: "from-[#FDE68A] via-[#FCD34D] to-[#F59E0B]",
    iconBg: "bg-amber-100",
  },
  {
    quote: "Their custom specifications service is outstanding. The technical team's expertise in aluminum sheets is unmatched.",
    author: "Priya Sharma",
    company: "Engineering Works",
    rating: 5,
    gradient: "from-[#86EFAC] via-[#4ADE80] to-[#22C55E]",
    iconBg: "bg-green-100",
  },
  {
    quote: "The copper products we source from Jain Impex have superior conductivity and meet all industry standards.",
    author: "Amit Patel",
    company: "Manufacturing Co.",
    rating: 5,
    gradient: "from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]",
    iconBg: "bg-blue-100",
  },
  {
    quote: "Their hot-dip galvanizing service has significantly improved our products' durability and corrosion resistance.",
    author: "Suresh Mehta",
    company: "Tech Industries",
    rating: 5,
    gradient: "from-[#F9A8D4] via-[#F472B6] to-[#EC4899]",
    iconBg: "bg-pink-100",
  },
  {
    quote: "Excellent support throughout the procurement process. Their team's response time is remarkable.",
    author: "Vikram Singh",
    company: "Power Systems Corp",
    rating: 5,
    gradient: "from-[#C084FC] via-[#A855F7] to-[#9333EA]",
    iconBg: "bg-purple-100",
  },
  {
    quote: "The quality control measures at Jain Impex ensure we receive perfectly calibrated products every time.",
    author: "Neha Desai",
    company: "Precision Tools Ltd",
    rating: 5,
    gradient: "from-[#6EE7B7] via-[#3BD7B3] to-[#22A699]",
    iconBg: "bg-teal-100",
  },
  {
    quote: "Their expertise in metal manufacturing has helped us optimize our production processes significantly.",
    author: "Rahul Kapoor",
    company: "Automotive Parts Inc",
    rating: 5,
    gradient: "from-[#FDA4AF] via-[#FB7185] to-[#F43F5E]",
    iconBg: "bg-rose-100",
  },
  {
    quote: "We've been impressed by their commitment to sustainability and environmental standards.",
    author: "Anita Reddy",
    company: "Green Manufacturing",
    rating: 5,
    gradient: "from-[#94A3B8] via-[#64748B] to-[#475569]",
    iconBg: "bg-slate-100",
  },
  {
    quote: "Their international certification standards have made export compliance seamless for our business.",
    author: "Mohammed Khan",
    company: "Global Exports Ltd",
    rating: 5,
    gradient: "from-[#FB923C] via-[#F97316] to-[#EA580C]",
    iconBg: "bg-orange-100",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.author}
                className={`${
                  idx === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
                } transition-all duration-500 ease-in-out`}
              >
                <Card className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                    <blockquote className="text-lg text-muted-foreground mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <cite className="not-italic font-semibold">
                        {testimonial.author}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 