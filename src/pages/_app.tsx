import "@styles/globals.css";

import { type AppType } from "next/app";
import { Inter, JetBrains_Mono } from "next/font/google";
import { DefaultSeo } from "next-seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo defaultTitle="jamesl.dev" titleTemplate="%s | jamesl.dev" />
      <div className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
