import { useProducts } from "../hooks/products";

export default function Products () {

  const {loading, products, error} = useProducts();
   
  return (
    <div>
      {loading && <div>Loading</div>}
      {error && !loading && <div>{error}</div>}
      {!loading && <div>{JSON.stringify(products, null, 2)}</div>}
    </div>
  );
}