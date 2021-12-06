import mongoose from "mongoose";
import { IWallet } from "../interfaces/IWallet";

const walletSchema = new mongoose.Schema(
    {
        cryptoIds: { type: [mongoose.Schema.Types.ObjectId], index: 1, required: false },
        balance: { type: Number, index: 1, default: 0 }
    },
    { timestamps: true }
);

walletSchema.virtual("cryptos", {
    ref: "cryptorecords",
    localField: "cryptoIds",
    foreignField: "_id",
    justOne: false
});

const Wallet = mongoose.model<IWallet>("wallets", walletSchema);

export default Wallet;
