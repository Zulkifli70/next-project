import type { ReactNode, HTMLAttributes } from "react";

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  displayName: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

// Page Types
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type ModelsGridProps = {
  title: string;
  models: Model[];
};

export type PillProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive: boolean;
};

export type GetModelsParams = {
  category?: string;
};

export type ModelsPageProps = {
  searchParams: {
    q?: string;
  };
};
