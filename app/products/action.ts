import prisma from "@/lib/db"
import { Product } from "@/lib/generated/prisma"
import { revalidatePath } from "next/cache"

export const createproduct = async (
    input: Product) => {
    await prisma.product.create({
        data: input
    })
    revalidatePath("/product")
} 