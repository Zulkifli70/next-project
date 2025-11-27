import type { CategoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/app/lib/categories";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  return <h1>{category.displayName}</h1>;
}
