import { Router } from "express";
import { InstitucionesController } from "../controllers/instituciones.controller.js";

export const createInstitucionesRouter = ({ dbModel }) => {
  const institucionesRouter = Router();

  const institucionesController = new InstitucionesController({
    dbModel,
  });

  institucionesRouter.get("/", institucionesController.getAll);
  institucionesRouter.get("/:idInstitucion", institucionesController.getById);

  return institucionesRouter;
};
