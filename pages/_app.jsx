import Head from "next/head";

import Layout from "../modules/Layout/Layout";
import "../styles/globals.css";

export default ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};
