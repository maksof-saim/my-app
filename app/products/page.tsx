"use client"
import React, { useEffect, useState } from 'react'


interface Product {
    productId: number;
    productName: string;
    userEmail: string;
    userPhone: number;
}


const productPage = () => {

    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:5001/api/products')
            const data = await response.json()
            console.log(data, "data")
            setProducts(data.data)
        }
        fetchProducts()
    }, [])


    return (
        <>
            <div className="main">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.productId}
                                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                            >
                                <h1>{product.productName}</h1>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default productPage