import CategoryCart from "@/app/components/category/cart"
import prisma from "@/prisma/db"

export default async({ params }: { params: { id: string } })=>{
   const category = await prisma.category.findUnique({
    where: {
        categoryId: Number(params.id)
    }
   });

    return <CategoryCart category={category}/>
}