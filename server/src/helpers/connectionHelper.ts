import mongoose from "mongoose";

import { config } from "../config";

export abstract class ConnectionHelper {
  private static initalConnection: Promise<typeof mongoose>;

  public static async connect() {
    ConnectionHelper.initalConnection = mongoose.connect(config.mongoUrl);
    await ConnectionHelper.initalConnection;
    return;
  }

  public static async getConnection() {
    return await ConnectionHelper.initalConnection;
  }
}
