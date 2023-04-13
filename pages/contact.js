import ContactPage from "@/components/templates/ContactPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  return <ContactPage />;
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
}
