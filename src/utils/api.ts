import { Product, ProductsFilter } from "../types/product";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async ({ category }: ProductsFilter): Promise<Product[]> => {
  const endpoint = category ? `products/category/${category}` : 'products'
  const res = await fetch(`${API_BASE_URL}/${endpoint}?limit=6`);
  const {products} = await res.json();

  return products;
}


export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`);
  const categories = await res.json();

  return categories;
}
