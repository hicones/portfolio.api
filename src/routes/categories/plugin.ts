import { Elysia } from "elysia";
import { newCategory } from "./newCategory";
import { getCategories } from "./getCategory";
import { deleteCategory } from "./deleteCategory";
import { editCategory } from "./editCategory";

export const categories = new Elysia({
  prefix: "/categories",
})
  .use(newCategory)
  .use(getCategories)
  .use(deleteCategory)
  .use(editCategory);
