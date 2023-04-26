import PortfolioPage from "@/components/templates/PortfolioPage";
import Work from "@/models/Work";
import connectDB from "@/utils/connectDB";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

const Portfolio = ({ works }) => {
  if (!works || works.length === 0) {
    return <h2>Loading....</h2>;
  }

  return <PortfolioPage works={works} />;
};

export default Portfolio;

export async function getStaticProps({ locale }) {
  try {
    await connectDB();
    const works = await Work.find();
    return {
      props: {
        works: JSON.parse(JSON.stringify(works)),
        ...(await serverSideTranslations(locale, ["portfolio"])),
      },
      revalidate: 24 * 60 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }

  // const res = await fetch("https://fatemeweb-api.vercel.app/PortfoliosData");
  // const data = await res.json();

  // return {
  //   props: {
  //     works: data,
  //     ...(await serverSideTranslations(locale, ["portfolio"])),
  //   },
  //   revalidate: 24 * 60 * 60,
  // };
}
