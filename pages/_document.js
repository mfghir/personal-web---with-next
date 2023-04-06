// import { useTranslation } from "next-i18next";
// import Document, { Html, Main, NextScript, Head } from "next/document";
// import { useState } from "react";

// function MyDocument(props) {
// const { locale } = props;






// return (
// <Html dir={locale === "fa" ? "rtl" : "ltr"} lang={locale}>
// <Head></Head>
// <body>
// <Main />
// <NextScript />
// </body>
// </Html>
// );
// }

// // MyDocument.getInitialProps = async (ctx) => {
// // const initialProps = await Document.getInitialProps(ctx);
// // return { ...initialProps, locale: ctx?.locale || "fa" };
// // };

// export default MyDocument;




import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
