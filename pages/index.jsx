import Head from "next/head";

import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

import { getFeaturedPosts } from "../services/posts";

export const getStaticProps = async () => {
  const posts = getFeaturedPosts();

  return { props: { posts }, revalidate: 600 };
};

export default (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="It is a blog." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};
