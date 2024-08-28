import { useSimpleWallet } from "../redux/useSimpleWallet";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

export function GetBlance() {
  const { getBalance } = useSimpleWallet();
  const { balance, walletAddress } = useSelector((state) => state.wallet);
  const formattedBalance = Number(balance).toFixed(4);
  console.log("abc", walletAddress);

  useEffect(() => {
    // Cập nhật ngay lập tức khi component mount
    getBalance(walletAddress);

    // Thiết lập interval để cập nhật định kỳ
    const intervalId = setInterval(() => {
      getBalance(walletAddress);
    }, 6000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Balance: {formattedBalance} ETH</p>
    </div>
  );
}
