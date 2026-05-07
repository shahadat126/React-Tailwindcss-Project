import { Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";

const ToggleTheme = ({ theme, setTheme }) => {
  

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="mt-2 mr-2 ">
      <button>
        {theme === "dark" ? (
          <Sun
            onClick={() => setTheme("light")}
            className=" w-8 h-auto p-1.5 border-gray-500 border bg-auto hover:bg-amber-950 rounded-full "
          />
        ) : (
          <Moon
            onClick={() => {
              setTheme("dark");
            }}
            className=" w-8 h-auto p-1.5 border border-gray-500  hover:bg-amber-400 rounded-full"
          />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
