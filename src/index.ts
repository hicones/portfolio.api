import { Elysia } from "elysia";
import { auth } from "./routes/auth/plugin";
import { categories } from "./routes/categories/plugin";

const app = new Elysia({
  prefix: "/api",
})
  .onError(({ error }) => {
    console.log("Error", error);
    return {
      error,
    };
  })
  .use(auth)
  .use(categories)

  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
