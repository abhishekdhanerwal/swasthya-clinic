import type { AppProps } from "next/app";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SpeedDialTooltipOpen from "@/components/speed-dial";
import { InfoHeader } from "@/components/info-header";

import styles from "@/styles/Home.module.css";
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <InfoHeader />
    <Header />
    <div className={styles.content}>
      <Component {...pageProps} />
    </div>
    <SpeedDialTooltipOpen />
    <Footer />
  </>)
}
