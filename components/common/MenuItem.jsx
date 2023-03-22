import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuItem = () => {
  return (
    <section className="flex justify-center  lg:justify-between  ">
      <Image
        className="hidden lg:block w-80 lg:w-2/6"
        src="/bg.jpg"
        alt="bg"
        width={800}
        height={1200}
      />

      <section className="flex flex-wrap justify-center  lg:w-4/6">
        <div className="flex justify-center text-center  items-center  flex-col lg:w-[45%] lg:h-60 lg:m-2">
          <h1 className="text-xl text-[#eeeeee]">HI THERE! I,M</h1>
          <h2 className="text-4xl my-3 ">Fateme Ghafari</h2>
          <h3 className="text-yellowPrimary text-2xl">ee</h3>
        </div>

        <div className="menu-item   lg:w-[45%] lg:h-60 lg:m-2">
          <Link href="/about-me">
            About <span className="text-yellowPrimary">Me</span>
          </Link>
        </div>

        <div className="menu-item   lg:w-[45%] lg:h-60 lg:m-2">
          <Link href="/portfolio">
            My <span className="text-yellowPrimary">Portfolio</span>
          </Link>
        </div>

        <div className="menu-item  lg:w-[45%] lg:h-60 lg:m-2">
          <Link href="/contact">
            Get <span className="text-yellowPrimary">In Touch</span>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MenuItem;
