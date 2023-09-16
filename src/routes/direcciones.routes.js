import { Router } from "express";
import { DireccionesController } from "../controllers/direcciones.controller.js";

export const createDireccionesRouter = ({ dbModel }) => {
  const direccionesRouter = Router();

  const direccionesController = new DireccionesController({
    dbModel,
  });

  direccionesRouter.get("/", direccionesController.getAll);

  return direccionesRouter;
};
