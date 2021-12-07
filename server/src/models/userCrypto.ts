import mongoose from "mongoose";
import { IUserCrypto } from "../interfaces/IUserCrypto";

const userCryptoSchema = new mongoose.Schema(
    {
        walletId: { type: mongoose.Schema.Types.ObjectId, index: 1, required: true },
        exchangeId: { type: mongoose.Schema.Types.ObjectId, index: 1, required: true },
        symbol: { type: String, index: 1, required: true },
        amount: { type: Number, index: 1, required: true }
    },
    { timestamps: true }
);

userCryptoSchema.virtual("wallet", {
    ref: "wallets",
    localField: "walletId",
    foreignField: "_id",
    justOne: true
});

userCryptoSchema.virtual("exchange", {
    ref: "exchanges",
    localField: "exchangeId",
    foreignField: "_id",
    justOne: true
});

const CryptoRecord = mongoose.model<IUserCrypto>("usercryptos", userCryptoSchema);

export default CryptoRecord;
