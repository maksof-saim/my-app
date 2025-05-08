import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const products = [
    {
        id: "1",
        name: "Premium Phone Case",
        price: 19.99,
        description: "A high-quality phone case that offers superior protection.",
        image: "/images/pcover.jpeg",
    },
    {
        id: "2",
        name: "Wireless Earbuds",
        price: 89.99,
        description: "Experience crystal-clear audio with these comfortable wireless earbuds.",
        image: "/images/placeholder.svg",
    }, {
        id: "3",
        name: "Fast Charging Cable",
        price: 14.99,
        description: "Experience crystal-clear cable with these comfortable",
        image: "/images/cables.jpeg",
    },
    {
        id: "4",
        name: "Portable Power Bank",
        price: 14.99,
        description: "Experience crystal-clear cable with these comfortable",
        image: "/images/powerbank.jpg",
    },
]

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id)

    if (!product) {
        notFound()
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

