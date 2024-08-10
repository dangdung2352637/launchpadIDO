import { useState, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import {
  setWalletAddress,
  setIsConnected,
  setBalance,
  setNetworkId,
  resetWallet,
  setSpecificWalletBalance,
} from "./walletSlice";

export function useSimpleWallet() {
  const dispatch = useDispatch();
  const {
    walletAddress,
    isConnected,
    balance,
    networkId,
    specificWalletBalance,
  } = useSelector((state) => state.wallet);

  const web3 = useMemo(() => new Web3(window.ethereum), []);

  const BSC_NETWORK_ID = 56; // Mainnet
  const BSC_TESTNET_ID = 97; // Testnet

  const checkAndSwitchNetwork = useCallback(async () => {
    try {
      const chainId = await web3.eth.getChainId();
      console.log("Current chainId:", chainId);
      dispatch(setNetworkId(chainId));

      if (chainId !== BSC_NETWORK_ID && chainId !== BSC_TESTNET_ID) {
        console.log("Not on BSC network, attempting to switch...");
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(BSC_NETWORK_ID) }],
        });
        console.log("Successfully switched to BSC network");
      } else {
        console.log("Already on BSC network");
      }
    } catch (switchError) {
      console.error("Error during network switch:", switchError);
      // ... (rest of the error handling)
    }
  }, [web3.eth, web3.utils, dispatch]);

  const getBalance = useCallback(
    async (address) => {
      try {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceBNB = web3.utils.fromWei(balanceWei, "ether");
        dispatch(setBalance(balanceBNB));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    },
    [web3.eth, web3.utils, dispatch]
  );

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await checkAndSwitchNetwork();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(setWalletAddress(accounts[0]));
        dispatch(setIsConnected(true));
        await getBalance(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }, [checkAndSwitchNetwork, getBalance, dispatch]);

  const disconnectWallet = useCallback(() => {
    dispatch(resetWallet());
  }, [dispatch]);

  const getSpecificWalletBalance = useCallback(
    async (address) => {
      try {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceBNB = web3.utils.fromWei(balanceWei, "ether");
        dispatch(setSpecificWalletBalance(balanceBNB));
        return balanceBNB;
      } catch (error) {
        console.error("Error fetching specific wallet balance:", error);
        return null;
      }
    },
    [web3.eth, web3.utils, dispatch]
  );

  const updateSpecificWalletBalance = useCallback(
    async (address) => {
      if (address) {
        try {
          const balanceWei = await web3.eth.getBalance(address);
          const balanceBNB = web3.utils.fromWei(balanceWei, "ether");
          dispatch(setSpecificWalletBalance(balanceBNB));
        } catch (error) {
          console.error("Error updating specific wallet balance:", error);
        }
      }
    },
    [web3.eth, web3.utils, dispatch]
  );

  useEffect(() => {
    const initializeWallet = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            dispatch(setWalletAddress(accounts[0]));
            dispatch(setIsConnected(true));
            await getBalance(accounts[0]);
          }
          await checkAndSwitchNetwork();
        } catch (error) {
          console.error("Error initializing wallet:", error);
        }
      }
    };

    initializeWallet();
  }, []); // Mảng dependencies rỗng để đảm bảo chỉ chạy một lần khi component mount

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          dispatch(setWalletAddress(accounts[0]));
          dispatch(setIsConnected(true));
          await getBalance(accounts[0]);
        } else {
          disconnectWallet();
        }
      });

      window.ethereum.on("chainChanged", async (chainId) => {
        console.log("Chain changed to:", parseInt(chainId, 16));
        dispatch(setNetworkId(parseInt(chainId, 16)));
        if (isConnected) {
          await checkAndSwitchNetwork();
          await getBalance(walletAddress);
        }
      });
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener("accountsChanged", () => {});
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, [
    disconnectWallet,
    getBalance,
    isConnected,
    walletAddress,
    checkAndSwitchNetwork,
    dispatch,
  ]);

  return {
    walletAddress,
    isConnected,
    balance,
    networkId,
    connectWallet,
    disconnectWallet,
    getBalance,
    checkAndSwitchNetwork,
    specificWalletBalance,
    getSpecificWalletBalance,
    updateSpecificWalletBalance,
  };
}
