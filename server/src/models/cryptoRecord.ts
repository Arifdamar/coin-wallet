import mongoose from "mongoose";
import { ICryptoRecord } from "../interfaces/ICryptoRecord";

const cryptoRecordSchema = new mongoose.Schema(
    {
        walletId: { type: mongoose.Schema.Types.ObjectId, index: 1, required: true },
        exchangeId: { type: mongoose.Schema.Types.ObjectId, index: 1, required: true },
        symbol: { type: String, index: 1, required: true }
    },
    { timestamps: true }
);

cryptoRecordSchema.virtual("wallet", {
    ref: "wallets",
    localField: "walletId",
    foreignField: "_id",
    justOne: true
});

cryptoRecordSchema.virtual("exchange", {
    ref: "exchanges",
    localField: "exchangeId",
    foreignField: "_id",
    justOne: true
});

const CryptoRecord = mongoose.model<ICryptoRecord>("cryptorecords", cryptoRecordSchema);

export default CryptoRecord;
