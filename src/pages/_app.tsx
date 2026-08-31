import '@styles/globals.css';

import { type AppType } from 'next/app';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import { generateDefaultSeo } from 'next-seo/pages';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {generateDefaultSeo({
          defaultTitle: 'jamesl.dev',
          titleTemplate: '%s | jamesl.dev',
          openGraph: {
            type: 'website',
            locale: 'en_GB',
            url: 'https://www.jamesl.dev/',
            siteName: 'jamesl.dev',
            images: [
              {
                url: 'https://www.jamesl.dev/assets/img/og-image.png',
                width: 1200,
                height: 630,
                alt: 'jamesl.dev Homepage',
              },
              {
                url: 'https://www.jamesl.dev/assets/img/og-image-square.png',
                width: 1200,
                height: 1200,
                alt: 'jamesl.dev Homepage square variant',
              },
            ],
          },
        })}
      </Head>
      <div className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
