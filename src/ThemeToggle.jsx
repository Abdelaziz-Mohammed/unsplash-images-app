import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useGlobalContext();

  return (
    <div className="fixed top-4 right-4 z-10">
      <button
        onClick={toggleTheme}
        className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-full bg-transparent 
        cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 ease-in-out"
      >
        {isDarkTheme ? (
          <BsFillSunFill className="text-yellow-400" />
        ) : (
          <BsFillMoonFill className="text-gray-800" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
