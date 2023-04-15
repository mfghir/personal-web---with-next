import { Sun1, Moon, CloseCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const { locale, pathname } = useRouter();

  console.log(pathname);

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
  // height: 100%;
  // max-height: fit-content;
  // min-height: 100vh;

  return (
    // <div className="2xl:max-w-screen-xl 2xl:h-fit 2xl:mx-auto p-4 bg-[#EFE9E9] dark:bg-neutral-900 lg:overflow-y-hidden text-neutral-900 dark:text-[#EFE9E9]">
    <div className="min-h-screen lg:min-h-fit 2xl:max-w-screen-xl lg:h-fit 2xl:w-fit lg:mx-auto p-4 bg-[#EFE9E9] dark:bg-neutral-900 lg:overflow-y-hidden text-neutral-900 dark:text-[#EFE9E9]">
      <nav className="flex justify-between ml-3 lg:pt-2">
        <div className="flex items-center  ">
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

          <button
            onClick={handleDarkModeToggle}
            className="hover:text-yellowPrimary duration-300"
          >
            {darkMode ? <Moon /> : <Sun1 />}
          </button>
        </div>

        {pathname !== "/" ? (
          <Link
            href="/"
            className="text-4xl right-5 md:right-8 top-3 md:top-5 fixed  z-50"
          >
            <CloseCircle className="text-grayText" />
          </Link>
        ) : (
          ""
        )}
      </nav>
      <main
        className={`h-full  ${
          locale === "fa"
            ? "font-sans-fa"
            : locale === "en"
            ? "font-sans-en"
            : "font-sans-ko"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
