import React, { useState, useEffect } from "react";
import { useSimpleWallet } from "./useSimpleWallet";

function WalletBalanceComponent() {
  const { updateSpecificWalletBalance, specificWalletBalance } =
    useSimpleWallet();
  const walletAddress = "0xBa78e2124B680900fCBDAFC250A24aBA19dc07a4";
  const [prosessIDO, setProsessIDO] = useState(0);

  useEffect(() => {
    // Cập nhật ngay lập tức khi component mount
    updateSpecificWalletBalance(walletAddress);

    // Thiết lập interval để cập nhật định kỳ
    const intervalId = setInterval(() => {
      updateSpecificWalletBalance(walletAddress);
    }, 3000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Mảng dependencies rỗng để chỉ chạy một lần khi mount

  return <div></div>;
}

export default WalletBalanceComponent;
