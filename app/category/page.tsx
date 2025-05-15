import prisma from "@/lib/db";
import CategoryPage from "../components/category/category-table";

export default async () => {
    const data = await prisma.category.findMany({
        select: {
            categoryId: true,
            categoryName: true,
            categoryPrice: true
        }
    });
    return <CategoryPage data={data} />
}