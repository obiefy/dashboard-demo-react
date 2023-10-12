import { useProducts } from "../hooks/products";
import Card from "./ui/card";

export default function Products () {

  const {loading, products, error} = useProducts();
   
  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg text-slate-700">Products Performance</h1>
          <p className="text-sm text-slate-400">How it performs</p>
        </div>
        <div className="">
          <select className="px-2 py-1 text-sm text-slate-400 border border-slate-200 rounded" name="date" id="date">
            <option value="ok">March 2022</option>
          </select>
        </div>
      </div>
      <div className="flex mt-6">
        {[1,2,3,4].map(() => (
          <button className="flex flex-col justify-center items-center h-20 w-20 mr-4 p-2 border rounded-lg text-center">
            <svg className="fill-slate-400" width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.51724 19.625C6.06724 19.625 5.68391 19.4667 5.36724 19.15C5.05058 18.8333 4.89224 18.45 4.89224 18C4.89224 17.55 5.05058 17.1667 5.36724 16.85C5.68391 16.5333 6.06724 16.375 6.51724 16.375C6.96724 16.375 7.35058 16.5333 7.66724 16.85C7.98391 17.1667 8.14224 17.55 8.14224 18C8.14224 18.45 7.98391 18.8333 7.66724 19.15C7.35058 19.4667 6.96724 19.625 6.51724 19.625ZM12.5172 19.625C12.0672 19.625 11.6839 19.4667 11.3672 19.15C11.0506 18.8333 10.8922 18.45 10.8922 18C10.8922 17.55 11.0506 17.1667 11.3672 16.85C11.6839 16.5333 12.0672 16.375 12.5172 16.375C12.9672 16.375 13.3506 16.5333 13.6672 16.85C13.9839 17.1667 14.1422 17.55 14.1422 18C14.1422 18.45 13.9839 18.8333 13.6672 19.15C13.3506 19.4667 12.9672 19.625 12.5172 19.625ZM18.5172 19.625C18.0672 19.625 17.6839 19.4667 17.3672 19.15C17.0506 18.8333 16.8922 18.45 16.8922 18C16.8922 17.55 17.0506 17.1667 17.3672 16.85C17.6839 16.5333 18.0672 16.375 18.5172 16.375C18.9672 16.375 19.3506 16.5333 19.6672 16.85C19.9839 17.1667 20.1422 17.55 20.1422 18C20.1422 18.45 19.9839 18.8333 19.6672 19.15C19.3506 19.4667 18.9672 19.625 18.5172 19.625ZM6.51724 13.625C6.06724 13.625 5.68391 13.4667 5.36724 13.15C5.05058 12.8333 4.89224 12.45 4.89224 12C4.89224 11.55 5.05058 11.1667 5.36724 10.85C5.68391 10.5333 6.06724 10.375 6.51724 10.375C6.96724 10.375 7.35058 10.5333 7.66724 10.85C7.98391 11.1667 8.14224 11.55 8.14224 12C8.14224 12.45 7.98391 12.8333 7.66724 13.15C7.35058 13.4667 6.96724 13.625 6.51724 13.625ZM12.5172 13.625C12.0672 13.625 11.6839 13.4667 11.3672 13.15C11.0506 12.8333 10.8922 12.45 10.8922 12C10.8922 11.55 11.0506 11.1667 11.3672 10.85C11.6839 10.5333 12.0672 10.375 12.5172 10.375C12.9672 10.375 13.3506 10.5333 13.6672 10.85C13.9839 11.1667 14.1422 11.55 14.1422 12C14.1422 12.45 13.9839 12.8333 13.6672 13.15C13.3506 13.4667 12.9672 13.625 12.5172 13.625ZM18.5172 13.625C18.0672 13.625 17.6839 13.4667 17.3672 13.15C17.0506 12.8333 16.8922 12.45 16.8922 12C16.8922 11.55 17.0506 11.1667 17.3672 10.85C17.6839 10.5333 18.0672 10.375 18.5172 10.375C18.9672 10.375 19.3506 10.5333 19.6672 10.85C19.9839 11.1667 20.1422 11.55 20.1422 12C20.1422 12.45 19.9839 12.8333 19.6672 13.15C19.3506 13.4667 18.9672 13.625 18.5172 13.625ZM6.51724 7.625C6.06724 7.625 5.68391 7.46667 5.36724 7.15C5.05058 6.83333 4.89224 6.45 4.89224 6C4.89224 5.55 5.05058 5.16667 5.36724 4.85C5.68391 4.53333 6.06724 4.375 6.51724 4.375C6.96724 4.375 7.35058 4.53333 7.66724 4.85C7.98391 5.16667 8.14224 5.55 8.14224 6C8.14224 6.45 7.98391 6.83333 7.66724 7.15C7.35058 7.46667 6.96724 7.625 6.51724 7.625ZM12.5172 7.625C12.0672 7.625 11.6839 7.46667 11.3672 7.15C11.0506 6.83333 10.8922 6.45 10.8922 6C10.8922 5.55 11.0506 5.16667 11.3672 4.85C11.6839 4.53333 12.0672 4.375 12.5172 4.375C12.9672 4.375 13.3506 4.53333 13.6672 4.85C13.9839 5.16667 14.1422 5.55 14.1422 6C14.1422 6.45 13.9839 6.83333 13.6672 7.15C13.3506 7.46667 12.9672 7.625 12.5172 7.625ZM18.5172 7.625C18.0672 7.625 17.6839 7.46667 17.3672 7.15C17.0506 6.83333 16.8922 6.45 16.8922 6C16.8922 5.55 17.0506 5.16667 17.3672 4.85C17.6839 4.53333 18.0672 4.375 18.5172 4.375C18.9672 4.375 19.3506 4.53333 19.6672 4.85C19.9839 5.16667 20.1422 5.55 20.1422 6C20.1422 6.45 19.9839 6.83333 19.6672 7.15C19.3506 7.46667 18.9672 7.625 18.5172 7.625Z"/>
            </svg>
            <p className="mt-1 text-slate-400">App</p>
          </button>
        ))}
      </div>
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
                  <path d="M1.51724 19.5774C3.50084 18.247 7.94409 14.3653 9.84834 9.48178C11.1518 6.42961 15.6082 1.49947 19.7096 9.95135C23.3935 17.5427 34.0595 28.1705 47.2533 9.95135C50.9938 4.62961 60.175 -3.38431 66.9759 7.13396C68.7894 9.95135 73.4367 15.3983 77.5172 14.647" stroke="#DFE5EF" stroke-width="2"/>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}