import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LocaleSwitcher() {
  // const router = useRouter();
  // const { locales, locale: activeLocale } = router;
  // const otherLocales = locales?.filter(
  //   (locale) => locale !== activeLocale && locale !== "fa"
  // );
  // const { pathname, query, asPath } = router;



  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  const changeLanguage = (lang) => {
    console.log("Changing language to:", i18n.language);
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };
  

  return (
    <span className="text-muted cursor-pointer">
      {/* {otherLocales?.map((locale) => {
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale === "en"
                ? "English"
                : locale === "fa"
                ? "فارسی"
                : locale === "ko"
                ? "한국어"
                : null}
            </Link>
          </span>
        );
      })} */}

<div className="bg-red-200">
{/* 
      <Link href={{ pathname, query }} as={asPath}>
        {query === "default" ? "farsi" : "null"}
      </Link>
      <Link href={{ pathname, query }} as={asPath}>
        {query === "en" ? "English" : "null"}
      </Link>
      <Link href={{ pathname, query }} as={asPath}>
        {query === "ko" ? "korean" : "null"}
      </Link> */}
</div>

<div>
     <button className="mx-5" onClick={() => changeLanguage("fa")}>Farsi</button>
       <button  className="mx-5" onClick={() => changeLanguage("en")}>English</button>
       <button  className="mx-5"  onClick={() => changeLanguage("ko")}>Korean</button>
     </div>
 
    </span>
  );
}

// import { useTranslation } from "next-i18next";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function LocaleSwitcher() {
//   const { t, i18n } = useTranslation();
//   const [currentLang, setCurrentLang] = useState(i18n.language);

//   const changeLanguage = (lang) => {
//     setCurrentLang(lang);
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <div>
//         <button className="mx-5" onClick={() => changeLanguage("fa")}>Farsi</button>
//         <button  className="mx-5" onClick={() => changeLanguage("en")}>English</button>
//         <button  className="mx-5"  onClick={() => changeLanguage("ko")}>Korean</button>
//       </div>
//   );
// }
