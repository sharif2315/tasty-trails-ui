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
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus:outline-gray"
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