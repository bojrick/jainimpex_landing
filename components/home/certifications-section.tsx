'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Shield, CheckCircle, FileCheck, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  {
    icon: <Award className="w-8 h-8" />,
    name: "ISO 9001:2015",
    description: "Quality Management System Certification",
    validUntil: "2025",
    benefits: [
      "Standardized quality processes",
      "Regular quality audits",
      "Continuous improvement",
    ],
    certificateUrl: "/certificates/iso-9001.pdf",
    gradient: "from-[#FDE68A] via-[#FCD34D] to-[#F59E0B]",
    iconBg: "bg-amber-100",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    validUntil: "2024",
    benefits: [
      "Environmental compliance",
      "Sustainable practices",
      "Waste reduction",
    ],
    certificateUrl: "/certificates/iso-14001.pdf",
    gradient: "from-[#86EFAC] via-[#4ADE80] to-[#22C55E]",
    iconBg: "bg-green-100",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    name: "OHSAS 18001",
    description: "Occupational Health and Safety Management",
    validUntil: "2024",
    benefits: [
      "Workplace safety",
      "Risk management",
      "Employee well-being",
    ],
    certificateUrl: "/certificates/ohsas-18001.pdf",
    gradient: "from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]",
    iconBg: "bg-blue-100",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    name: "BIS Certification",
    description: "Bureau of Indian Standards Quality Certification",
    validUntil: "2025",
    benefits: [
      "Indian quality standards",
      "Product compliance",
      "Market credibility",
    ],
    certificateUrl: "/certificates/bis.pdf",
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

export function CertificationsSection() {
  const viewCertificate = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/50" />
      <div className="relative z-10">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Quality Assurance & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our commitment to excellence is backed by international certifications
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={item}>
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br bg-white/80 backdrop-blur-sm border-0">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${cert.gradient}`} />
                  
                  <div className="p-6 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${cert.iconBg} bg-opacity-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-primary">
                        {cert.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {cert.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {cert.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {cert.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm text-muted-foreground">
                        Valid until: {cert.validUntil}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn text-primary hover:text-primary/90 p-0"
                        onClick={() => viewCertificate(cert.certificateUrl)}
                      >
                        <span className="mr-2">View</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 