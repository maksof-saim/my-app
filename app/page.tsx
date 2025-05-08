import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Premium Phone Case", price: 19.99, image: "/images/pcover.jpeg" },
    { id: 2, name: "Wireless Earbuds", price: 89.99, image: "/images/earbuds.jpeg" },
    { id: 3, name: "Fast Charging Cable", price: 14.99, image: "/images/cables.jpeg" },
    { id: 4, name: "Portable Power Bank", price: 49.99, image: "/images/powerbank.jpg" },
  ]

  const categories = [
    { id: 1, name: "Phone Cases", image: "/images/simple.jpeg", price: 19.99 },
    { id: 2, name: "Speakers", image: "/images/speakers.webp", price: 20.01 },
    { id: 3, name: "Chargers", image: "/images/charger.jpg", price: 19.99 },
    { id: 4, name: "Wireless Headphone", image: "/images/headphones.avif", price: 19.99 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Accessory Haven</h1>
        <p className="text-xl text-gray-600">Discover the perfect accessories for your mobile devices.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.image || "placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 ">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-2 inline-block bg-black text-white px-4 py-2 rounded transition-colors duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-left  ">{category.name} </h3>
                <p className="text-gray-600">${category.price.toFixed(2)}</p>
                <Link
                  href={`/category/${category.id}`}
                  className="mt-2 inline-block bg-black text-white px-4 py-2 rounded transition-colors duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

