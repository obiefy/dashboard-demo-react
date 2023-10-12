import { useRef, useState } from "react";
import { useProducts } from "../hooks/products";
import Categories from "./categories";
import Card from "./ui/card";

export default function Products () {
  const [category, setCategory] = useState('');
  const {loading, products, error} = useProducts({ category });
   
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg text-slate-700">Products Performance</h1>
          <p className="text-sm text-slate-400">How it performs</p>
        </div>
        <div className="">
          <select className="px-2 py-1 text-sm text-slate-400 border border-slate-200 rounded" name="date" id="date">
            <option>March 2022</option>
            <option>April 2022</option>
            <option>May 2022</option>
          </select>
        </div>
      </div>
      <Categories category={category} setCategory={setCategory} />
      <table className="mt-8 table-auto w-full text-slate-700">
        <thead className=" text-slate-400">
          <tr className="">
            <th className="text-left p-4 font-medium">Product</th>
            <th className="text-left p-4 font-medium">Discount</th>
            <th className="text-left p-4 font-medium">Priority</th>
            <th className="text-left p-4 font-medium">Prise</th>
            <th className="text-left p-4 font-medium">Chart</th>
          </tr>
        </thead>
        <tbody>
          {loading && <tr className="animate-pulse"><td colSpan={5} className="h-12 bg-gray-200"></td></tr>}
          {!loading && error && <tr><td colSpan={5} className="text-center text-red-800">{error}</td></tr>}
          {!loading && products.map((product) => (
            <tr key={product.id} className="border-t hover:bg-gray-50">
              <td className="p-4">
                <div className="flex">
                  <img className="h-12 w-12 object-cover border-red-300" src={product.thumbnail} alt={product.title} />
                  <div className="ml-4">
                    <h1 className="text-lg text-slate-700">{product.title}</h1>
                    <p className="w-96 text-sm text-slate-400 truncate">{product.description}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">{product.discountPercentage}%</td>
              <td className="p-4">
                <span className={`px-5 py-0.5 rounded ${product.brand === 'Apple' ? 'bg-blue-100 text-blue-500': 'bg-orange-100 text-orange-500'}`}>{product.brand}</span>
              </td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">
                <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.51724 19.5774C3.50084 18.247 7.94409 14.3653 9.84834 9.48178C11.1518 6.42961 15.6082 1.49947 19.7096 9.95135C23.3935 17.5427 34.0595 28.1705 47.2533 9.95135C50.9938 4.62961 60.175 -3.38431 66.9759 7.13396C68.7894 9.95135 73.4367 15.3983 77.5172 14.647" stroke="#DFE5EF" strokeWidth="2"/>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}