import * as create from "./views/create";
import * as exclude from "./views/exclude";
import * as list from "./views/list";
import * as retrieve from "./views/retrieve";
import * as update from "./views/update";

export const CidadeController = {
    ...create,
    ...exclude,
    ...list,
    ...retrieve,
    ...update
};
