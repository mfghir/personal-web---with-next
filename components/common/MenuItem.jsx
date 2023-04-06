import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";


const MenuItem = ({}) => {
  const { t } = useTranslation();


  return (
    <section className="flex justify-center items-center lg:justify-between">
      <Image
        className="hidden lg:block lg:w-2/6 h-[calc(100vh-48px)]"
        src="/bg.jpg"
        alt="bg"
        width={800}
        height={1200}
      />

      <section className="flex flex-wrap justify-center lg:w-4/6">
        <div className="flex justify-center text-center items-center flex-col lg:w-[45%] lg:h-60 xl:h-72 lg:m-2">
          <h1 className="text-xl text-neutral-900 dark:text-whitePrimary ">
            HI THERE! I,M
          </h1>
          <h2 className="text-4xl my-3 ">Fateme Ghafari</h2>
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
          href="/about-me"
          className="menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all"
        >
          <div className="flex ">
            <button className="text-effect-down mr-2" data-after="About">
              <span>About</span>
            </button>

            <button className="text-effect-up" data-after="Me">
              <span className="text-yellowPrimary ">Me</span>
            </button>
          </div>
        </Link>

        <Link
          href="/portfolio"
          className="menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all"
        >
          <div className="flex ">
            <button className="text-effect-down mr-2" data-after="My">
              <span>My</span>
            </button>

            <button className="text-effect-up" data-after="Portfolio">
              <span className="text-yellowPrimary ">Portfolio</span>
            </button>
          </div>
        </Link>

        <Link
          href="/contact"
          className="menu-item text-menuItem lg:w-[45%] lg:h-60 xl:h-72 lg:m-2 transition-all"
        >
          <div className="flex justify-between">
            <button className="text-effect-down mr-2" data-after="Get">
              <span>Get</span>
            </button>

            <button className="text-effect-up" data-after="In Touch">
              <span className="text-yellowPrimary ">In Touch</span>
            </button>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default MenuItem;




