import React, { useState } from "react";
import { GetBlance } from "../redux/GetBalance";
import CountdownTimer from "../components/countdow";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import "./IDO.scss";
import imgsocial1 from "../image/imgsocial1.png";
import baoidoo from "../image/baoidoo.png";

const { ethers } = require("ethers");

export const IDO = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const startPayment = async () => {
    const floatValue = Number(inputValue);
    console.log(floatValue.toString());
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: "0xBa78e2124B680900fCBDAFC250A24aBA19dc07a4",
        value: ethers.utils.parseEther(inputValue),
      });
      console.log("tx", tx);
    } catch (err) {
      console.log(1);
    }
  };

  const time = setTimeout(() => {
    setCount(count + 1);
  }, 10000);

  return (
    <div className="ido">
      <div className="ido-detal">
        <img src={baoidoo}></img>
        <div className="ido-img">
          <img className="crx" src={imgsocial1}></img>
          <h2>NEP</h2>
        </div>
        <h3 className="text">
          Leopad is a multichain venture DAO and IDO launchpad with the mission
          to incubate, fund, and launch the DeFi of tomorrow ,We offer our
          community attractive opportunities to get in early with well-vetted
          projects on our platform, and offer our partners a new way to grow
          their community footprints.
        </h3>
      </div>
      <div className="ido-page">
        {/* <h3>Sale Type: Private Sale</h3> */}
        <div className="time-end">
          <h3>Presale Ends In</h3>
          <CountdownTimer />
        </div>
        <div className="process">
          <ProgressBar variant="success" now={time} />
          <div className="process-1">
            <h6>0 BNB</h6>
            <h6>10.00 BNB</h6>
          </div>
          <p>
            <GetBlance />
          </p>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button className="buy" onClick={startPayment} variant="secondary">
            Buy
          </Button>
        </div>
        <Button className="button-claim" variant="secondary">
          CLAIM
        </Button>
        <div className="Sale-Type">
          <h6>Sale Type</h6>
          <h6>Public</h6>
        </div>
        <div className="Current-Rate">
          <h6>Current Rate</h6>
          <h6>1 BNB = 333.914 NEP</h6>
        </div>
        <div className="Current-Raised">
          <h6>Current Raised</h6>
          <h6>10 BNB (100%)</h6>
        </div>
      </div>

      <div></div>
    </div>
  );
};
