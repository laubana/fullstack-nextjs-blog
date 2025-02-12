import Head from "next/head";

import Loader from "@components/Loader";
import PostContent from "@components/PostContent";
import { getFeaturedPosts, getPost } from "@services/posts";

export const getStaticProps = async (context) => {
  const { params } = context;

  const { postId } = params;

  const post = await getPost(postId);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  const posts = await getFeaturedPosts();

  return {
    paths: JSON.parse(JSON.stringify(posts)).map((post) => ({
      params: { postId: post._id },
    })),
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
