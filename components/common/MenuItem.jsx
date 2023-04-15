import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import Typewriter from "typewriter-effect";

const MenuItem = () => {
  const { t } = useTranslation("menu-item");
  const { locale } = useRouter();

  return (
    <section className="flex justify-center items-center lg:justify-between mt-8 lg:mt-0  lg:pb-7 lg:pt-5">
      <Image
        // className="hidden lg:block lg:w-2/6 h-[calc(100vh-80px)] pl-6"
        className="hidden lg:block lg:min-w-[360px] lg:w-2/6 h-[530px] pl-6"
        src="https://i.postimg.cc/JnMKt5w0/bg.jpg"
        alt="bg"
        width={800}
        height={1200}
      />

      {/* <section className="flex flex-wrap justify-center lg:w-4/6 bg-red-500"> */}
      <section className="flex flex-wrap justify-center lg:grid lg:grid-cols-2 lg:gap-4 lg:w-4/6  lg:p-3">
        <div className="flex justify-center text-center items-center flex-col  lg:h-64  ">
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

        <Link
          href={`/about-me`}
          className={`menu-item text-menuItem  lg:h-64   transition-all ${
            locale === "fa" ? "rtl" : "ltr"
          }`}
        >
          <div className="flex ">
            <button className="text-effect-down" data-after={t("about")}>
              <span>{t("about")}</span>
            </button>

            <button className="text-effect-up mx-2" data-after={t("me")}>
              <span className="text-yellowPrimary">{t("me")}</span>
            </button>
          </div>
        </Link>

        <Link
          href={`/portfolio`}
          className={`menu-item text-menuItem  lg:h-64   transition-all ${
            locale === "fa" ? "" : ""
          }`}
        >
          <div className="flex ">
            <button className="text-effect-down mx-2" data-after={t("my")}>
              <span>{t("my")}</span>
            </button>

            <button className="text-effect-up" data-after={t("portfolio")}>
              <span className="text-yellowPrimary">{t("portfolio")}</span>
            </button>
          </div>
        </Link>

        <Link
          href={`/contact`}
          className={`menu-item text-menuItem  lg:h-64   transition-all ${
            locale === "fa" ? "rtl" : "ltr"
          }`}
        >
          <div className="flex justify-between">
            <button className="text-effect-down mx-2" data-after={t("get")}>
              <span>{t("get")}</span>
            </button>

            <button className="text-effect-up" data-after={t("in-touch")}>
              <span className="text-yellowPrimary ">{t("in-touch")}</span>
            </button>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default MenuItem;
