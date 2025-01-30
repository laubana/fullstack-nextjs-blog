import Head from "next/head";

import "../styles/globals.css";

import Header from "@components/Header";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};
