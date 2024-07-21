import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
import React, { useState, useEffect } from "react";
const { ethers } = require("ethers");

export const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");

  // Or window.ethereum if you don't support EIP-6963.
  useEffect(() => {
    addWalletListener();
  }, []);

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        checkNetwork();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  async function switchBNB() {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${Number(56).toString(16)}`,
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
              name: "Binance Chain Native Token",
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: [
              "https://bsc-dataseed1.binance.org",
              "https://bsc-dataseed2.binance.org",
              "https://bsc-dataseed3.binance.org",
              "https://bsc-dataseed4.binance.org",
              "https://bsc-dataseed1.defibit.io",
              "https://bsc-dataseed2.defibit.io",
              "https://bsc-dataseed3.defibit.io",
              "https://bsc-dataseed4.defibit.io",
              "https://bsc-dataseed1.ninicoin.io",
              "https://bsc-dataseed2.ninicoin.io",
              "https://bsc-dataseed3.ninicoin.io",
              "https://bsc-dataseed4.ninicoin.io",
              "wss://bsc-ws-node.nariox.org",
            ],
            blockExplorerUrls: ["https://bscscan.com"],
          },
        ],
      });
    } catch (err) {
      console.log("lỗi cmnr");
    }
  }

  async function checkNetwork() {
    try {
      // Khởi tạo một đối tượng Provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider);
      console.log("window.ethereum", window.ethereum);

      // Lấy thông tin về mạng hiện tại
      const network = await provider.getNetwork();
      console.log(network);

      // Kiểm tra xem mạng có phải là Binance Smart Chain hay không
      if (network.chainId === 56) {
        console.log("Đây là mạng Binance Smart Chain.");
        console.log(network.chainId);
      } else {
        console.log("Đây không phải là mạng Binance Smart Chain.");
        switchBNB();
        console.log(network.chainId);
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra mạng:", error);
    }
  }

  return (
    <div className="dung">
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/IDO">IDO</Link>
      </NavLink>

      <button onClick={connectWallet}>
        <span>
          {walletAddress && walletAddress.length > 0
            ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
                38
              )}`
            : "Connect Wallet"}
        </span>
      </button>
    </div>
  );
};
