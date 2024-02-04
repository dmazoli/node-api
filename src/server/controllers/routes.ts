import { Router } from "express";
import { CidadesRoutes } from "./cidades/routes";

export const ControllerRoutes = Router();

ControllerRoutes.use("/cidades", CidadesRoutes);
