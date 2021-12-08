import axios from "axios";
import { Request, Response } from "express";
import UserCrypto from "../models/userCrypto";

import { SuccessResult, FailureResult } from "../models/result";
import Wallet from "../models/wallet";
import Exchange, { CryptoExchange } from "../models/exchange";

export class UserCryptoController {
    public async Add(request: Request, response: Response) {
        try {
            const { exchangeName, symbol, amount } = request.body;

            const userWallet = await Wallet.findById(response.locals.user.walletId);

            if (!userWallet) {
                return response.status(404).send(new FailureResult("User Wallet not found"));
            }

            const exchange = await Exchange.findOne({ name: exchangeName });

            if (!exchange) {
                return response.status(404).send(new FailureResult("Exchange not found"));
            }

            if (!exchange.symbols.includes(symbol)) {
                return response.status(400).send(new FailureResult(symbol + " does not exist on " + exchange.name));
            }

            const newUserCrypto = await UserCrypto.create({
                walletId: userWallet.id,
                exchangeId: exchange._id,
                symbol,
                firstPrice: 0,
                lastPrice: 0,
                amount
            });

            userWallet.cryptoIds.push(newUserCrypto.id);

            switch (exchange.name) {
                case CryptoExchange.Binance:
                    const avgPriceResponse = await axios(exchange.baseApi + "/avgPrice?symbol=" + symbol);

                    console.log(avgPriceResponse.data);
                    const avgPrice = avgPriceResponse.data.price;
                    newUserCrypto.firstPrice = avgPrice;
                    newUserCrypto.lastPrice = avgPrice;
                    await newUserCrypto.save();
                    userWallet.balance += (avgPrice * amount);
                    break;

                default:
                    return response.status(400).json(new FailureResult("Unsupported exchange."));
            }

            await userWallet.save();

            return response.status(200).send(new SuccessResult("Crypto added successfully", newUserCrypto));
        } catch (error: any) {
            if (error.isJoi) {
                return response.status(400).send(new FailureResult("Validation error: " + error.message));
            }

            console.log(error);
            return response.status(500).send(new FailureResult("Something went wrong."));
        }
    }

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

            if (response.locals.user.walletId.toString() !== wallet._id.toString()) {
                return response.status(403).send(new FailureResult("You cannot do that!"));
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

            if (response.locals.user.walletId.toString() !== wallet._id.toString()) {
                return response.status(403).send(new FailureResult("You cannot do that!"));
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
