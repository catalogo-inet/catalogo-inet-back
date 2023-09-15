import { Router } from "express";
import { DepartamentoController } from "../controllers/departamento.controllers.js";

export const createDepartamentoRouter = ({ dbModel }) => {
  const departamentoRouter = Router();

  const departamentoController = new DepartamentoController({
    dbModel,
  });

  departamentoRouter.get("/", departamentoController.getAll);
  departamentoRouter.get("/:idDepartamento", departamentoController.getById);

  return departamentoRouter;
};
