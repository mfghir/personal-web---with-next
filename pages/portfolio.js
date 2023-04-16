import PortfolioPage from "@/components/templates/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Portfolio = ({ works }) => {
  if (!works || works.length === 0) {
    return <h2>Loading....</h2>;
  }

  return <PortfolioPage works={works} />;
};

export default Portfolio;

export async function getStaticProps({ locale }) {
  const res = await fetch("https://fatemeweb-api.vercel.app/PortfoliosData");
  const data = await res.json();

  return {
    props: {
      works: data,
      ...(await serverSideTranslations(locale, ["portfolio"])),
    },
    revalidate: 24 * 60 * 60,
  };
}
