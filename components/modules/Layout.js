import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="bg-[#EFE9E9] dark:bg-neutral-900 h-full text-neutral-900 dark:text-[#EFE9E9] p-6 ">
      <nav className="flex justify-end">
        <button onClick={handleDarkModeToggle}>
          {darkMode ? <BsMoon /> : <BsSun />}
        </button>
      </nav>
      <main className="h-full">{children}</main>
    </div>
  );
}

export default Layout;
