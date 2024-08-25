import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import WalletBalanceComponent from "../redux/getBalanceIdo";
import { GetBlance } from "../pages/getBalance";
import "./countdow.scss";

const { ethers } = require("ethers");

const Countdown = () => {
  const specificWalletBalance = useSelector(
    (state) => state.wallet.specificWalletBalance
  );
  const [inputValue, setInputValue] = useState("");
  const prosessIDO = Math.round((Number(specificWalletBalance) / 0.001) * 100);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const initialTargetDate = new Date("August 16, 2024 14:55:00").getTime();
  const preCountdownTarget = initialTargetDate - 2 * 60 * 1000; // 24 giờ trước target
  const [timeLeft, setTimeLeft] = useState({});
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      let difference;
      let targetDate;

      if (now < preCountdownTarget) {
        difference = preCountdownTarget - now;
        targetDate = preCountdownTarget;
        setIsButtonEnabled(false);
      } else if (now < initialTargetDate) {
        difference = initialTargetDate - now;
        targetDate = initialTargetDate;
        setIsButtonEnabled(true);
      } else {
        clearInterval(timer);
        setTimeLeft({});
        setIsButtonEnabled(false);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        targetDate: targetDate,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = () => {
    // Xử lý khi nút được nhấn
    alert("helllo");
  };

  // if (Object.keys(timeLeft).length === 0) {
  //   return <div>Đã đến thời gian target!</div>;
  // }

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
      setInputValue("");
    } catch (err) {
      console.log(1);
      setInputValue("");
    }
  };

  return (
    <div className="ido-time">
      <h2>
        {timeLeft.targetDate === preCountdownTarget
          ? "Sale Starts in:"
          : "Presale Ends In:"}
      </h2>
      <div className="count-time">
        <div>{timeLeft.days} :</div>
        <div>{timeLeft.hours}h :</div>
        <div>{timeLeft.minutes}m :</div>
        <div>{timeLeft.seconds}s</div>
      </div>
      <ProgressBar now={prosessIDO} label={`${prosessIDO}%`} />
      <WalletBalanceComponent />
      <div className="process-1">
        <h6>0 ETH</h6>
        <h6>10.00 ETH</h6>
      </div>

      <GetBlance />

      <div>
        <input
          className="input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      {isButtonEnabled ? (
        <button onClick={startPayment} className="start-in">
          BUY
        </button>
      ) : (
        <button className="start-end">BUY</button>
      )}
    </div>
  );
};

export default Countdown;
