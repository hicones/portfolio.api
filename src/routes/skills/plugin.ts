import { Elysia } from "elysia";
import { newSkill } from "./newSkill";
import { getSkills } from "./getSkills";
import { deleteSkill } from "./deleteSkill";
import { editSkill } from "./editSkill";

export const skills = new Elysia({
  prefix: "/skills",
})
  .use(newSkill)
  .use(getSkills)
  .use(deleteSkill)
  .use(editSkill);
