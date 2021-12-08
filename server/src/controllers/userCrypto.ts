import axios from "axios";
import { Request, Response } from "express";
import UserCrypto from "../models/userCrypto";

import { SuccessResult, FailureResult } from "../models/result";
import Wallet from "../models/wallet";
import { CryptoExchange } from "../models/exchange";

export class UserCryptoController {
    public async Update(request: Request, response: Response) {
        try {
            const { newAmount } = request.body;
            const { userCryptoId } = request.params;

            const userCrypto = await UserCrypto
                .findById(userCryptoId)
                .populate("exchange", "name baseApi");

            if (!userCrypto) {
                return response.status(404).send(new FailureResult("Specified user crypto not found!"));
            }

            const wallet = await Wallet.findById(userCrypto.walletId);

            if (!wallet) {
                return response.status(404).send(new FailureResult("Wallet not found!"));
            }

            wallet.balance -= (userCrypto.lastPrice * userCrypto.amount);

            switch (userCrypto.exchange.name) {
                case CryptoExchange.Binance:
                    const avgPriceResponse = await axios(userCrypto.exchange.baseApi + "/avgPrice?symbol=" + userCrypto.symbol);

                    console.log(avgPriceResponse.data);
                    const avgPrice = avgPriceResponse.data.price;
                    userCrypto.lastPrice = avgPrice;
                    wallet.balance += (avgPrice * newAmount);
                    await wallet.save();
                    break;

                default:
                    return response.status(400).json(new FailureResult("Unsupported exchange."));
            }

            userCrypto.amount = newAmount;
            await userCrypto.save();

            return response.status(200).send(new SuccessResult("Crypto Updated Successfully!", userCrypto));
        } catch (error) {
            console.log(error);
            return response.status(500).json(new FailureResult("Something went wrong."));
        }
    }

    public async Delete(request: Request, response: Response) {
        try {
            const { userCryptoId } = request.params;

            const userCrypto = await UserCrypto.findById(userCryptoId);

            if (!userCrypto) {
                return response.status(404).send(new FailureResult("Specified user crypto not found!"));
            }

            const wallet = await Wallet.findById(userCrypto.walletId);

            if (!wallet) {
                return response.status(404).send(new FailureResult("Wallet not found!"));
            }

            wallet.balance -= (userCrypto.lastPrice * userCrypto.amount);
            wallet.cryptoIds = wallet.cryptoIds.filter(cryptoId => cryptoId.toString() !== userCrypto.id);
            await wallet.save();

            await userCrypto.deleteOne();

            return response.status(204).send();
        } catch (error) {
            console.log(error);
            return response.status(500).json(new FailureResult("Something went wrong."));
        }
    }

}
