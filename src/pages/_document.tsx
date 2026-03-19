import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6534244077515652" 
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
