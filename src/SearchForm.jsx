import { useState } from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(searchValue);

    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
      <input
        type="text"
        name="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="cat"
        className="border border-gray-300 dark:border-gray-700 rounded-md p-2 flex-1
          placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none
          focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300 ease-in-out"
      />
      <button
        className="bg-blue-500 text-white rounded-md py-2 px-8 hover:bg-blue-600 transition-all duration-300
          ease-in-out cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
