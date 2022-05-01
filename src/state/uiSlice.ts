import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UiState {
  connectingWallet: boolean;
  showingArchives: boolean;
}

const initialState: UiState = {
  connectingWallet: false,
  showingArchives: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    connectWallet: (state) => {
      state.connectingWallet = true;
    },
    walletConnected: (state) => {
      state.connectingWallet = false;
    },
    setShowingArchives: (state, action: PayloadAction<boolean>) => {
      state.showingArchives = action.payload;
    },
  },
});

export const { connectWallet, walletConnected, setShowingArchives } =
  uiSlice.actions;

export const selectConnectingWallet = (state: RootState) =>
  state.ui.connectingWallet;

export const selectShowingArchives = (state: RootState) =>
  state.ui.showingArchives;

export default uiSlice.reducer;
