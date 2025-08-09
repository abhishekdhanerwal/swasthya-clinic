import type { AppProps } from "next/app";
import { usePathname } from 'next/navigation';
import { Analytics } from "@vercel/analytics/next"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SpeedDialTooltipOpen from "@/components/speed-dial";
import { InfoHeader } from "@/components/info-header";

import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const isCustomerReviewPage = pathname === "/customer-review";

  return (<>
    <Analytics />
    <InfoHeader />
    <Header />
    <Component {...pageProps} />
    {isCustomerReviewPage ? null : <>
      <SpeedDialTooltipOpen />
      <Footer />
    </>}
  </>)
}
