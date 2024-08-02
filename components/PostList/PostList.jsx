import styles from "./PostList.module.css";
import PostGrid from "../PostGrid";

export default ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};
