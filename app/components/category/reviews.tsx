import { Category } from "@prisma/client"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or API
interface Props {
    category: Category | null
}

export default function CategoryCart({ category }: Props) {

    return (
        <>
            {category && (
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            {/* <Image
                                src={category?.categoryPrice || "placeholder.svg"}
                                alt={category?.categoryName!}
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-lg shadow-md"
                            /> */}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{category.categoryName}</h1>
                            <p className="text-xl text-gray-600 mb-4">${Number(category.categoryPrice)?.toFixed(2)}</p>
                            <p className="text-gray-700 mb-6">{category.categoryName}</p>
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

