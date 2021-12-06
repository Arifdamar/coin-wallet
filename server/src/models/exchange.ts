import mongoose from "mongoose";
import { IExchange } from "../interfaces/IExchange";

export enum CryptoExchange {
    Binance = "Binance",
}

const exchangeSchema = new mongoose.Schema(
    {
        name: { type: String, enum: CryptoExchange, index: 1, required: true },
        baseApi: { type: String, index: 1, required: true },
        symbols: { type: [String], index: 1, required: true }
    },
    { timestamps: true }
);

const Exchange = mongoose.model<IExchange>("exchanges", exchangeSchema);

export default Exchange;
