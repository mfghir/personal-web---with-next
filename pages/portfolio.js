import PortfolioPage from "@/components/templates/PortfolioPage";

const Portfolio = ({ works }) => {
  return (
    <>
      <PortfolioPage works={works} />
    </>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const res = await fetch(
    "https://mfghir-personal-web-api.vercel.app/PortfoliosData"
  );
  const data = await res.json();
  console.log(data);

  // if (!data.id) {
  //   return {
  //     // notFound: true,
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: { works: data },
    revalidate: 24 * 60 * 60,
  };
}
