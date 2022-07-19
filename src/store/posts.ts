import { IPost } from "../@types";

/**
 * Lấy tất cả bài viết từ localStorage
 */
export const getPosts = (): IPost[] => {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  return posts;
};

/**
 * Lấy bài viết theo index
 */
export const getPostByIndex = (index: number): IPost => {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  return posts[index];
};

/**
 * Thêm bài viết mới vào localStorage
 */
export const addPost = (post: IPost): void => {
  const posts = getPosts();
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
};

/**
 * Cập nhật bài viết theo index
 */
export const updatePostByIndex = (index: number, post: IPost): void => {
  const posts = getPosts();
  if (posts[index]) {
    posts[index] = { ...posts[index], ...post };
    localStorage.setItem("posts", JSON.stringify(posts));
  }
};

/**
 * Xóa bài viết theo index
 */
export const deletePost = (index: number): void => {
  const posts = getPosts();
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
};
