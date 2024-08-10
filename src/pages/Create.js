import "./Create.scss";
import WalletBalanceComponent from "../redux/getBalanceIdo";
import React from "react";
import { useSelector } from "react-redux";

export const Create = () => {
  const specificWalletBalance = useSelector(
    (state) => state.wallet.specificWalletBalance
  );
  console.log("day", specificWalletBalance);
  return (
    <div className="Create">
      <div>
        <WalletBalanceComponent />
        <h1 className="project-details">
          Project Details {specificWalletBalance}
        </h1>
        <div>Project name</div>
        <input />
        <div>Tagline</div>
        <input></input>
        <div>Add a brief one-sentence summary of your project</div>
      </div>
      <div className="Project">
        <div>Project links (Optional)</div>
        <hr color="white"></hr>
        <div>Project owner (Optional)</div>
        <hr color="white"></hr>
        <div>Project tags (Optional)</div>
        <hr color="white"></hr>
        <div>Project page customizations (Optional)</div>
        <hr color="white"></hr>
      </div>

      <button>NEXT</button>
    </div>
  );
};
