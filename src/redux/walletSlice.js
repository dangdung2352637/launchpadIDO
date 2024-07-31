import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletAddress: "",
  isConnected: false,
  balance: "0",
  networkId: null,
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
  },
});

export const {
  setWalletAddress,
  setIsConnected,
  setBalance,
  setNetworkId,
  resetWallet,
} = walletSlice.actions;

export const walletReducer = walletSlice.reducer;
export default walletReducer;
