import { Html, Head, Main, NextScript } from "next/document";
import { Noto_Sans_Arabic, Poppins, Gowun_Dodum } from "@next/font/google";

export default function Document(props) {
  const { locale } = props;

  

  
  // locale === "fa" ? Noto_Sans_Arabic ? locale=== "en" ?  Poppins : Gowun_Dodum

  // {/*  <Html lang={locale} className={`text-[${locale === "fa" ? Noto_Sans_Arabic ? locale=== "en" ?  Poppins : Gowun_Dodum}] `}> */}
  return (
    <Html >
    <Head />
    <link  href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+Arabic&family=Poppins&display=swap" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
