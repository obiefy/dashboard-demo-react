import { useProducts } from "../hooks/products";

export default function Products () {

  const {loading, products} = useProducts();
   
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && <div>{JSON.stringify(products, null, 2)}</div>}
    </div>
  );
}