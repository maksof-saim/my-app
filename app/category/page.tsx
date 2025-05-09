import prisma from "@/prisma/db"
import CategoryPage from "../components/category/category-table";

export default async () => {
    const data = await prisma.category.findMany({
        select: {
            categoryId: true,
            categoryName: true,
            categoryPrice: true
        }
    });
    console.log(data);
    return <CategoryPage data={data} />
}