import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createDepartamentosRouter } from "./routes/departamentos.routes.js";
import { createSectoresRouter } from "./routes/sectores.routes.js";
import { createOfertasRouter } from "./routes/ofertas.routes.js";
import { createContactosRouter } from "./routes/contactos.routes.js";

export const createApp = ({ dbModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use("/api/departamentos", createDepartamentosRouter({ dbModel }));
  app.use("/api/sectores", createSectoresRouter({ dbModel }));
  app.use("/api/ofertas", createOfertasRouter({ dbModel }));
  app.use("/api/contactos", createContactosRouter({ dbModel }));

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
