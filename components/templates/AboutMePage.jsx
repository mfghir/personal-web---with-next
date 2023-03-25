import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMePage = () => {
  return (
    <div className="min-h-screen h-fit bg-pages mt-2">
      {/* <span className="bg-blue-200 text-4xl right-6 fixed"> */}
      <Link href="/" className=" text-4xl right-6 top-11 fixed">
        X
      </Link>
      {/* </span> */}

      <h1 className="title flex justify-center items-center text-2xl lg:text-4xl">
        <span className="mr-2">About</span>
        <span className="text-yellowPrimary">Me</span>
      </h1>

      <div className="title-line flex justify-center items-center my-7 ">
        <span className="border-[#666] w-1/4 border-[1px]"></span>
        <span className="mx-5 text-yellowPrimary">XXXXX</span>
        <span className="border-[#666] w-1/4 border-[1px]"></span>
      </div>

      <section className="md:flex md:justify-between md:items-start md:p-4">
        <Image
          className="md:w-[30%] "
          src="/bg.jpg"
          alt="bg"
          width={800}
          height={1200}
        />

        <section className="md:w-[70%] ml-4 bg-orange-600 h-screen overflow-y-scroll">
          {/* ----------------- Personal info   */}
          <div className="flex items-center my-4 md:my-0 text-[#656c6d] dark:text-white">
            <span className="">#</span>
            <h3 className="">Personal info</h3>
          </div>

          <p className="text-[#656c6d] dark:text-white md:mt-3">
            I'm a Freelance Web Designer & Developer based in Moscow, Russia, I
            have serious passion for UI effects, animations and creating
            intuitive, with over a decade of experience.
          </p>

          <ul className="lg:flex lg:justify-between">
            <div>
              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                First Name:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Fateme
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Last Name:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Ghafari
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Date of birth:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  5 September 1998
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Nationality:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Iranian
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Freelance:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Available
                </span>
              </li>
            </div>

            <div>
              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Phone:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  +922 458 5055
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Address:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Tehran, Iran
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Email:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  [fatemeghafari77]@gmail.com
                </span>
              </li>

              <li className="text-[#222] dark:text-white font-bold text-sm my-3">
                Spoken Langages:
                <span className="text-[#656c6d] dark:text-[#eee] font-normal ml-3">
                  Farsi, English
                </span>
              </li>
            </div>
          </ul>


          {/* ----------------- Experience   */}
          <section className="">
            <div className="">
              <button>Experience</button>
              <button>Educatio</button>
              <button>Skill</button>
            </div>

          </section>

        </section>
      </section>
    </div>
  );
};

export default AboutMePage;
