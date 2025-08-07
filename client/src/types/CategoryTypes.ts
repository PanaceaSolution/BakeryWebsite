export interface CategoryDescription {
  title: string;
  subtitle: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  categoryImage: string;
  description: CategoryDescription;
  image: string;
  createdAt: string;
}

export interface CategoryResponse {
  message: string;
  data: Category[];
}