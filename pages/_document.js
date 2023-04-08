import { Html, Head, Main, NextScript } from "next/document";
import { Noto_Sans_Arabic, Poppins, Gowun_Dodum } from "@next/font/google";

export default function Document(props) {
  const { locale } = props;
  return (
    <Html lang={locale}>
    {/* // <Html lang={locale} className="text-[${locale === "fa" ? Noto_Sans_Arabic ? locale=== "en" ?  Poppins : Gowun_Dodum}] `}> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
