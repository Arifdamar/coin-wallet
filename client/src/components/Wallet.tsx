import React, { FunctionComponent } from "react";
import Sidebar from "./Sidebar";
import WalletContent from "./WalletContent";

interface Props {}

const Wallet: FunctionComponent<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <Sidebar selectedTab="Wallet" />
      <WalletContent />
    </div>
  );
};

export default Wallet;
