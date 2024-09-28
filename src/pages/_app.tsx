import type { AppProps } from "next/app";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SpeedDialTooltipOpen from "@/components/speed-dial";
import { InfoHeader } from "@/components/info-header";

import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <InfoHeader />
    <Header />
    <Component {...pageProps} />
    <SpeedDialTooltipOpen />
    <Footer />
  </>)
}
