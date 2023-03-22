import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Link from "next/link";
import MenuCard from "@/components/common/MenuCard";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h flex justify-center  ">
        <Image
          className="hidden lg:block w-80"
          src="/bg.jpg"
          alt="bg"
          width={800}
          height={1200}
        />

        <div className="flex justify-center items-center flex-col " >
          <div>
            <h1>HI THERE! I,M</h1>
            <h2>Fateme Ghafari</h2>
          </div>

          
          <MenuCard  />
          <Link href="/about-me">Abot<span className="text-yellow-500" >me</span></Link> <br />
          <Link href="/portfolio">Portfolio</Link>
          <br />
          <Link href="/contact">contact</Link>
        </div>
      </main>
    </>
  );
}
