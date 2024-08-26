import { Header } from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/footer";
import { InfoHeader } from "@/components/info-header";
import { FloatingActionBtn } from "@/components/floating-action-btn";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <InfoHeader />
    <Header />
    <div className={styles.content}>
      <Component {...pageProps} />
    </div>
    <FloatingActionBtn />
    <Footer />
  </>)
}
