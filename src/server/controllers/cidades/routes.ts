import { Router } from "express";
import { CidadeController } from "./index";

export const CidadesRoutes = Router();

CidadesRoutes.get("/", CidadeController.list);
CidadesRoutes.get("/:id", CidadeController.retrieve);
CidadesRoutes.post("/", CidadeController.create);
CidadesRoutes.patch("/:id", CidadeController.update);
CidadesRoutes.delete("/:id", CidadeController.exclude);
