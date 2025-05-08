"use client"

import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log("Form submitted:", formData)
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-2">Email: info@accessoryhaven.com</p>
                    <p className="mb-2">Phone: (123) 456-7890</p>
                    <p className="mb-2">Address: 123 Accessory Street, Tech City, TC 12345</p>
                </div>
            </div>
        </div>
    )
}

