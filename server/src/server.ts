import { Api } from "./app";
import { config } from "./config";

Api.RunApp().then(async (app) => {
    app.listen(config.PORT, () => {
        console.log(`Server is running at ${config.PORT}`);
    });
})
