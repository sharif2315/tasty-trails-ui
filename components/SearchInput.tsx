import { IoSearchOutline } from "react-icons/io5";
//   Plugins: - @tailwindcss/forms

const SearchInput = () => {
    return (
        <div className="relative">
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-lg border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>
                    <IoSearchOutline />
                </button>
            </span>
        </div>
    )
}

export default SearchInput