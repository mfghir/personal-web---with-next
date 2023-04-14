import Layout from "@/components/modules/Layout";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
