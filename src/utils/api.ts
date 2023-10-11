import { Product } from "../types/product";

export const API_BASE_URL = 'https://dummyjson.com';
export const fetchProducts = async (endpoint: string): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`);
  const {products} = await res.json();

  return products;
}