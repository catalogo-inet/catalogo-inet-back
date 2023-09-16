import { Router } from "express";
import { ContactosController } from "../controllers/contactos.controller.js";
export const createContactosRouter = ({ dbModel }) => {
  const ofertasRouter = Router();

  const contactosController = new ContactosController({
    dbModel,
  });

  ofertasRouter.get("/", contactosController.getAll);

  return ofertasRouter;
};
