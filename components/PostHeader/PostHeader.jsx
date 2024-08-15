import Image from "next/image";
import styles from "./PostHeader.module.css";

export default ({ post }) => {
  console.log(`/images/posts/${post.slug}/${post.image}`);
  return (
    <div className={styles.header}>
      <h1>{post.title}</h1>
      <Image
        src={`/images/posts/${post.slug}/${post.image}`}
        alt={post.title}
        width={200}
        height={150}
      />
    </div>
  );
};
