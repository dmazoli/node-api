import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const list = (req: Request, res: Response ) => {
    console.log("here");
    res.set("Content-Type", "application/json");
    res.status(StatusCodes.OK).send({ "data": [] });
};
