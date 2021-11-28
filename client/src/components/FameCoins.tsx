import React, { FunctionComponent } from "react";
import FameCoin from "./FameCoin";

interface Props {}

const FameCoins: FunctionComponent<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col bg-amethyst-smoke-100 rounded-3xl py-8 px-6">
      <p className="font-display whitespace-nowrap text-gray-900">
        Important Coins
      </p>

      <div className="flex flex-col overflow-y-auto">
        <FameCoin coinName="Bitcoin" coinPrice={57789} />
        <FameCoin coinName="Etherium" coinPrice={4431} />
        <FameCoin coinName="ShibaCoin" coinPrice={0.000041} />
        <FameCoin coinName="DogeCoin" coinPrice={0.2} />
        <FameCoin coinName="TurCoin" coinPrice={10248} />
        <FameCoin coinName="BinanceCoin" coinPrice={134353} />
        <FameCoin coinName="Bitcoin" coinPrice={57789} />
        <FameCoin coinName="Etherium" coinPrice={4431} />
        <FameCoin coinName="ShibaCoin" coinPrice={0.000041} />
        <FameCoin coinName="DogeCoin" coinPrice={0.2} />
        <FameCoin coinName="TurCoin" coinPrice={10248} />
        <FameCoin coinName="BinanceCoin" coinPrice={134353} />
      </div>
    </div>
  );
};

export default FameCoins;
