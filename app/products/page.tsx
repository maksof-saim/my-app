import React from 'react'
import Image from 'next/image'

const page = () => {


    const phone = [
        {
            productName: "",
            productCompany: "",
            productColor : "",
            image : "",
            price : ""
        }
    ]

    const image = "/images/mobile.jpeg"

    return (
        <div className='main'>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >

                        <div className="p-4">
                            <Image
                                src={image}
                                alt={"name"}
                                width={500}
                                height={200}
                                className="w-full h-40 object-cover"
                            />
                            <h3 className="text-lg font-semibold mb-2 ">first phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">second phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">third phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">fourth phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">fifth phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">six phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">seven phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">seven phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">eight phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">nine phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">Ten phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">eleven phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">twelve phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">thirteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">fourteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">fifteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">sixteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">seventeen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">eighteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">nineteen phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 ">twenty phone</h3>
                            <p className="text-gray-600">$phoneprice</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default page