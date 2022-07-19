import { ICategory } from "../@types";

/**
 * Lấy tất cả danh mục từ localStorage
 */
export const getCategories = (): ICategory[] => {
  const categories = JSON.parse(localStorage.getItem("categories") || "[]");//parse là để chuyển string thành đối tượng
  return categories;
};

/**
 * Tìm danh mục theo slug
 */
export const findCategoryBySlug = (slug: string): ICategory | undefined => {
  const categories = getCategories();
  const category = categories.find((category) => category.slug === slug);
  return category;
};

/**
 * Thêm danh mục mới vào localStorage
 */
export const addCategory = (category: ICategory): void => {
  const categories = getCategories();
  categories.push(category);
  localStorage.setItem("categories", JSON.stringify(categories));
};
