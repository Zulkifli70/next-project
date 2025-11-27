"use client";

import React from "react";
import NavLink from "./NavLink";
import { getAllCategories } from "../lib/categories";
import { Category } from "../types";
import { usePathname } from "next/navigation";

function CategoryFilter() {
  const allCategory = getAllCategories();
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-3 p-5 md:flex-col">
      <NavLink href={"/3d-models"} isActive={pathname === "/3d-models"}>
        All
      </NavLink>
      {allCategory.map((category: Category) => (
        <NavLink
          key={category.slug}
          href={`/3d-models/categories/${category.slug}`}
          isActive={pathname === `/3d-models/categories/${category.slug}`}
        >
          {category.displayName}
        </NavLink>
      ))}
    </div>
  );
}

export default CategoryFilter;
