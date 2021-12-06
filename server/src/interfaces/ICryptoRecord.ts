import mongoose, { Document } from "mongoose";
import { IExchange } from "./IExchange";
import { IWallet } from "./IWallet";

export interface ICryptoRecord extends Document {
    _id: mongoose.Types.ObjectId;
    walletId: mongoose.Types.ObjectId;
    wallet: IWallet;
    exchangeId: mongoose.Types.ObjectId;
    exchange: IExchange;
    symbol: string;
    updatedAt?: Date;
    createdat?: Date;
}