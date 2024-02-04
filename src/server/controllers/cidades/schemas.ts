import * as Yup from "yup";
import { ICidade } from "./cidade.model";

const CreateCidadeSchema = Yup.object<ICidade>()
    .shape({
        id: Yup.string().uuid(),
        name: Yup.string().required(),
        state: Yup.string().required().length(2),
        country: Yup.string().default("Brazil")
    })
    .noUnknown(true);

const UpdateCidadeSchema = Yup.object({
    id: Yup.string().uuid().required(),
    name: Yup.string(),
    state: Yup.string().length(2),
    country: Yup.string()
}).noUnknown(true);

type Cidade = Yup.InferType<typeof CreateCidadeSchema>;

export { Cidade, CreateCidadeSchema, UpdateCidadeSchema };
