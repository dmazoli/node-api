import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { defaultMainPage } from "../../static";

const CoreRouter = Router();

CoreRouter.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(StatusCodes.OK).send(Buffer.from(defaultMainPage()));
});

export { CoreRouter };
