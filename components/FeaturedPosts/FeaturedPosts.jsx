import styles from "./FeaturedPosts.module.css";

import PostGrid from "@components/PostGrid";

export default ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};
