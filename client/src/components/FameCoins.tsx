import React, { FunctionComponent } from "react";

interface Props {}

const FameCoins: FunctionComponent<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 rounded-3xl py-8 px-6">
      <p className="font-display font-medium whitespace-nowrap text-gray-900">
        Important Coins
      </p>
    </div>
  );
};

export default FameCoins;
