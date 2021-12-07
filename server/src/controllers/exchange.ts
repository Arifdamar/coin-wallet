import { Request, Response } from "express";
import Exchange, { CryptoExchange } from "../models/exchange";
import axios from "axios";

import { SuccessResult, FailureResult } from "../models/result";
export class ExchangeController {

    public async Create(request: Request, response: Response) {
        try {
            const { name, baseApi } = request.body;

            const exchange = await Exchange.create({
                name,
                baseApi
            });

            return response.status(200).json(new SuccessResult("Exchange Created Successfully!", exchange));
        } catch (error: any) {
            if (error.isJoi) {
                return response.status(400).send(new FailureResult("Validation error: " + error.message));
            }

            console.log(error);
            return response.status(500).json(new FailureResult("Something went wrong."));
        }
    }

    public async RefreshSymbols(request: Request, response: Response) {
        try {
            const { name } = request.body;

            const exchange = await Exchange.findOne({ name: name });

            if (!exchange) {
                return new FailureResult("Exchange not found.");
            }

            switch (name) {
                case CryptoExchange.Binance:
                    const exchangeInfoResponse = await axios(exchange.baseApi + "/exchangeInfo");
                    let symbolArray: string[] = [];

                    for (const symbol of exchangeInfoResponse.data.symbols) {
                        if (symbol.symbol.endsWith("USDT")) {
                            symbolArray.push(symbol.symbol);
                        }
                    }

                    exchange.symbols = symbolArray;
                    await exchange.save();
                    break;

                default:
                    break;
            }

            return response.status(200).json(new SuccessResult("Exchange Refreshed Successfully!", exchange));
        } catch (error: any) {
            console.log(error);
            return response.status(500).json(new FailureResult("Something went wrong."));
        }
    }
}
