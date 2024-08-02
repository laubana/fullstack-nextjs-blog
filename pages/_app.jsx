import Layout from "../modules/Layout/Layout";
import "../styles/globals.css";

export default ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
