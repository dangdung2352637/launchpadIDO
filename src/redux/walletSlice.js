import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletAddress: "",
  isConnected: false,
  balance: "0",
  networkId: null,
  specificWalletBalance: "0",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setNetworkId: (state, action) => {
      state.networkId = action.payload;
    },
    resetWallet: (state) => {
      Object.assign(state, initialState);
    },
    setSpecificWalletBalance: (state, action) => {
      state.specificWalletBalance = action.payload;
    },
  },
});

export const {
  setWalletAddress,
  setIsConnected,
  setBalance,
  setNetworkId,
  resetWallet,
  setSpecificWalletBalance,
} = walletSlice.actions;

export const walletReducer = walletSlice.reducer;
export default walletReducer;
