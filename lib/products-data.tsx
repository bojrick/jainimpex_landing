import { CircleDot, Layers3, Box, Hammer } from "lucide-react"

export const categories = [
  {
    id: "round-bars",
    title: "Round Bars",
    icon: <CircleDot className="w-5 h-5" />,
    description: "High-quality metal round bars for industrial applications",
    products: [
      {
        id: "copper-round-bars",
        name: "Copper Round Bars",
        description: "Premium quality copper round bars for industrial use",
        specifications: ["Diameter: 10-100mm", "Length: Custom", "Grade: C11000"],
        image: "/products/copper-bars.jpg",
      },
      {
        id: "aluminum-round-bars",
        name: "Aluminum Round Bars",
        description: "Lightweight aluminum round bars for various applications",
        specifications: ["Diameter: 8-80mm", "Length: Standard/Custom", "Grade: 6061"],
        image: "/products/aluminum-bars.jpg",
      },
    ]
  },
  {
    id: "aluminum-sheets",
    title: "Aluminium Sheets",
    icon: <Layers3 className="w-5 h-5" />,
    description: "Premium quality aluminium sheets and coils",
    products: [
      {
        id: "aluminum-plain-sheets",
        name: "Plain Aluminum Sheets",
        description: "Standard aluminum sheets for general purposes",
        specifications: ["Thickness: 0.5-5mm", "Width: 1000-1500mm", "Grade: 1100"],
        image: "/products/aluminum-sheets.jpg",
      },
    ]
  },
  {
    id: "copper-products",
    title: "Copper Products",
    icon: <Box className="w-5 h-5" />,
    description: "Specialized copper products for various applications",
    products: [
      {
        id: "copper-busbar",
        name: "Copper Busbar",
        description: "High conductivity copper busbars for electrical applications",
        specifications: ["Width: 10-100mm", "Thickness: 2-10mm", "Purity: 99.9%"],
        image: "/products/copper-busbar.jpg",
      },
    ]
  },
  {
    id: "galvanizing",
    title: "Hot Dip Galvanizing",
    icon: <Hammer className="w-5 h-5" />,
    description: "Professional hot dip galvanizing services",
    products: [
      {
        id: "galvanized-steel",
        name: "Galvanized Steel Components",
        description: "Corrosion-resistant galvanized steel parts",
        specifications: ["Coating Thickness: 45-85μm", "Process: Hot Dip", "Standard: ISO 1461"],
        image: "/products/galvanized-steel.jpg",
      },
    ]
  },
] 