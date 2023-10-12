import { Product } from "../types/product";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async (endpoint: string): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`);
  const {products} = await res.json();

  return products;
}