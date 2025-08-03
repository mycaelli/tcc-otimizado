import { serve } from "bun";
import index from "./public/index.html";

const server = serve({
  routes: {
    // APIs
    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({ message: `Hello, ${name}!` });
    },

    "/colours": async () => {
      return Response.json({
        message: "Colours page is on baby!",
        method: "GET",
      });
    },

    // SPA fallback: qualquer outra rota volta pro React
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
