import { Request, Response } from "express";
import { ICidade } from "./cidade.model";
import { StatusCodes } from "http-status-codes";

export const update = (req: Request<object, object, ICidade>, res: Response) => {

    const data = req.body;
    console.log(data.name);
    res.status(StatusCodes.OK).send({ "data": data });
};

