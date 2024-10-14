# portfolio-api

A tiny example that implements token based authentication in [bun](https://bun.sh/) and [elysia](https://elysiajs.com/).

## Try locally

- Install [bun](https://bun.sh/).
- Clone this repository.
- Run `bun i` to install the necessary packages.
- Run `bunx prisma generate` to initialize the sqlite database from the prisma [schema file](prisma/schema.prisma).
- Set environment variables
  - `DATABASE_URL`
  - `JWT_ACCESS_SECRET`
  - `JWT_REFRESH_SECRET`
- Run `bun run dev` to start the application.
