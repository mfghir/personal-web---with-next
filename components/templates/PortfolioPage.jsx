import { CloseCircle, Briefcase } from "iconsax-react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FilterBtn from "../modules/FilterBtn";
// import MoveItems from "./MoveItems";

const PortfolioPage = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="min-h-screen h-full mt-2 p-2 md:p-4 lg:flex">
      <Link href="/" className="text-4xl right-9 top-16 fixed z-50">
        <CloseCircle className="text-grayText" />
      </Link>

      <div className="hidden lg:block lg:w-[30%] object-fill relative resize">
        <Image className="absolute top-0 left-0" src="/bg.jpg" alt="bg" fill />
      </div>

      <section className="section-container">
        <h1 className="title flex justify-center items-center text-2xl lg:text-4xl w-full">
          <span className="mr-2">My</span>
          <span className="text-yellowPrimary">Portfolio</span>
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

        {/* <MoveItems /> */}

        <div className="bg-red-500 w-full flex flex-wrap justify-between">
          {filterWork.map((item) => (
            <div className="portfolio-item  bg-blue-300 w-full h-[190px] my-5 relative md:w-[45%]">
              <img
                className=" object-cover w-full h-full "
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
