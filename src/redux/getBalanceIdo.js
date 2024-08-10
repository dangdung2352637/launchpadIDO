import React, { useState, useEffect } from "react";
import { useSimpleWallet } from "./useSimpleWallet";

function WalletBalanceComponent() {
  const { updateSpecificWalletBalance, specificWalletBalance } =
    useSimpleWallet();
  const walletAddress = "0xBa78e2124B680900fCBDAFC250A24aBA19dc07a4";
  const prosessIDO = (Number(specificWalletBalance) / 0.1) * 100;
  console.log(prosessIDO);

  useEffect(() => {
    if (walletAddress) {
      updateSpecificWalletBalance(walletAddress);

      // Cập nhật số dư mỗi 30 giây
      const intervalId = setInterval(() => {
        updateSpecificWalletBalance(walletAddress);
      }, 3000);

      // Dọn dẹp interval khi component unmount hoặc walletAddress thay đổi
      return () => clearInterval(intervalId);
    }
  }, [walletAddress, updateSpecificWalletBalance]);

  return (
    <div>
      <p>Specific Wallet Balance: {prosessIDO} BNB</p>
    </div>
  );
}

export default WalletBalanceComponent;
