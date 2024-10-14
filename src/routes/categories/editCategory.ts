import { Elysia } from "elysia";
import { categoryModel } from "./setup";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";

export const editCategory = new Elysia()
  .use(categoryModel)
  .use(isAuthenticated)
  .put(
    "/:id",
    async function handler({ params, body, set }) {
      const { id } = params;
      const { name } = body;
      const category = await prisma.category.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!category) {
        set.status = 404;
        return {
          message: "Category not found.",
        };
      }

      if (name.length === 0) {
        set.status = 400;
        return {
          message: "Content cannot be empty.",
        };
      }

      const updatedCategory = await prisma.category.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
        },
      });

      set.status = 200;
      return updatedCategory;
    },
    {
      body: "categoryModel",
    }
  );
