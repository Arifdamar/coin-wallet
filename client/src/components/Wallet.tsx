import React, { FunctionComponent } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

interface Props {}

const Wallet: FunctionComponent<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <Sidebar selectedTab="Wallet" />
      <Content />
    </div>
  );
};

export default Wallet;
