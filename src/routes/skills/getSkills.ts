import Elysia from "elysia";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { prisma } from "../../prisma/prisma";
import { formatResponse } from "../../lib/utils";

export const getSkills = new Elysia()
  .use(isAuthenticated)
  .get("/", async function handler({ set }) {
    const skills = await prisma.skill.findMany();
    set.status = 200;

    return formatResponse(skills, 200, "Skills fetched successfully");
  });
