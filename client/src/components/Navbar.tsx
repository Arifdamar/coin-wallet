import React, { FunctionComponent } from "react";

interface Props {}

const Navbar: FunctionComponent<Props> = () => {
  return (
    <div className="bg-green-500 w-full flex p-4 justify-between items-center md:p-6">
      <p className="font-display font-medium text-xl text-white">
        Coin Wallet Dashboard
      </p>
      <div className="flex items-center gap-3">
        <p className="text-white font-display text-lg">Arif Çağrı Dayir</p>
        <img
          src="https://images.generated.photos/ciY2c9H43ak2HGxWifv4uWKR0PonU-zi8mCuZ1wpsdA/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIwNTc2LmpwZw.jpg"
          alt=""
          className="w-14 h-14 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
