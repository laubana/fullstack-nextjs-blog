import Head from "next/head";

import ContactForm from "../../components/ContactForm/ContactForm";

export default () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact me." />
      </Head>
      <ContactForm />
    </>
  );
};
