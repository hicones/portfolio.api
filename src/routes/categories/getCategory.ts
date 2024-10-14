import Elysia from "elysia";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";

export const getCategories = new Elysia()
  .use(isAuthenticated)
  .get("/", async function handler({ set }) {
    const categories = await prisma.category.findMany();
    set.status = 200;
    return categories;
  });
