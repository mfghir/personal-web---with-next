import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CloseCircle,
  Personalcard,
  User,
  Briefcase,
  Calendar,
  Teacher,
  Star1,
} from "iconsax-react";
import AboutOne from "../modules/AboutOne";
import AboutTwo from "../modules/AboutTwo";

const AboutMePage = () => {
  return (
    <div className="min-h-screen h-fit mt-2 p-2 md:p-4 lg:flex">
      <Link href="/" className=" text-4xl right-9 top-16 fixed">
        <CloseCircle />
      </Link>

      <Image
        className="hidden lg:block lg:w-[30%] object-fill"
        src="/bg.jpg"
        alt="bg"
        width={800}
        height={1200}
      />

      <section className=" bg-pages lg:w-[70%] md:flex md:justify-between md:items-start md:flex-wrap p-4 ">
        <div className="xl:w-4/5  md:flex md:justify-between md:items-start md:flex-wrap">
          <h1 className="title flex justify-center items-center text-2xl lg:text-4xl w-full">
            <span className="mr-2">About</span>
            <span className="text-yellowPrimary">Me</span>
          </h1>

          <div className="title-line flex justify-center items-center my-7 w-full">
            <span className="border-[#666] w-1/4 border-[1px]"></span>
            <span className="mx-5 text-yellowPrimary">
              <Personalcard variant="Bold" />
            </span>
            <span className="border-[#666] w-1/4 border-[1px]"></span>
          </div>

          <Image
            className="lg:hidden md:w-[30%]"
            src="/bg.jpg"
            alt="bg"
            width={800}
            height={1200}
          />
          <section className=" lg:w-full lg:p-4 md:w-[65%] md:ml-4 overflow-y-scroll">
            {/* ----------------- Personal info   */}
            <AboutOne />
          </section>

          {/* ----------------- exprience + skills + education   */}
          <section className="pt-7 border-t-[1px] border-[#333] w-full lg:flex lg:justify-between">
            <AboutTwo />
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
