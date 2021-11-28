import express from "express";
import { ConnectionHelper } from "./helpers/connectionHelper";
import router from "./routes";

export class Api {
    public static app: express.Express = express();

    public static async RunApp() {
        await ConnectionHelper.connect();

        // Configure Express App
        Api.app.set("trust proxy", 1);
        Api.app.use(express.json());
        Api.app.use(express.urlencoded({ extended: true }));

        Api.app.use("/", router);

        return Api.app;
    }
}