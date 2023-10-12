import { useEffect, useState } from "react"
import { Product, ProductsFilter } from "../types/product";
import { fetchProducts } from "../utils/api";

export const useProducts = ({ category }: ProductsFilter) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    setLoading(true);
    setError('');
    try {
      const productsData = await fetchProducts({category});
      setProducts(productsData);
    } catch(e) {
      if(e instanceof Error) {
        setError(e.message);
      } else {
        setError(`Unexpected error: ${e}`)
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [category]);

  return { loading, error, products };
}