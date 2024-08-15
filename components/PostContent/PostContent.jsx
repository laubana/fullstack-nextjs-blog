import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styles from "./PostContent.module.css";
import PostHeader from "../PostHeader";

export default ({ post }) => {
  return (
    <article className={styles.content}>
      <PostHeader post={post} />
      <ReactMarkdown
        components={{
          code: (code) => {
            const language = code.className.replace("language-", "");

            return (
              <SyntaxHighlighter
                children={code.children.toString().replace(/\n$/, "")}
                language={language}
                style={atomDark}
              />
            );
          },
          p: (p) => {
            const { node } = p;

            if (node.children[0].tagName === "img") {
              const img = node.children[0];

              return (
                <div className={styles.image}>
                  <Image
                    alt={img.properties.alt}
                    height={300}
                    src={`/images/posts/${post.slug}/${img.properties.src}`}
                    width={600}
                  />
                </div>
              );
            } else {
              return <p>{p.children}</p>;
            }
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
