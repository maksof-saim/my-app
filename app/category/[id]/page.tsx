import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const categories = [
    {
        id: "1",
        name: "Phone Case",
        price: 19.99,
        description: "A high-quality phone case that offers superior protection.",
        image: "/images/simple.jpeg",
    },
    {
        id: "2",
        name: "Speakers",
        price: 89.99,
        description: "Experience crystal-clear audio with these comfortable wireless earbuds.",
        image: "/images/speakers.webp",
    }, {
        id: "3",
        name: "Chargers",
        price: 14.99,
        description: "Experience crystal-clear cable with these comfortable",
        image: "/images/charger.jpg",
    },
    {
        id: "4",
        name: "Wireless Headphone",
        price: 14.99,
        description: "Experience crystal-clear cable with these comfortable",
        image: "/images/headphones.avif",
    },
]

export default function categoryPage({ params }: { params: { id: string } }) {
    const category = categories.find((p) => p.id === params.id)

    if (!category) {
        notFound()
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">${category.price.toFixed(2)}</p>
                    <p className="text-gray-700 mb-6">{category.description}</p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

