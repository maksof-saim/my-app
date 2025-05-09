"use server"

import prisma from "@/prisma/db"
import { revalidatePath } from "next/cache"


export const createCategory = async (categoryName: string, categoryPrice: string) => {
    await prisma.category.create({
        data: {
            categoryName,
            categoryPrice
        }
    })
    revalidatePath("/category")
}