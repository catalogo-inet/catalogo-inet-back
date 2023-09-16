import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createDepartamentoRouter } from "./routes/departamento.routes.js";
import { createSectoresRouter } from "./routes/sectores.routes.js";
import { createOfertasRouter } from "./routes/ofertas.routes.js";

export const createApp = ({ dbModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use("/api/departamentos", createDepartamentoRouter({ dbModel }));
  app.use("/api/sectores", createSectoresRouter({ dbModel }));
  app.use("/api/ofertas", createOfertasRouter({ dbModel }));

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
