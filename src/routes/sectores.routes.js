import { Router } from "express";
import { SectoresController } from "../controllers/sectores.controller.js";

export const createSectoresRouter = ({ dbModel }) => {
  const sectoresRouter = Router();

  const sectoresController = new SectoresController({
    dbModel,
  });

  sectoresRouter.get("/", sectoresController.getAll);

  return sectoresRouter;
};
