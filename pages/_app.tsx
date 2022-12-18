import "../styles/globals.scss";
import type { AppProps } from "next/app";
import UIContextProvider from "../src/providers/UIContextProvider";
import { Header, Footer } from "../src/components";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <DefaultSeo
          openGraph={{
            url: "https://www.naletteconsulting.com/",
            title: "Nalette Consulting",
            description: "Professional CPA from Virginia, US.",
            images: [
              {
                url: "https://res.cloudinary.com/austinmel/image/upload/v1668845074/naletteconsulting/og-image.png",
                width: 1536,
                height: 1234,
                alt: "nalette consulting logo",
                type: "image/jpeg",
              },
            ],
          }}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </UIContextProvider>
  );
}

export default MyApp;
