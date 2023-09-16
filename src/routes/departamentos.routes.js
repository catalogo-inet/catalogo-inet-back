import { Router } from "express";
import { DepartamentosController } from "../controllers/departamentos.controller.js";

export const createDepartamentosRouter = ({ dbModel }) => {
  const departamentosRouter = Router();

  const departamentosController = new DepartamentosController({
    dbModel,
  });

  departamentosRouter.get("/", departamentosController.getAll);
  departamentosRouter.get("/:idDepartamento", departamentosController.getById);

  return departamentosRouter;
};
