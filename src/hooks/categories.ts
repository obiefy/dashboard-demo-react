import { useEffect, useState } from "react"
import { fetchCategories } from "../utils/api";


export const useCategories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      setError('');
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch(e) {
        if(e instanceof Error) {
          setError(e.message);
        } else {
          setError(`Unexpected error: ${e}`)
        }
      }
      setLoading(false);
    }
    getCategories();
  }, []);

  return { loading, error, categories };
}