import React, { useState } from "react";
import { GetBlance } from "../redux/GetBalance";
import CountdownTimer from "../components/countdow";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import "./IDO.scss";
import banner8 from "../image/banner8.png";
import imgsocial1 from "../image/imgsocial1.png";

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
          <h6>1 BNB = 333.914 NDG</h6>
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
