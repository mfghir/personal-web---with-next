import { CloseCircle, Briefcase } from "iconsax-react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import FilterBtn from "../modules/FilterBtn";
import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

const PortfolioPage = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const { t } = useTranslation("portfolio");
  // const { locale } = useRouter();

  return (
    <section className="w-full h-full lg:h-[593px] p-2 md:p-4 lg:flex lg:justify-between relative">
      

      <div className="hidden lg:block lg:w-2/6 object-fill relative resize ">
        <Image
          className="absolute top-0 left-0"
          src="https://i.postimg.cc/JnMKt5w0/bg.jpg"
          alt="bg"
          fill
        />
      </div>

      <section className="section-container">
        <h1 className="title flex justify-center items-center text-2xl lg:text-4xl w-full">
          <span className="mr-2">{t("my")}</span>
          <span className="text-yellowPrimary">{t("portfolio")}</span>
        </h1>

        <div className="title-line flex justify-center items-center my-7 w-full">
          <span className="border-[#666] w-1/4 border-[1px]"></span>
          <span className="mx-5 text-yellowPrimary">
            <Briefcase />
          </span>
          <span className="border-[#666] w-1/4 border-[1px]"></span>
        </div>

        <FilterBtn
          works={works}
          setFilterWork={setFilterWork}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="w-full flex flex-wrap justify-between">
          {filterWork.map((item) => (
            <div className="portfolio-item my-5 relative w-full h-[190px]  md:w-[45%]  md:h-60 lg:w-[32%] lg:h-52">
              <img
                className="object-cover w-full h-full"
                // src={`/${item.imgUrl}`}
                src={item.imgUrl}
                alt={item.title}
              />
              <div className="portfolio-hover">
                <ul className="flex">
                  <li>
                    <a
                      className="text-white text-2xl hover:text-neutral-900 duration-300 mr-4 inline-block"
                      href={item.gitLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white text-2xl hover:text-neutral-900 duration-300"
                      href={item.netlifyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillEye />
                    </a>
                  </li>
                </ul>
                <p className="w-full text-center text-white font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PortfolioPage;
