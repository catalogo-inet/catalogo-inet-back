import { Router } from "express";
import { JurisdiccionesController } from "../controllers/jurisdicciones.controller.js";

export const createJurisdiccionesRouter = ({ dbModel }) => {
  const jurisdiccionesRouter = Router();

  const jurisdiccionesController = new JurisdiccionesController({
    dbModel,
  });

  jurisdiccionesRouter.get("/", jurisdiccionesController.getAll);
  jurisdiccionesRouter.get(
    "/:Jurisdiccion_Id",
    jurisdiccionesController.getById
  );

  return jurisdiccionesRouter;
};
