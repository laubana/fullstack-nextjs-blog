import PostList from "../../components/PostList/PostList";

const posts = [
  {
    date: "2024-02-10",
    excerpt: "excerpt",
    image: "/images/hero.jpg",
    slug: "slug",
    title: "title",
  },
];

export default () => {
  return <PostList posts={posts} />;
};
