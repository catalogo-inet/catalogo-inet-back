import { Router } from "express";
import { DepartamentoController } from "../controllers/departamento.controllers.js";

export const createDepartamentoRouter = ({ departamentoModel }) => {
  const departamentoRouter = Router();

  const departamentoController = new DepartamentoController({
    departamentoModel,
  });

  departamentoRouter.get("/", departamentoController.getAll);
  departamentoRouter.get("/:idDepartamento", departamentoController.getById);

  return departamentoRouter;
};
