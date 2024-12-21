"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+91-7942825807", "Toll Free: 1800-XXX-XXXX"],
    gradient: "from-[#FDE68A] via-[#FCD34D] to-[#F59E0B]",
    iconBg: "bg-amber-100",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["info@jainimpex.com", "sales@jainimpex.com"],
    gradient: "from-[#86EFAC] via-[#4ADE80] to-[#22C55E]",
    iconBg: "bg-green-100",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: [
      "Unit No. 1, Behind Building No. 6",
      "Agarwal Udhyog Nagar Extn. 2",
      "Vasai East, Vasai - 401208",
      "Maharashtra, India"
    ],
    gradient: "from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed"
    ],
    gradient: "from-[#F9A8D4] via-[#F472B6] to-[#EC4899]",
    iconBg: "bg-pink-100",
  },
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

export function ContactInfoSection() {
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
            Contact Information
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us through any of these channels
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info) => (
            <motion.div key={info.title} variants={item} className="h-full">
              <Card className="h-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${info.gradient}`} />
                
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg ${info.iconBg} flex items-center justify-center mb-4`}>
                    <div className="text-primary">
                      {info.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1.5 text-sm">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 