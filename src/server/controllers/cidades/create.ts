import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "./cidade.model";

export const create = (req: Request<object, object, ICidade>, res: Response) => {
    const data = req.body;
    console.log(data.name);
    data.id = 1;
    res.status(StatusCodes.CREATED).send({ "data": data });
};
