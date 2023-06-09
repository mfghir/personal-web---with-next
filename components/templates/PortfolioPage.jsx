import { Briefcase, Heart } from "iconsax-react";
import { AiFillGithub, AiFillEye, AiOutlineDribbble } from "react-icons/ai";
import Image from "next/image";

import { useEffect, useState } from "react";
import FilterBtn from "../modules/FilterBtn";
import { useTranslation } from "next-i18next";

const PortfolioPage = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const { t } = useTranslation("portfolio");

  // const [likes, setLikes] = useState(0);
  // const [clickedBtn, setClickedBtn] = useState(false);
  // const [worksData, setWorksData] = useState(works);

  // const updateData = () => {
  //   fetch("https://fatemeweb-api.vercel.app/PortfoliosData").then((res) =>
  //     res.json().then((data) => setWorksData(data.data))
  //   );
  // };

  //  useEffect(() => {
  //   updateData();
  // }, []);

  // const handleLike = async () => {
  //   const res = await fetch("/api/data", {
  //     method: "POST",
  //     body: JSON.stringify({ like: likes }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  const likeHandler = async (item) => {
    const res = await fetch(`/api/data/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ like: item.like + 1 }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    // updateData();
    // if(data.status === "ok"){
    //   setClickedBtn(true);
    // }
  };

  // const likeHandler = async (item) => {
  //   const res = await fetch(
  //     `https://fatemeweb-api.vercel.app/PortfoliosData/${item.id}`,
  //     {
  //       method: "PATCH",
  //       body: JSON.stringify({ like: item.like + 1 }),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );

  //   const data = await res.json();
  //   console.log(data);
  //   // if (data.status === "success") router.reload();
  //   // updateData();
  // };

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

        <div className="w-full flex flex-wrap justify-between md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {filterWork.map((item) => (
            <section className="w-full my-6" key={item.id}>
              <div className="portfolio-item  relative w-full h-[190px]  md:h-60 lg:h-52">
                <Image
                  className="object-cover w-full h-full relative"
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                />

                <div className="portfolio-hover">
                  <div className="flex">
                    {item.gitLink && (
                      <a
                        className="text-white text-3xl hover:text-neutral-900 duration-300 mr-2 inline-block"
                        href={item.gitLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillGithub />
                      </a>
                    )}
                    {item.netlifyLink && (
                      <a
                        className="text-white text-3xl hover:text-neutral-900 duration-300"
                        href={item.netlifyLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillEye />
                      </a>
                    )}
                    {item.dribbbleLink && (
                      <a
                        className="text-white text-3xl hover:text-neutral-900 duration-300 ml-2"
                        href={item.dribbbleLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineDribbble />
                      </a>
                    )}
                  </div>
                  <p className="w-full text-center text-white font-semibold">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-2 flex justify-end">
                <p className="mr-1">{item.like}</p>
                <button onClick={() => likeHandler(item)}>
                  <Heart
                    variant="Bold"
                    className="text-red-500 hover:text-red-300 duration-300 cursor-pointer"
                  />
                </button>
              </div> */}
            </section>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PortfolioPage;
