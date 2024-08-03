import fs from "fs";
import matter from "gray-matter";
import path from "path";

const directoryPath = path.join(process.cwd(), "db", "posts");

const parseFile = (file) => {
  const filePath = path.join(directoryPath, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const slug = file.replace(/\.md$/, "");

  return {
    content,
    ...data,
    slug,
  };
};

export const getAllPosts = () => {
  const files = fs.readdirSync(directoryPath);

  const posts = files.map((file) => parseFile(file));

  return posts.sort((prev, next) => (prev.date > next.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  const posts = getAllPosts();

  return posts.filter((post) => post.isFeatured);
};

export const getPost = (slug) => {
  const files = fs.readdirSync(directoryPath);

  const posts = files.map((file) => parseFile(file));

  return posts.find((post) => post.slug === slug);
};
