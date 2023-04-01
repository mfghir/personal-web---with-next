import React, { useEffect } from "react";

// import { useQuery } from "react-query";

const FilterBtn = ({ setActiveFilter, activeFilter, setFilterWork, works }) => {


  // const { data, isLoading, isError, error } = useQuery("portfolios", () =>
  //   fetch("https://mfghir-personal-web-api.vercel.app/PortfoliosData").then(
  //     (res) => res.json()
  //   )
  // );


  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(works);
      return;
    }
    const filtered = works.filter((item) => item.title.includes(activeFilter));
    setFilterWork(filtered);
  }, [activeFilter, setFilterWork, works]);



  // if (isLoading) return <Loading />

  // if (isError) return <div>Error: {error.message}</div>;


  return (
    <div className="bg-pink-400 flex">
      {["All", "Web", "React", "Js","Nextjs", "UI"].map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveFilter(item)}
          className={`mr-4 ${activeFilter === item ? "text-yellowPrimary" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default FilterBtn;
