import { Elysia } from "elysia";
import { skillModel } from "./setup";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";
import { formatResponse } from "../../lib/utils";

export const newSkill = new Elysia()
  .use(skillModel)
  .use(isAuthenticated)
  .post(
    "/",
    async function handler({ body, set }) {
      const { name, progress } = body;
      if (name.length === 0) {
        set.status = 400;
        return {
          message: "Content cannot be empty.",
        };
      }
      const skill = await prisma.skill.create({
        data: {
          name,
          progress,
        },
      });

      set.status = 201;
      return formatResponse(skill, 201, "Skill created successfully");
    },
    {
      body: "skillModel",
    }
  );
