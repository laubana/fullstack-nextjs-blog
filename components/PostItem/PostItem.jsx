import Image from "next/image";
import Link from "next/link";
import styles from "./PostItem.module.css";
import { formatDate } from "../../helpers/date";

export default ({ post }) => {
  return (
    <li className={styles.post}>
      <Link href={`/posts/${post.slug}`}>
        <div className={styles.image}>
          <Image
            src={`/images/posts/${post.slug}/${post.image}`}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <time>{formatDate(post.date)}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
