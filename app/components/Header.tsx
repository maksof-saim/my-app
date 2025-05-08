"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "@/public/images/logo4-removebg-preview.png"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-black shadow-md ">
            <div className="flex">
                <Image
                    src={logo}
                    alt="logo"
                    height={100}
                    width={140}
                    priority
                    quality={100}
                    className="ml-8"
                />

                <div className="container mx-auto  px-4 py-4 flex items-center justify-between h-30 ">
                    <Link href="/" className="text-2xl  font-bold text-white -ml-[50px]">
                        Accessory Haven
                    </Link>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className=" w-[500px] pl-8 pr-4 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="  absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>

                    <div className="hidden md:flex items-center space-x-4  ">
                        <nav>
                            <ul className="flex space-x-8">
                                <li>
                                    <Link href="/" className="text-white hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="text-white hover:underline">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white hover:underline">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white hover:underline">
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white hover:underline">
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Link href="/cart" className="text-white">
                        <ShoppingCart size={24} />
                    </Link>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4">
                    <nav className="container mx-auto px-4">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="block text-gray-600 hover:text-gray-800">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="block text-gray-600 hover:text-gray-800">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block text-gray-600 hover:text-gray-800">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-4 px-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <Link href="/cart" className="block mt-4 px-4 text-gray-600 hover:text-gray-800">
                        <ShoppingCart size={24} className="inline-block mr-2" /> Cart
                    </Link>
                </div>
            )}
        </header>
    )
}

