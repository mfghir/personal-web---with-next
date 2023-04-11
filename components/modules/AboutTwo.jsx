import { Briefcase, Calendar, Teacher } from "iconsax-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { useState } from "react";

const AboutTwo = () => {
  const [openTab, setOpenTab] = useState(1);
  const { locale } = useRouter();
  const { t } = useTranslation("about-me");

  return (
    <>
      <div className="hidden lg:flex lg:flex-col w-1/5">
        <button
          className={`btn-aboutMe px-4 py-2 ${
            openTab === 1 && "bg-yellowPrimary text-white"
          }`}
          onClick={() => setOpenTab(1)}
        >
          {t("experience")}
        </button>
        <button
          className={`btn-aboutMe px-4 py-2  mt-3 ${
            openTab === 2 && "bg-yellowPrimary text-white"
          }`}
          onClick={() => setOpenTab(2)}
        >
          {t("education")}
        </button>
        <button
          className={`btn-aboutMe px-4 py-2  mt-3 ${
            openTab === 3 && "bg-yellowPrimary text-white"
          }`}
          onClick={() => setOpenTab(3)}
        >
          {t("skills")}
        </button>
      </div>

      <div className="lg:w-[70%] lg:relative lg:min-h-[400px]">
        {/*  Experience  */}
        <div
          className={`tabs-aboutMe right-0 w-full lg:min-h-[400px] z-20 -top-5 scale-[0.8]
         ${openTab === 1 ? "z-40 !top-8 !scale-100" : "z-10 -top-2 scale-[0.9]"}
        
        `}
        >
          <div
            className={`tabs-title-aboutMe ${locale === "fa" ? "rtl" : "ltr"}`}
            onClick={() => setOpenTab(1)}
          >
            <Briefcase
              variant="Bold"
              className={locale === "fa" ? "ml-2" : "mr-2"}
            />
            {t("experience")}
          </div>

          <div className="mt-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("web-developer")}
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> {locale ==="fa"? "۱۳۹۸ - ۱۴۰۲" : "2019 - 2023"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
            {t("web-developer-text")}
            </p>
          </div>

          <div className="mt-5 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("web-designer")}
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" />  {locale ==="fa"? "۱۴۰۱ - ۱۴۰۲" : "2022 - 2023"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
            {t("web-designer-text")}
            </p>
          </div>
        </div>

        {/*  Education  */}
        <div
          className={`tabs-aboutMe mt-9 lg:mt-0 right-0 w-full lg:min-h-[400px] -top-3 z-20  scale-[0.9]
          ${openTab === 2 ? "z-40 !top-8 !scale-100" : " z-20  scale-[0.9]"}
        
        `}
        >
          <div
            className={`tabs-title-aboutMe  ${locale === "fa" ? "rtl" : "ltr"}`}
            onClick={() => setOpenTab(2)}
          >
            <Teacher
              variant="Bold"
              className={locale === "fa" ? "ml-2" : "mr-2"}
            />
            {t("education")}
          </div>

          <div className="mt-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              WEB DESIGNER - ENVATO
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> 2015 - 2023
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium orci sit amet mi ullamcorper
            </p>
          </div>

          <div className="mt-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              WEB DESIGNER - ENVATO
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> 2015 - 2023
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium orci sit amet mi ullamcorper
            </p>
          </div>
        </div>

        {/*  Skill  */}
        <div
          className={`tabs-aboutMe mt-9 lg:mt-0  right-0 w-full lg:min-h-[400px] -top-[50px] z-10  scale-[0.8]
          ${openTab === 3 ? "z-40 !top-8 !scale-100" : "z-10  scale-[0.8]"}
 
        `}
        >
          <div
            className={`tabs-title-aboutMe  ${locale === "fa" ? "rtl" : "ltr"}`}
            onClick={() => setOpenTab(3)}
          >
            <Teacher
              variant="Bold"
              className={locale === "fa" ? "ml-2" : "mr-2"}
            />
            {t("skills")}
          </div>

          <ul className="flex justify-between flex-wrap lg:px-6">
            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white ">HTML</span>

              <p className="flex  items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white ">CSS</span>

              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white ">Js</span>

              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
