import { NextFunction, Request, Response } from "express";
import clc from "cli-color";

export const RequestInfo = (req: Request, res: Response, next: NextFunction) => {
    res.on("finish", () => {
        const statusCode: number = res.statusCode;
        const requestUrl: string = req.url;
        const httpVerb: string = req.method;
        const output: string = `[${httpVerb}] ${requestUrl} ${statusCode}`;
        if (statusCode < 400) {
            console.log(clc.bgGreen(clc.black("[INFO]", output)));
        } else if (400 <= statusCode && statusCode < 500) {
            console.info(clc.bgYellow(clc.black("[WARNING]", output)));
        } else {
            console.error(clc.bgRed(clc.white("[ERROR]", output)));
        }
    });
    next();
};
