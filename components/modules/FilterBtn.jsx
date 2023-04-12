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
      className={` w-full flex flex-wrap ${locale === "fa" ? "rtl" : "ltr"} `}
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
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "All" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("all")}
      </div>

      <div
        onClick={() => setActiveFilter("Web")}
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "Web" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("web")}
      </div>

      <div
        onClick={() => setActiveFilter("Js")}
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "Js" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("js")}
      </div>

      <div
        onClick={() => setActiveFilter("React")}
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "React" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("react")}
      </div>

      <div
        onClick={() => setActiveFilter("Nextjs")}
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "Nextjs" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("nextjs")}
      </div>

      <div
        onClick={() => setActiveFilter("UI")}
        className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
          activeFilter === "UI" ? "text-yellowPrimary" : ""
        }`}
      >
        {t("ui")}

        <div
          onClick={() => setActiveFilter("Etc")}
          className={`mr-4 cursor-pointer hover:text-yellowPrimary duration-300 ${
            activeFilter === "Etc" ? "text-yellowPrimary" : ""
          }`}
        >
          {t("etc")}
        </div>
      </div>
    </div>
  );
};

export default FilterBtn;
