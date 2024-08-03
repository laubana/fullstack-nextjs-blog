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

  return <PostContent post={post} />;
};
