import ReactMarkdown from "react-markdown";
import styles from "./PostContent.module.css";
import PostHeader from "../PostHeader";

export default ({ post }) => {
  return (
    <article className={styles.content}>
      <PostHeader post={post} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
