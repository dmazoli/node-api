import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const exclude = (req: Request, res: Response ) => {
    res.status(StatusCodes.NO_CONTENT).send();
};
