import PortfolioPage from "@/components/templates/PortfolioPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Portfolio = ({ works }) => {
  return (
    <>
      <PortfolioPage works={works} />
    </>
  );
};

export default Portfolio;

export async function getStaticProps({ locale }) {
  const res = await fetch("https://fatemeweb-api.vercel.app/PortfoliosData");
  const data = await res.json();

  // if (!data.id) {
  //   return {
  //     // notFound: true,
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: { works: data, ...(await serverSideTranslations(locale, ["portfolio"])) },
    revalidate: 24 * 60 * 60,
   
  };
}
