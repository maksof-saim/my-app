"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Premium Phone Case", price: 19.99, quantity: 2, image: "/placeholder.svg" },
        { id: 2, name: "Wireless Earbuds", price: 89.99, quantity: 1, image: "/placeholder.svg" },
    ]);

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems(
            cartItems
                .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
                .filter((item) => item.quantity > 0)
        );
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-xl text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="rounded-md" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-700">
                                        -
                                    </button>
                                    <span className="font-semibold">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-700">
                                        +
                                    </button>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                        <Link
                            href="/checkout"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
