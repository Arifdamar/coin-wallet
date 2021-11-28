import React, { FunctionComponent } from "react";
import userImage from "../images/userImage.png";
import logo from "../images/Logo.png";
import Tabs from "./Tabs";

interface Props {
  selectedTab: string;
}

const Sidebar: FunctionComponent<Props> = ({ selectedTab }) => {
  const [isActive, setIsActive] = React.useState(false);

  const toggleHamburger = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    return isActive;
  };

  const active =
    "w-5/12 pt-44 md:hidden z-30 rounded-r-2xl bg-gradient-to-t from-coral-red-400 to-white transform transition-all fixed duration-700 p-2";
  const inactive =
    "w-5/12 h-1/2 md:hidden transform transition-all fixed duration-700 p-2 -translate-x-60";

  const activeButton = "md:hidden z-40 transition-all transform duration-700";
  const normalButton =
    "md:hidden absolute transition-all z-40 transform duration-700 w-8/12 translate-x-2/3";

  return (
    <div className="flex flex-row md:flex-col items-center md:py-8 md:gap-6 bg-white px-4 md:px-0 border-b-2 w-full md:w-1/4 md:justify-start xl:w-1/6 justify-between md:h-full border-gray-200 md:border-r-2 py-4">
      <div className={isActive ? active : inactive}>
        <div className="flex flex-col gap-4 w-full z-50 items-center">
          <Tabs
            name="Dashboard"
            isSelected={selectedTab === "Dashboard" ? true : false}
          />
          <Tabs
            name="Wallet"
            isSelected={selectedTab === "Wallet" ? true : false}
          />
        </div>
      </div>
      <div className={isActive ? normalButton : activeButton}>
        <button
          className="text-gray-400 transform duration-200 hover:scale-110"
          onClick={toggleHamburger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <img src={logo} alt="Coin Wallet Logo" className="h-12 w-12" />
        <p className="text-astronaut-800 font-bold text-xl font-display whitespace-nowrap">
          Coin Wallet
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img
          src={userImage}
          alt="User"
          className="rounded-full h-12 w-12 md:h-14 md:w-14"
        />
        <p className="hidden md:flex text-astronaut-700 font-display font-bold text-lg whitespace-nowrap">
          Arif Çağrı DAYİR
        </p>
      </div>
      <div
        id="pages"
        className="hidden md:flex md:flex-col gap-4 w-full items-center"
      >
        <Tabs
          name="Dashboard"
          isSelected={selectedTab === "Dashboard" ? true : false}
        />
        <Tabs
          name="Wallet"
          isSelected={selectedTab === "Wallet" ? true : false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
