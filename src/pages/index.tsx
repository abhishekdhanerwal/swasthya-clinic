import Head from "next/head";
import Script from "next/script";

import { Speciality } from "@/components/speciality";
import { Testimonials } from "@/components/testimonials";
import { KnowYourDoc } from "@/components/know-your-doc";
import { Banner } from "@/components/banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Sonia Malik</title>
        <meta name="description" content="Best Gynaecologist Pregnancy Care" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="google-site-verification" content="JJeWomkEe0Co3QiVW5vwa2KxJTh-Or0Ak88v3TZxfmM" />
        <link rel="icon" href="/favicon.ico" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6534244077515652" crossOrigin="anonymous"></Script>
      </Head>
      <main>
        <Banner />
        <KnowYourDoc />
        <Speciality />
        <Testimonials />
      </main>
    </>
  );
}