import matter from "gray-matter";

import dbConfig from "@configs/dbConfig";
import Post from "@models/Post";

const parsePost = (post) => {
  const { data, content } = matter(post.content);

  return (
    post && {
      ...data,
      ...post,
      content,
    }
  );
};

export const getAllPosts = async () => {
  await dbConfig.connect();

  const existingPosts = await Post.find().lean();

  const parsedExistingPosts = existingPosts.map((existingPost) =>
    parsePost(existingPost)
  );

  return parsedExistingPosts;
};

export const getFeaturedPosts = async () => {
  await dbConfig.connect();

  const existingPosts = await Post.find({ isFeatured: true }).lean();

  const parsedExistingPosts = existingPosts.map((existingPost) =>
    parsePost(existingPost)
  );

  return parsedExistingPosts;
};

export const getPost = async (postId) => {
  await dbConfig.connect();

  const existingPost = await Post.findById(postId).lean();

  const parsedExistingPost = parsePost(existingPost);

  return parsedExistingPost;
};
