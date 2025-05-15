"use client"
import { useState } from 'react';
import { createCategory, deleteCategory } from '@/lib/actions';

interface Props {
    data: {
        categoryId: number
        categoryName: string
        categoryPrice: string
    }[];
}

const CategoryPage = ({ data }: Props) => {
    const [category, setCategory] = useState<{ name: string; price: string }>({ name: '', price: '' });

    async function handleCreateCategory(e: React.FormEvent) {
        e.preventDefault();
        if (!category.name || !category.price) {
            return alert("Please fill in both fields");
        }

        await createCategory({
            categoryName: category.name,
            categoryPrice: category.price
        });

        setCategory({ name: '', price: '' });
    }

    async function handleDeleteCategory(id: number) {
        const confirmDelete = confirm("Are you sure you want to delete this category?");
        if (!confirmDelete) return;

        await deleteCategory(id);
    }

    return (
        <div className='flex flex-col items-center justify-center gap-10 bg-gray-100 p-4'>
            {/* CATEGORY TABLE */}
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'>Category ID</th>
                        <th className='border px-4 py-2'>Category Name</th>
                        <th className='border px-4 py-2'>Category Price</th>
                        <th className='border px-4 py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((category) => (
                        <tr key={category.categoryId}>
                            <td className='border px-4 py-2'>{category.categoryId}</td>
                            <td className='border px-4 py-2'>{category.categoryName}</td>
                            <td className='border px-4 py-2'>{category.categoryPrice}</td>
                            <td className='border px-4 py-2 text-center'>
                                <button
                                    onClick={() => handleDeleteCategory(category.categoryId)}
                                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* CREATE FORM */}
            <form onSubmit={handleCreateCategory} className='mb-6 flex flex-col gap-2 bg-white p-4 rounded shadow-md w-full max-w-md'>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={category.name}
                    onChange={(e) => setCategory({ ...category, name: e.target.value })}
                    className='border px-3 py-2 rounded'
                />
                <input
                    type="number"
                    placeholder="Category Price"
                    value={category.price}
                    onChange={(e) => setCategory({ ...category, price: e.target.value })}
                    className='border px-3 py-2 rounded'
                />
                <button
                    type="submit"
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                >
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default CategoryPage;
