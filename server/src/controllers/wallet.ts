import axios from "axios";
import { Request, Response } from "express";
import UserCrypto from "../models/userCrypto";
import Exchange, { CryptoExchange } from "../models/exchange";

import { SuccessResult, FailureResult } from "../models/result";
import Wallet from "../models/wallet";

export class WalletController {

    public async AddCrypto(request: Request, response: Response) {
        try {
            const { exchangeId, symbol, amount } = request.body;

            const userWallet = await Wallet.findById(response.locals.user.walletId);

            if (!userWallet) {
                return response.status(404).send(new FailureResult("User Wallet not found"));
            }

            const exchange = await Exchange.findById(exchangeId);

            if (!exchange) {
                return response.status(404).send(new FailureResult("Exchange Wallet not found"));
            }

            if (!exchange.symbols.includes(symbol)) {
                return response.status(400).send(new FailureResult(symbol + " does not exist on " + exchange.name));
            }

            const newUserCrypto = await UserCrypto.create({
                walletId: userWallet.id,
                exchangeId,
                symbol,
                amount
            });

            userWallet.cryptoIds.push(newUserCrypto.id);

            switch (exchange.name) {
                case CryptoExchange.Binance:
                    const avgPriceResponse = await axios(exchange.baseApi + "/avgPrice?symbol=" + symbol);

                    console.log(avgPriceResponse.data);
                    const avgPrice = avgPriceResponse.data.price;
                    userWallet.balance += avgPrice * amount;
                    break;

                default:
                    break;
            }

            await userWallet.save();

            return response.status(200).send(new SuccessResult("Crypto added successfully", null));
        } catch (error: any) {
            if (error.isJoi) {
                return response.status(400).send(new FailureResult("Validation error: " + error.message));
            }

            console.log(error);
            return response.status(500).send(new FailureResult("Something went wrong."));
        }
    }

    public async Get(request: Request, response: Response) {
        try {
            console.log(response.locals.user.walletId);
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
