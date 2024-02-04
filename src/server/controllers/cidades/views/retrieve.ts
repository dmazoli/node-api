import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const retrieve = (req: Request, res: Response ) => {
    res.status(StatusCodes.OK).send({
        "data": {
            "id": 1,
            "name":"Botucatu",
            "state":"SP",
            "country":"Brazil"
        }
    });
};
