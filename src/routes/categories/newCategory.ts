import { Elysia } from "elysia";
import { categoryModel } from "./setup";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";

export const newCategory = new Elysia()
  .use(categoryModel)
  .use(isAuthenticated)
  .post(
    "/",
    async function handler({ body, set }) {
      const { name } = body;
      if (name.length === 0) {
        set.status = 400;
        return {
          message: "Content cannot be empty.",
        };
      }
      const category = await prisma.category.create({
        data: {
          name,
        },
      });

      set.status = 201;
      return category;
    },
    {
      body: "categoryModel",
    }
  );
