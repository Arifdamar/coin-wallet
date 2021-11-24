import React, { FunctionComponent } from "react";

interface Props {}

const Sidebar: FunctionComponent<Props> = () => {
  return (
    <div className="bg-indigo-500 h-full hidden w-max md:flex md:flex-col items-center px-5 md:px-8 pt-10 space-y-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 md:h-14 md:w-14 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <button className="bg-indigo-200 rounded-full p-2 md:p-3 transform hover:scale-150 duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 md:w-8 w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
