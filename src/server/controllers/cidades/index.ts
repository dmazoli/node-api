import * as create from "./create";
import * as exclude from "./exclude";
import * as list from "./list";
import * as retrieve from "./retrieve";
import * as update from "./update";

export const CidadeController = {
    ...create,
    ...exclude,
    ...list,
    ...retrieve,
    ...update
};
