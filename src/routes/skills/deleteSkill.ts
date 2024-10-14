import { Elysia, t } from "elysia";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";
import { formatResponse } from "../../lib/utils";

export const deleteSkill = new Elysia()
  .use(isAuthenticated)
  .delete("/:id", async function handler({ params, set }) {
    const { id } = params;
    const skill = await prisma.skill.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!skill) {
      set.status = 404;
      return {
        message: "Skill not found.",
      };
    }

    await prisma.skill.delete({
      where: {
        id: Number(id),
      },
    });

    set.status = 204;
    return formatResponse(null, 204, "Skill deleted successfully");
  });
