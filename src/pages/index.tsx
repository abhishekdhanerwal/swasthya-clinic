import Head from "next/head";

import { Speciality } from "@/components/speciality";
import { Testimonials } from "@/components/testimonials";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Sonia Malik</title>
        <meta name="description" content="Best Gynaecologist Pregnancy Care" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.banner}>Banner</div>
        <Speciality />
        <Testimonials />
      </main>
    </>
  );
}