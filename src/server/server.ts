import express from "express";
import "dotenv/config";

import { CoreRouter } from "./routes";
import { ControllerRoutes } from "./controllers/routes";
import { RequestInfo } from "./middlewares";

const Server = express();

// Middlewares
Server.use(express.json());
if (process.env.DEV) Server.use(RequestInfo);

// Router config
Server.use(CoreRouter);
Server.use(ControllerRoutes);

export { Server };
