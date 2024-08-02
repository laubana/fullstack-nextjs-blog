import PostContent from "../../../components/PostContent/PostContent";

const post = {
  date: "2024-02-10",
  content: "# Content",
  excerpt: "excerpt",
  image: "/images/hero.jpg",
  slug: "slug",
  title: "title",
};

export default () => {
  return <PostContent post={post} />;
};
