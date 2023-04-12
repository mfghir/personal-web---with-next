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
          className={`tabs-aboutMe mb-6 lg:mb-0 right-0 w-full lg:min-h-[400px] z-20 -top-5 lg:scale-[0.8]
         ${
           openTab === 1
             ? "z-40 !top-8 !scale-100"
             : "z-10 -top-2 lg:scale-[0.9]"
         }
         ${locale === "fa" ? "rtl" : "ltr"}
        `}
        >
          <div className="tabs-title-aboutMe" onClick={() => setOpenTab(1)}>
            <Briefcase
              variant="Bold"
              className={locale === "fa" ? "ml-2" : "mr-2"}
            />
            {t("experience")}
          </div>

          <div className="p-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("web-developer")}
            </h3>
            <span className="flex items-center py-2 text-[#aaaaaa] text-xs">
              <Calendar
                size={16}
                variant="Bold"
                className={locale === "fa" ? "ml-2" : "mr-2"}
              />
              {locale === "fa" ? "۱۴۰۲ - ۱۳۹۸" : "2019 - 2023"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              {t("web-developer-text")}
            </p>
          </div>

          <div className="p-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("web-designer")}
            </h3>
            <span className="flex items-center py-2 text-[#aaaaaa] text-xs">
              <Calendar
                size={16}
                variant="Bold"
                className={locale === "fa" ? "ml-2" : "mr-2"}
              />
              {locale === "fa" ? "۱۴۰۲ - ۱۴۰۱" : "2022 - 2023"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              {t("web-designer-text")}
            </p>
          </div>
        </div>

        {/*  Education  */}
        <div
          className={`tabs-aboutMe mb-6 lg:mb-0 right-0 w-full lg:min-h-[400px] -top-3 z-20 lg:scale-[0.9]
          ${openTab === 2 ? "z-40 !top-8 !scale-100" : " z-20  lg:scale-[0.9]"}
          ${locale === "fa" ? "rtl" : "ltr"}
        `}
        >
          <div className="tabs-title-aboutMe" onClick={() => setOpenTab(2)}>
            <Teacher
              variant="Bold"
              className={locale === "fa" ? "ml-2" : "mr-2"}
            />
            {t("education")}
          </div>

          <div className="p-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("university")}
            </h3>
            <span className="flex items-center py-2 text-[#aaaaaa] text-xs">
              <Calendar
                size={16}
                variant="Bold"
                className={locale === "fa" ? "ml-2" : "mr-2"}
              />
              {locale === "fa" ? "۱۳۹۹ - ۱۳۹۶" : "2017 - 2021"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              {t("university-text")}
            </p>
          </div>

          <div className="p-4 lg:px-6">
            <h3 className="font-semibold text-base text-grayText dark:text-white ">
              {t("high-school")}
            </h3>
            <span className="flex items-center py-2 text-[#aaaaaa] text-xs">
              <Calendar
                size={16}
                variant="Bold"
                className={locale === "fa" ? "ml-2" : "mr-2"}
              />{" "}
              {locale === "fa" ? "۱۳۹۶ - ۱۳۹۳" : "2014 - 2016"}
            </span>
            <p className="leading-6 font-normal text-sm text-grayText dark:text-white">
              {t("high-school-text")}
            </p>
          </div>
        </div>

        {/*  Skill  */}
        <div
          className={`tabs-aboutMe right-0 w-full lg:min-h-[400px] -top-[50px] z-10  lg:scale-[0.8]
          ${openTab === 3 ? "z-40 !top-8 !scale-100" : "z-10  lg:scale-[0.8]"}`}
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

          <ul className="flex justify-between flex-wrap p-4 lg:px-6">
            <li className="w-[35%]">
              <span className="text-grayText dark:text-white ">HTML</span>
              <p className="flex  items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%]">
              <span className="text-grayText dark:text-white ">CSS / Sass</span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white ">Tailwind</span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white ">Responsive</span>
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
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white">
                React /Redux
              </span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white">GraphQL</span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white">Next js</span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-grayText dark:text-white">TypeScript</span>
              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block border border-yellowPrimary rounded-full"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
