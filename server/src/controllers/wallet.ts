import { Request, Response } from "express";

import { SuccessResult, FailureResult } from "../models/result";
import Wallet from "../models/wallet";

export class WalletController {
    public async Get(request: Request, response: Response) {
        try {
            const wallet = await Wallet
                .findById(response.locals.user.walletId)
                .populate({
                    path: "cryptos",
                    populate: {
                        path: "exchange",
                        select: "-symbols -createdAt -updatedAt"
                    }
                });

            return response.status(200).send(new SuccessResult("Wallet Fetched Successfully!", wallet));
        } catch (error) {
            console.log(error);
            return response.status(500).json(new FailureResult("Something went wrong."));
        }
    }
}
