import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FilterBtn = ({ setActiveFilter, activeFilter, setFilterWork, works }) => {
  const { t } = useTranslation("portfolio");
  const { locale } = useRouter();

  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(works);
      return;
    }
    const filtered = works.filter((item) => item.title.includes(activeFilter));
    setFilterWork(filtered);
  }, [activeFilter, setFilterWork, works]);

  return (
    <div
      className={` w-full flex flex-nowrap overflow-x-scroll md:overflow-x-hidden ${
        locale === "fa" ? "rtl" : "ltr"
      } `}
    >
      {/* {[ t("all"), t("web"), t("react"), t("js"), t("nextjs") , t("ui") ,t("etc") ].map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveFilter(t(`${item}`))}
          className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
            activeFilter === item ? "text-yellowPrimary" : ""
          }`}
        >
          {item}
        </div>
      ))} */}

      <div
        onClick={() => setActiveFilter("All")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap
        ${activeFilter === "All" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}
        `}
      >
        {t("all")}
      </div>

      <div
        onClick={() => setActiveFilter("Web")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "Web" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("web")}
      </div>

      <div
        onClick={() => setActiveFilter("Js")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "Js" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("js")}
      </div>

      <div
        onClick={() => setActiveFilter("React")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "React" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("react")}
      </div>

      <div
        onClick={() => setActiveFilter("Nextjs")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "Nextjs" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("nextjs")}
      </div>

      {/* <div
        onClick={() => setActiveFilter("UI")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "UI" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("ui")}
      </div> */}

      <div
        onClick={() => setActiveFilter("Etc")}
        className={`cursor-pointer hover:text-yellowPrimary duration-300 whitespace-nowrap 
        ${activeFilter === "Etc" ? "text-yellowPrimary" : ""}
        ${locale === "fa" ? "ml-4" : "mr-4"}`}
      >
        {t("etc")}
      </div>
    </div>
  );
};

export default FilterBtn;
