"use client"
import { createCategory } from '@/lib/actions';
import React, { useEffect, useState } from 'react'



interface Props {
    data:  {
        categoryId: number
        categoryName: string
        categoryPrice: string
    }[];
}

const CategoryPage = ({ data }: Props) => {

    async function handleCreateCategory() {
        await createCategory("test", "1000")
    }

    // const [categories, setCategories] = useState<Category[]>([])

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const response = await fetch('http://localhost:5001/api/category/getAll')
    //         console.log(response)
    //         const data = await response.json()
    //         setCategories(data.data)
    //     }
    //     fetchCategories()
    // }, [])

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className='text-2xl font-bold mb-4'>Categories</h1>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'>Category ID</th>
                        <th className='border px-4 py-2'>Category Name</th>
                        <th className='border px-4 py-2'>Category Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((category) => (
                        <tr key={category.categoryId}>
                            <td className='border px-4 py-2'>{category.categoryName}</td>
                            <td className='border px-4 py-2'>{category.categoryPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryPage