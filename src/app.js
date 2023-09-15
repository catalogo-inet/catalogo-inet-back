import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createDepartamentoRouter } from "./routes/departamento.routes.js";

export const createApp = ({ departamentoModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use(
    "/api/departamentos",
    createDepartamentoRouter({ departamentoModel })
  );

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
