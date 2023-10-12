import { useCategories } from "../hooks/categories";

export default function Categories ({ category, setCategory }) {
  const {loading, categories, error} = useCategories();
   
  return (
    <div className="flex mt-6">
      {loading && <div className="flex space-x-4 animate-pulse">
        <div className="w-16 h-16 bg-gray-200"></div>
        <div className="w-16 h-16 bg-gray-200"></div>
        <div className="w-16 h-16 bg-gray-200"></div>
      </div>}
      {!loading && error && <tr><td colSpan={5} className="text-center text-red-800">{error}</td></tr>}
      {!loading && categories.slice(0,6).map((item) => (
        <button key={item} onClick={() => setCategory(item)} className={`flex flex-col justify-center items-center h-20 mr-4 p-2 border rounded-lg text-center text-slate-400 fill-slate-400 hover:border-blue-400 hover:text-blue-400 hover:fill-blue-400 ${category === item ? 'border-blue-400 text-blue-400 fill-blue-400' : ''}`}>
          <svg className="" width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51724 19.625C6.06724 19.625 5.68391 19.4667 5.36724 19.15C5.05058 18.8333 4.89224 18.45 4.89224 18C4.89224 17.55 5.05058 17.1667 5.36724 16.85C5.68391 16.5333 6.06724 16.375 6.51724 16.375C6.96724 16.375 7.35058 16.5333 7.66724 16.85C7.98391 17.1667 8.14224 17.55 8.14224 18C8.14224 18.45 7.98391 18.8333 7.66724 19.15C7.35058 19.4667 6.96724 19.625 6.51724 19.625ZM12.5172 19.625C12.0672 19.625 11.6839 19.4667 11.3672 19.15C11.0506 18.8333 10.8922 18.45 10.8922 18C10.8922 17.55 11.0506 17.1667 11.3672 16.85C11.6839 16.5333 12.0672 16.375 12.5172 16.375C12.9672 16.375 13.3506 16.5333 13.6672 16.85C13.9839 17.1667 14.1422 17.55 14.1422 18C14.1422 18.45 13.9839 18.8333 13.6672 19.15C13.3506 19.4667 12.9672 19.625 12.5172 19.625ZM18.5172 19.625C18.0672 19.625 17.6839 19.4667 17.3672 19.15C17.0506 18.8333 16.8922 18.45 16.8922 18C16.8922 17.55 17.0506 17.1667 17.3672 16.85C17.6839 16.5333 18.0672 16.375 18.5172 16.375C18.9672 16.375 19.3506 16.5333 19.6672 16.85C19.9839 17.1667 20.1422 17.55 20.1422 18C20.1422 18.45 19.9839 18.8333 19.6672 19.15C19.3506 19.4667 18.9672 19.625 18.5172 19.625ZM6.51724 13.625C6.06724 13.625 5.68391 13.4667 5.36724 13.15C5.05058 12.8333 4.89224 12.45 4.89224 12C4.89224 11.55 5.05058 11.1667 5.36724 10.85C5.68391 10.5333 6.06724 10.375 6.51724 10.375C6.96724 10.375 7.35058 10.5333 7.66724 10.85C7.98391 11.1667 8.14224 11.55 8.14224 12C8.14224 12.45 7.98391 12.8333 7.66724 13.15C7.35058 13.4667 6.96724 13.625 6.51724 13.625ZM12.5172 13.625C12.0672 13.625 11.6839 13.4667 11.3672 13.15C11.0506 12.8333 10.8922 12.45 10.8922 12C10.8922 11.55 11.0506 11.1667 11.3672 10.85C11.6839 10.5333 12.0672 10.375 12.5172 10.375C12.9672 10.375 13.3506 10.5333 13.6672 10.85C13.9839 11.1667 14.1422 11.55 14.1422 12C14.1422 12.45 13.9839 12.8333 13.6672 13.15C13.3506 13.4667 12.9672 13.625 12.5172 13.625ZM18.5172 13.625C18.0672 13.625 17.6839 13.4667 17.3672 13.15C17.0506 12.8333 16.8922 12.45 16.8922 12C16.8922 11.55 17.0506 11.1667 17.3672 10.85C17.6839 10.5333 18.0672 10.375 18.5172 10.375C18.9672 10.375 19.3506 10.5333 19.6672 10.85C19.9839 11.1667 20.1422 11.55 20.1422 12C20.1422 12.45 19.9839 12.8333 19.6672 13.15C19.3506 13.4667 18.9672 13.625 18.5172 13.625ZM6.51724 7.625C6.06724 7.625 5.68391 7.46667 5.36724 7.15C5.05058 6.83333 4.89224 6.45 4.89224 6C4.89224 5.55 5.05058 5.16667 5.36724 4.85C5.68391 4.53333 6.06724 4.375 6.51724 4.375C6.96724 4.375 7.35058 4.53333 7.66724 4.85C7.98391 5.16667 8.14224 5.55 8.14224 6C8.14224 6.45 7.98391 6.83333 7.66724 7.15C7.35058 7.46667 6.96724 7.625 6.51724 7.625ZM12.5172 7.625C12.0672 7.625 11.6839 7.46667 11.3672 7.15C11.0506 6.83333 10.8922 6.45 10.8922 6C10.8922 5.55 11.0506 5.16667 11.3672 4.85C11.6839 4.53333 12.0672 4.375 12.5172 4.375C12.9672 4.375 13.3506 4.53333 13.6672 4.85C13.9839 5.16667 14.1422 5.55 14.1422 6C14.1422 6.45 13.9839 6.83333 13.6672 7.15C13.3506 7.46667 12.9672 7.625 12.5172 7.625ZM18.5172 7.625C18.0672 7.625 17.6839 7.46667 17.3672 7.15C17.0506 6.83333 16.8922 6.45 16.8922 6C16.8922 5.55 17.0506 5.16667 17.3672 4.85C17.6839 4.53333 18.0672 4.375 18.5172 4.375C18.9672 4.375 19.3506 4.53333 19.6672 4.85C19.9839 5.16667 20.1422 5.55 20.1422 6C20.1422 6.45 19.9839 6.83333 19.6672 7.15C19.3506 7.46667 18.9672 7.625 18.5172 7.625Z"/>
          </svg>
          <p className="mt-1 ">{item}</p>
        </button>
      ))}
    </div>
  );
}