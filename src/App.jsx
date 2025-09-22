import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import Pagination from "./Pagination";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <main
      className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100
      transition-colors duration-300"
    >
      <div className="container mx-auto px-4 pt-12 pb-8">
        <ThemeToggle />
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center font-mono tracking-wider
          border-b-2 border-gray-300 dark:border-gray-700 pb-4"
        >
          Unsplash Image Gallery
        </h1>
        <SearchForm />
        <Pagination />
        <Gallery />
        <ScrollToTop />
      </div>
    </main>
  );
}

export default App;
