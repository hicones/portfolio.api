import { Elysia, t } from "elysia";

export const skillModel = new Elysia().model({
  skillModel: t.Object({
    name: t.String(),
    progress: t.Number({
      minimum: 0,
      maximum: 100,
    }),
  }),
});
