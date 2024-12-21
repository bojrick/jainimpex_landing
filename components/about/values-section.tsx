"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Clock, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control at every stage of production",
    gradient: "from-[#FDE68A] via-[#FCD34D] to-[#F59E0B]",
    iconBg: "bg-amber-100",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timely Delivery",
    description: "Committed to meeting deadlines with efficient logistics",
    gradient: "from-[#86EFAC] via-[#4ADE80] to-[#22C55E]",
    iconBg: "bg-green-100",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Satisfaction",
    description: "Dedicated support and personalized solutions for every client",
    gradient: "from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Sustainability",
    description: "Environmentally conscious manufacturing processes",
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

export function ValuesSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80" />
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The principles that guide our commitment to excellence
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={item}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br bg-white/80 backdrop-blur-sm border-0">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${value.gradient}`} />
                
                <div className="p-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${value.iconBg} bg-opacity-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 