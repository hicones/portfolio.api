import { Elysia, t } from "elysia";

export const categoryModel = new Elysia().model({
  categoryModel: t.Object({
    name: t.String(),
  }),
});
