import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

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
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};
