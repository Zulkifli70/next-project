import { getAllCategories } from "../lib/categories";
import { Category } from "../types";
import Link from "next/link";

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allCategory = getAllCategories();
  return (
    <section>
      <div className="flex gap-3">
        <Link href={"/3d-models"}>All</Link>
        {allCategory.map((category: Category) => (
          <Link
            key={category.slug}
            href={`/3d-models/categories/${category.slug}`}
          >
            {" "}
            {category.displayName}{" "}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
}
