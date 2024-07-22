import React, { useState } from "react";
import CountdownTimer from "../components/countdow";
// import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import "./IDO.scss";
import banner8 from "../image/banner8.png";
import imgsocial1 from "../image/imgsocial1.png";
// import React, { useState, useEffect } from "react";
const { ethers } = require("ethers");
// import Button from "react-bootstrap/Button";

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
        <img src={banner8}></img>
        <div className="ido-img">
          <img className="crx" src={imgsocial1}></img>
          <h2>CRX</h2>
        </div>
        <h3 className="text">
          Chúng tôi vui mừng thông báo mở vòng bán hàng riêng tư. Các tiện ích
          của mã thông báo $CRX rất rộng lớn và liên tục mở rộng, vì COREx là
          một nền tảng luôn hướng tới tương lai, không ngừng phát triển và giới
          thiệu các tính năng mới. Mặc dù luôn có điều gì đó mới mẻ sắp xảy ra,
          nhưng đây là những lợi ích chính hiện tại mà $CRX mang lại
        </h3>
      </div>
      <div className="ido-page">
        <h3>Sale Type: Private Sale</h3>
        <div className="time-end">
          <h3>Sale Ends in:</h3>
          <CountdownTimer />
        </div>
        <div className="process">
          <h3>0.00/3000 CORE Raised</h3>
          <h3>tiến trình</h3>
          <ProgressBar variant="danger" now={time} />
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          {/* <button>Buy</button> */}
          <Button className="buy" onClick={startPayment} variant="secondary">
            Buy
          </Button>
        </div>
        {/* <button className="button-view"></button> */}
        <Button className="button-view" variant="secondary">
          View All Contributors
        </Button>
        <Button className="button-claim" variant="secondary">
          CLAIM
        </Button>
        {/* <button></button> */}
      </div>

      <div></div>
    </div>
  );
};
