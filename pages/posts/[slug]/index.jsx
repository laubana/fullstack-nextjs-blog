import Head from "next/head";

import Loader from "../../../components/Loader/Loader";
import PostContent from "../../../components/PostContent/PostContent";

import { getFeaturedPosts, getPost } from "../../../services/posts";

export const getStaticProps = async (context) => {
  const { params } = context;

  const { slug } = params;

  const post = getPost(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const posts = getFeaturedPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export default (props) => {
  const { post } = props;

  if (!post) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Here is a post." />
      </Head>
      <PostContent post={post} />
    </>
  );
};
