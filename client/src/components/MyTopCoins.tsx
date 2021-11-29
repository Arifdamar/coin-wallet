import React, { FunctionComponent } from "react";
import FameCoins from "./FameCoins";
import FameCoin from "./FameCoin";

interface Props {}

const MyTopCoins: FunctionComponent<Props> = () => {
  return (
    <div className="divide-y flex flex-col">
      <FameCoin coinName="BTC" coinPrice={57840} />
      <FameCoin coinName="ETH" coinPrice={4444} />
      <FameCoin coinName="BNB" coinPrice={2214} />
    </div>
  );
};

export default MyTopCoins;
