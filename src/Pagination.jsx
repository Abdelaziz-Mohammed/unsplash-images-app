import { useGlobalContext } from "./context";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Pagination() {
  const { page, setPage } = useGlobalContext();

  return (
    <div className="flex items-center justify-between gap-3 mb-8">
      <button
        onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 1))}
        className="py-2 px-4 rounded-full outline-0 border border-neutral-100 dark:border-neutral-700
        cursor-pointer bg-transparent shadow-lg transition-all duration-300"
      >
        <FaArrowLeftLong />
      </button>
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold
        font-mono shadow-lg border border-neutral-100 dark:border-neutral-700"
      >
        {page}
      </div>
      <button
        onClick={() => setPage((oldPage) => oldPage + 1)}
        className="py-2 px-4 rounded-full outline-0 border border-neutral-100 dark:border-neutral-700
        cursor-pointer bg-transparent shadow-lg transition-all duration-300"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Pagination;
