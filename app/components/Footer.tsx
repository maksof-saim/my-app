import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black  text-white py-8 border-t-black border-t-2">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-white hover:text-blue-400">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-blue-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/faq" className="text-white hover:text-blue-400">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-white hover:text-blue-400">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-white hover:text-blue-400">
                                    Returns
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white hover:text-blue-400">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-400">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-400">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-white">© 2023 Accessory Haven. All rights reserved.</div>
            </div>
        </footer>
    )
}

