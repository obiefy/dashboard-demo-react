import { useEffect, useState } from "react"
import { Product } from "../types/product";
import { fetchProducts } from "../utils/api";


export const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProducts() {
      // TODO: make pagination
      const limit = 5;
      setLoading(true);
      const productsData = await fetchProducts(`products?limit=${limit}`);
      setProducts(productsData);
      setLoading(false);
    }
    getProducts();
  }, []);

  return { loading, products };
}