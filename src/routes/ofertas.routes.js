import { Router } from "express";
import { OfertasController } from "../controllers/ofertas.controllers.js";
export const createOfertasRouter = ({ dbModel }) => {
  const ofertasRouter = Router();

  const ofertasController = new OfertasController({
    dbModel,
  });

  ofertasRouter.get("/", ofertasController.getAll);

  return ofertasRouter;
};
