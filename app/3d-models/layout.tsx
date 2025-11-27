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
    <section className="relative flex flex-col min-h-screen md:flex-row">
      <div className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="flex flex-wrap gap-3 p-5 md:flex-col">
          <Link
            href={"/3d-models"}
            className="border px-3 py-1 rounded-lg md:border-none"
          >
            All
          </Link>
          {allCategory.map((category: Category) => (
            <Link
              key={category.slug}
              href={`/3d-models/categories/${category.slug}`}
              className="border px-3 py-1 rounded-lg md:border-none"
            >
              {" "}
              {category.displayName}{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4 md:ml-64">{children}</div>
    </section>
  );
}
