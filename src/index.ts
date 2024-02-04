import { Server } from "./server";

const port = process.env.PORT || 3333;

Server.listen(
    port,
    () => console.log("Server Listening on :", `http://localhost:${port}`)
);

