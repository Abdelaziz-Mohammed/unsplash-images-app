import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}&per_page=30`;

function Gallery() {
  const { searchTerm, page } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm, page],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}&page=${page}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (response.isError) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-500">Error fetching images. Please try again later.</p>
      </div>
    );
  }

  if (response.isSuccess && response.data.results.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">No images found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div>
      {response.isSuccess && response.data.results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {response.data.results.map((image) => (
            <div
              key={image?.id}
              className="overflow-hidden w-full rounded-lg flex justify-center relative"
            >
              <img
                src={image?.urls?.regular}
                alt={image?.alt_description}
                className="w-full max-w-[400px] h-60 object-cover rounded-lg shadow-lg"
              />
              {/* download image button */}
              <button
                onClick={() => window.open(image?.links?.download, "_blank")}
                className="absolute bottom-4 left-4 bg-white/20 text-gray-800 p-2 rounded-full shadow-lg 
                cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out"
              >
                <FaDownload />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
