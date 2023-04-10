import { Sun1, Moon } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const { locale } = useRouter();

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
    <div className="bg-[#EFE9E9] dark:bg-neutral-900 min-h-screen lg:h-[calc(100vh-48px)] lg:overflow-y-hidden  text-neutral-900 dark:text-[#EFE9E9] p-3 ">
      <nav className="flex justify-between">
        <div className="flex items-center">
          <Link href={``} locale="fa" className="mr-2">
            <Image
              src="https://i.postimg.cc/4NgJFCQ9/iran-flag.png"
              alt="iran-flag"
              width={24}
              height={24}
            />
          </Link>
          <Link href={``} locale="en" className="mr-2">
            <Image
              src="https://i.postimg.cc/DZGSLr7k/usa-flag.png"
              alt="iran-flag"
              width={24}
              height={24}
            />
          </Link>
          <Link href={``} locale="ko" className="mr-2">
            <Image
              src="https://i.postimg.cc/Y0fjyt4d/korea-flag.png"
              alt="iran-flag"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <button
          onClick={handleDarkModeToggle}
          className="hover:text-yellowPrimary duration-300"
        >
          {darkMode ? <Moon /> : <Sun1 />}
        </button>
      </nav>
      {/* <main className={`h-full font-[${locale === "fa" ? notoSansArabic : (locale === "en" ? poppins : gowunDodum)}]`}>{children}</main> */}
      <main className={locale === "fa" ? "font-sans":""}>{children}</main>
    </div>
  );
}

export default Layout;
