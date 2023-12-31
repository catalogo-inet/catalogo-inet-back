import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createDireccionesRouter } from "./routes/direcciones.routes.js";
import { createInstitucionesRouter } from "./routes/instituciones.routes.js";
import { createJurisdiccionesRouter } from "./routes/jurisdicciones.routes.js";


export const createApp = ({ dbModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use("/api/direcciones", createDireccionesRouter({ dbModel }));
  app.use("/api/instituciones", createInstitucionesRouter({ dbModel }));
  app.use("/api/jurisdicciones", createJurisdiccionesRouter({ dbModel }));

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
