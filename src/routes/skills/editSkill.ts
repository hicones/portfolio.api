import { Elysia } from "elysia";
import { skillModel } from "./setup";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";
import { formatResponse } from "../../lib/utils";

export const editSkill = new Elysia()
  .use(skillModel)
  .use(isAuthenticated)
  .put(
    "/:id",
    async function handler({ params, body, set }) {
      const { id } = params;
      const { name, progress } = body;
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

      if (name.length === 0) {
        set.status = 400;
        return {
          message: "Content cannot be empty.",
        };
      }

      const updatedSkill = await prisma.skill.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          progress,
        },
      });

      set.status = 201;
      return formatResponse(updatedSkill, 201, "Skill updated successfully");
    },
    {
      body: "skillModel",
    }
  );
