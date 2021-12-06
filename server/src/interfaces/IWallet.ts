import mongoose, { Document } from "mongoose";
import { ICryptoRecord } from "./ICryptoRecord";
import { IUser } from "./IUser";

export interface IWallet extends Document {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    user: IUser;
    cryptoIds: mongoose.Types.ObjectId;
    cryptos: [ICryptoRecord];
    balance: number;
    updatedAt?: Date;
    createdat?: Date;
}