import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  name: string;
  isSelected?: boolean;
}

const Tabs: FunctionComponent<Props> = ({ name, isSelected = false }) => {
  let history = useHistory();

  function handleClick() {
    name = name.toLowerCase();
    history.push(`/${name}`);
  }
  const selectedClass =
    "bg-gradient-to-l from-coral-red-300 to-white text-coral-red-700  py-3 w-full";
  const unselectedClass = "bg-white w-full py-3 ";

  const selectedButton =
    "text-coral-red-700 border-r-2 font-display border-coral-red-500 w-full";
  const unselectedButton = "text-amethyst-smoke-700 font-display w-full";
  return (
    <div className={isSelected ? selectedClass : unselectedClass}>
      <button
        className={isSelected ? selectedButton : unselectedButton}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Tabs;
