import AboutMePage from "@/components/templates/AboutMePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutMe = () => {
  return <AboutMePage />;
};

export default AboutMe;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about-me"])),
    },
  };
}
