"use client"

interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { category, product } = params;

  return (
    <main className="py-8 px-4">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">
          Product: {product}
        </h1>
        <p className="text-lg text-muted-foreground">
          Category: {category}
        </p>
      </div>
    </main>
  )
} 