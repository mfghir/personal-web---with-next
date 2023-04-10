import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

const MenuItem = () => {
  const { t } = useTranslation("menu-item");
  const { locale } = useRouter();

  return (
    <section className="flex justify-center items-center lg:justify-between">
      <Image
        className="hidden lg:block lg:w-2/6 h-[calc(100vh-80px)] pl-6"
        src="https://i.postimg.cc/JnMKt5w0/bg.jpg"
        alt="bg"
        width={800}
        height={1200}
      />

      <section className="flex flex-wrap justify-center lg:w-4/6">
        <div className="flex justify-center text-center items-center flex-col lg:w-[45%] lg:h-60 xl:h-72 lg:m-2">
          <h1 className="text-xl text-neutral-900 dark:text-whitePrimary">
            {t("hi")}
          </h1>
          <h2 className="text-4xl my-3">{t("name")}</h2>
          <h3 className="text-yellowPrimary text-2xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(2500).deleteAll().start();
              }}
              options={{
                strings: ["Developer", "UI Designer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>


        {/* <Link href={`/${locale}/[dynamicFolder]`} as={`/${locale}/contact`}>  */}
        <Link
        href={`/${locale}/[dynamicFolder]`} as={`/${locale}/about-me`}
          // href={`/${locale}/about-me`}
          className={`menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all ${
            locale === "fa" ? "rtl" : "ltr"
          }`}
        >
          <div className="flex ">
            <button className="text-effect-down mr-2" data-after={t("about")}>
              <span>{t("about")}</span>
            </button>

            <button className="text-effect-up" data-after={t("me")}>
              <span className="text-yellowPrimary">{t("me")}</span>
            </button>
          </div>
        </Link>

        <Link
          href={`/${locale}/portfolio`}
          className={`menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all ${
            locale === "fa" ? "" : ""
          }`}
        >
          <div className="flex ">
            <button className="text-effect-down mr-2" data-after={t("my")}>
              <span>{t("my")}</span>
            </button>

            <button className="text-effect-up" data-after={t("portfolio")}>
              <span className="text-yellowPrimary">{t("portfolio")}</span>
            </button>
          </div>
        </Link>

        <Link
          href={`/${locale}/contact`}
          className={`menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all ${
            locale === "fa" ? "rtl" : "ltr"
          }`}
        >
          <div className="flex justify-between">
            <button className="text-effect-down mr-2" data-after={t("get")}>
              <span>{t("get")}</span>
            </button>

            <button className="text-effect-up" data-after="in-touch">
              <span className="text-yellowPrimary ">{t("in-tuoch")}</span>
            </button>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default MenuItem;
