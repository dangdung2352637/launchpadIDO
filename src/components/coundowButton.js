import React, { useState, useEffect } from "react";
import "./coundowButton.scss";
const { ethers } = require("ethers");

const CountdownTimer = () => {
  const initialTargetDate = new Date("August 14, 2024 18:15:00").getTime();
  const [targetDate, setTargetDate] = useState(initialTargetDate);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
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
      setInputValue("");
    } catch (err) {
      console.log(1);
      setInputValue("");
    }
  };

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    return null;
  }

  useEffect(
    () => {
      const timer = setInterval(
        () => {
          const newTimeLeft = calculateTimeLeft();
          setTimeLeft(newTimeLeft);

          if (!newTimeLeft && !isCountdownFinished) {
            setIsCountdownFinished(true);
            setTargetDate(new Date().getTime() + 24 * 60 * 60 * 1000);
          } else if (isCountdownFinished && !newTimeLeft) {
            clearInterval(timer);
          }
        },

        1000
      );

      return () => clearInterval(timer);
    },
    [targetDate, isCountdownFinished],
    [calculateTimeLeft]
  );

  return (
    <div className="">
      <input
        className="input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />

      {isCountdownFinished && timeLeft ? (
        <button onClick={startPayment} className="start-in">
          Nhấn vào
        </button>
      ) : (
        <button className="start-end">Buy</button>
      )}
    </div>
  );
};

export default CountdownTimer;
