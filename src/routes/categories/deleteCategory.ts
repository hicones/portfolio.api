import { Elysia, t } from "elysia";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";
import { formatResponse } from "../../lib/utils";

export const deleteCategory = new Elysia()
  .use(isAuthenticated)
  .delete("/:id", async function handler({ params, set }) {
    const { id } = params;
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

    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    set.status = 204;
    return formatResponse(null, 204, "Category deleted successfully");
  });
