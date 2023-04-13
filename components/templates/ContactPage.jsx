import { CloseCircle, Messages1, Call, Sms, Map } from "iconsax-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Form from "../common/Form";
import Link from "next/link";
import Image from "next/image";

import {
  FiSend,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiCodepen,
  FiDribbble,
} from "react-icons/fi";

const ContactPage = () => {
  const { t } = useTranslation("contact");
  const { locale } = useRouter();

  return (
    <section className="min-h-screen h-full p-2 md:p-4 lg:flex lg:justify-between lg:h-[calc(100vh-56px)] ">
      <Link href="/" className="text-4xl right-9 top-16 fixed z-50">
        <CloseCircle className="text-grayText" />
      </Link>

      <div className="hidden lg:block lg:w-2/6 object-fill relative resize h-[calc(100vh-80px)]">
        <Image
          className="absolute top-0 left-0 "
          src="https://i.postimg.cc/JnMKt5w0/bg.jpg"
          alt="bg"
          fill
        />
      </div>

      <section className="section-container">
        <h1
          className={`title flex justify-center items-center text-2xl lg:text-4xl w-full ${
            locale === "fa" ? "rtl" : "ltr"
          }`}
        >
          <span className="mx-2">{t("get")}</span>
          <span className="text-yellowPrimary">{t("in-touch")}</span>
        </h1>

        <div className="title-line flex justify-center items-center my-7 w-full">
          <span className="border-[#666] w-1/4 border-[1px]"></span>
          <span className="mx-5 text-yellowPrimary">
            <Messages1 />
          </span>
          <span className="border-[#666] w-1/4 border-[1px]"></span>
        </div>

        <div className="md:flex md:justify-between">
          <section
            className={`bg-[#f2f2f2] dark:bg-neutral-900 border-[1px] border-[#ddd] dark:border-[#333] p-6   
            ${locale === "fa" ? "rtl" : "ltr"}`}
          >
            <div className="">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                {t("phone")}
              </h4>
              <p className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <Call />
                <span className={`mx-2 ${locale === "fa" ? "ltr" : ""}`}>
                  {locale === "fa" ? "+۹۸ ۹۲۲ ۴۵۸ ۵۰۵۵" : "+98 922 458 5055"}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                {t("email")}
              </h4>
              <p className="flex justify-start items-center flex-wrap mt-3 text-grayText dark:text-white">
                <Sms />
                <span className="ml-2 text-clip">
                  fatemeghafari77[@gmail].com
                </span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                {t("address")}
              </h4>
              <p className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <Map />
                <span className="mx-2 ">{t("address-text")}</span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                {t("socials")}
              </h4>
              <ul className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <li className="mr-2 text-2xl hover:text-yellowPrimary duration-300">
                  <a
                    href="https://t.me/fatemeweb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiSend />
                  </a>
                </li>

                <li className="mr-2 text-2xl hover:text-yellowPrimary duration-300">
                  <a
                    href="https://www.instagram.com/fatemeweb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram />
                  </a>
                </li>

                <li className="mr-2 text-2xl hover:text-yellowPrimary duration-300">
                  <a
                    href="https://www.linkedin.com/in/fateme-ghafari"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </li>

                <li className="mr-2 text-2xl hover:text-yellowPrimary duration-300">
                  <a
                    href="https://github.com/mfghir"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </li>
                <li className="mr-2 text-2xl hover:text-yellowPrimary duration-300">
                  <a
                    href="https://codepen.io/miss_f_g/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiCodepen />
                  </a>
                </li>

                {/* FiDribbble */}
              </ul>
            </div>
          </section>

          <section className={`text-grayText dark:text-white my-7 md:my-0 md:px-5 ${locale === "fa" ? "rtl":"ltr" }`}>
            <h3 className="font-bold text-lg"> {t("feel-free")}</h3>
            <p className="font-normal text-sm leading-6 my-4">{t("feel-free-text")}</p>
            <Form />
          </section>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
