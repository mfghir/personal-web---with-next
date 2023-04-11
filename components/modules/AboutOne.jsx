import { User } from "iconsax-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const AboutOne = () => {
  const { t } = useTranslation("about-me");
  const { locale } = useRouter();

  return (
    <section className={`pb-7 ${locale === "fa" ? "rtl" : "ltr"}`}>
      <div className="flex items-center py-3 md:py-0 text-grayText dark:text-white">
        <span className="mr-2">
          <User variant="Bold" />
        </span>
        <h3 className="text-lg font-semibold">{t("personal-info")}</h3>
      </div>

      <p className="text-grayText dark:text-white text-sm md:mt-3 leading-8">
        {t("desc")}
      </p>

      <ul className="lg:flex lg:justify-between">
        <div>
          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("first-name")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("first-name-text")}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("last-name")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("last-name-text")}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("date-of-birth")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("date-of-birth-text")}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("nationality")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("nationality-text")}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("freelance")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("freelance-text")}
            </span>
          </li>
        </div>

        <div>
          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("phone")} :
            <span className={`text-grayText dark:text-[#eee] font-normal ml-3 mx-2 inline-flex flex-row-reverse ${locale === "fa" ? "ltr" : ""}`}>
              {locale === "fa" ? "+۹۸ ۹۲۲ ۴۵۸ ۵۰۵۵" :"+98 922 458 5055"}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("address")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("address-text")}
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("email")} :
            <span className={`text-grayText dark:text-[#eee] font-normal ml-3 mx-2 inline-flex flex-row-reverse ${locale === "fa" ? "ltr" : ""}`}>
              [fatemeghafari77]@gmail.com
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            {t("spoken-langages")} :
            <span className="text-grayText dark:text-[#eee] font-normal ml-3 mx-2">
              {t("spoken-langages-text")}
            </span>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default AboutOne;
