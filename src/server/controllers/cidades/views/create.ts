import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../cidade.model";
import { CreateCidadeSchema } from "../schemas";
import { ValidationError } from "yup";

export const create = (req: Request<object, object, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined;
    try {
        validatedData = CreateCidadeSchema.validateSync(
            req.body,
            {
                abortEarly: false,
                stripUnknown: true
            }
        );
    } catch (error) {
        const yupError: ValidationError = error as ValidationError;
        const validationErros: Record<string, string> = {};

        yupError.inner.forEach((inner) => {
            if (inner.path === undefined) return;
            validationErros[inner.path] = inner.message;
        });
        return res.status(StatusCodes.BAD_REQUEST).json({
            "errors": validationErros
        });
    }

    res.status(StatusCodes.CREATED).send({ "data": validatedData });
};
