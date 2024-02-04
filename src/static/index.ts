import path from "path";
import fs from "fs";

export const defaultMainPage = () => {
    const welcomePagePath: string = path.join(__dirname, "./pages/welcome.html");
    const welcomePageBuffer: string = fs.readFileSync( welcomePagePath, "utf-8");
    return welcomePageBuffer.toString();
};