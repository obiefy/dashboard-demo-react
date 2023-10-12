import { useEffect, useState } from "react"
import { Product } from "../types/product";
import { fetchProducts } from "../utils/api";


export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProducts() {
      // TODO: make pagination
      // const limit = 5;
      setLoading(true);
      setError('');
      try {
        const productsData = await fetchProducts();
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
    getProducts();
  }, []);

  return { loading, error, products };
}