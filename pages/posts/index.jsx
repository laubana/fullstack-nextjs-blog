import PostList from "../../components/PostList/PostList";
import { getAllPosts } from "../../services/posts";

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return { props: { posts }, revalidate: 600 };
};

export default (props) => {
  const { posts } = props;

  return <PostList posts={posts} />;
};
