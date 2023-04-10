import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CloseCircle,
  Personalcard,
  Briefcase,
  Like1,
  Happyemoji,
} from "iconsax-react";

import AboutOne from "../modules/AboutOne";
import AboutTwo from "../modules/AboutTwo";
import { useTranslation } from "next-i18next";

const AboutMePage = () => {
  const { t } = useTranslation("about-me");

  return (
    <div className="min-h-screen  p-2 md:p-4 lg:flex lg:justify-between">
      <Link href="/" className="text-4xl right-9 top-16 fixed z-50">
        <CloseCircle className="text-grayText" />
      </Link>

      <div className="hidden lg:block lg:w-2/6 object-fill relative resize">
        <Image
          className="absolute top-0 left-0"
          src="https://i.postimg.cc/JnMKt5w0/bg.jpg"
          alt="bg"
          fill
        />
      </div>

      <section className="section-container">
        <div className="  md:flex md:justify-between md:items-start md:flex-wrap lg:absolute">
          <h1 className="title flex justify-center items-center text-2xl lg:text-4xl w-full">
            <span className="mr-2">{t("about")}</span>
            <span className="text-yellowPrimary">{t("me")}</span>
          </h1>

          <div className="title-line flex justify-center items-center my-7 w-full">
            <span className="border-[#666] w-1/4 border-[1px]"></span>
            <span className="mx-5 text-yellowPrimary">
              <Personalcard />
            </span>
            <span className="border-[#666] w-1/4 border-[1px]"></span>
          </div>

          <div className="hidden md:block md:w-[30%] lg:hidden resize relative">
            <Image
              className="absolute top-0 left-0"
              src="/bg.jpg"
              alt="bg"
              fill
            />
          </div>

          {/* ----------------- Personal info   */}
          <section className="xl:w-4/5 lg:w-full lg:p-4 md:w-[65%] md:ml-4 ">
            <AboutOne />
          </section>

          {/* ----------------- exprience + skills + education   */}
          <section className="pt-7 border-y-[1px] border-[#333] w-full lg:flex lg:justify-between lg:py-16 lg:pr-4 ">
            <AboutTwo />
          </section>

          {/* ----------------- happy cutsomer ...   */}
          <ul className="w-full md:w-[90%] md:mx-auto flex flex-col items-center justify-center py-12 md:flex-row md:justify-between">
            <li className="flex justify-center flex-col items-center ">
              <Briefcase size="36" className="text-[#777] text-xl" />
              <span className="my-4 text-4xl font-semibold text-yellowPrimary">
                4+
              </span>
              <p className=" text-lg font-bold text-grayText dark:text-white">
                Years Experience
              </p>
            </li>

            <li className="flex justify-center flex-col items-center mt-8 md:mt-0">
              <Like1 size="36" className="text-[#777]" />
              <span className="my-4 text-4xl font-semibold text-yellowPrimary">
                12+
              </span>
              <p className=" text-lg font-bold text-grayText dark:text-white">
                Done Projects
              </p>
            </li>

            <li className="flex justify-center flex-col items-center mt-8 md:mt-0">
              <Happyemoji size="36" className="text-[#777]" />

              <span className="my-4 text-4xl font-semibold text-yellowPrimary">
                17+
              </span>
              <p className=" text-lg font-bold text-grayText dark:text-white">
                Happy Cutomers
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
