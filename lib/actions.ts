"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"


export const createCategory = async (
    input: {
        categoryName: string
        categoryPrice: string
    }) => {
    await prisma.category.create({
        data: input
    })
    revalidatePath("/category")
}

export const deleteCategory = async (categoryId: number) => {
    await prisma.category.delete({
        where: {
            categoryId: categoryId
        }
    })
    revalidatePath("/category")
}