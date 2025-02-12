import Head from "next/head";

import FeaturedPosts from "@components/FeaturedPosts";
import Hero from "@components/Hero";
import { getFeaturedPosts } from "@services/posts";

export const getStaticProps = async () => {
  const posts = await getFeaturedPosts();

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
    revalidate: 3600,
  };
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
