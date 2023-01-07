import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UiState {
  connectingWallet: boolean;
  showingArchives: boolean;
  showingStory: boolean;
  showingInfo: boolean;
  // userPanel States
  showingRewards: boolean;
  showingNav: boolean;
  showingStamp: boolean;
  muteAudio: boolean;
  animationEnd: boolean;
}

const initialState: UiState = {
  connectingWallet: false,
  showingArchives: false,
  showingStory: false,
  showingInfo: false,
  // userPanel States
  showingRewards: false,
  showingNav: false,
  showingStamp: false,
  muteAudio: false,
  animationEnd: true,
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
    setShowingStory: (state, action: PayloadAction<boolean>) => {
      state.showingStory = action.payload;
    },
    setShowingInfo: (state, action: PayloadAction<boolean>) => {
      state.showingInfo = action.payload;
    },
    setShowingRewards: (state, action: PayloadAction<boolean>) => {
      state.showingRewards = action.payload;
    },
    setShowingNav: (state, action: PayloadAction<boolean>) => {
      state.showingNav = action.payload;
    },
    setShowingStamp: (state, action: PayloadAction<boolean>) => {
      state.showingStamp = action.payload;
    },
    setMuteAudio: (state, action: PayloadAction<boolean>) => {
      state.muteAudio = action.payload;
    },
    setAnimationEnd: (state, action: PayloadAction<boolean>) => {
      state.animationEnd = action.payload;
    },
  },
});

export const {
  connectWallet,
  walletConnected,
  setShowingArchives,
  setShowingStory,
  setShowingInfo,
  // userPanel States
  setShowingRewards,
  setShowingNav,
  setShowingStamp,
  setMuteAudio,
  setAnimationEnd,
} = uiSlice.actions;

export const selectConnectingWallet = (state: RootState) =>
  state.ui.connectingWallet;

export const selectShowingArchives = (state: RootState) =>
  state.ui.showingArchives;

export const selectShowingStory = (state: RootState) => state.ui.showingStory;

export const selectShowingInfo = (state: RootState) => state.ui.showingInfo;

export const selectShowingRewards = (state: RootState) =>
  state.ui.showingRewards;

export const selectShowingNav = (state: RootState) => state.ui.showingRewards;

export const selectShowingStamp = (state: RootState) => state.ui.showingStamp;

export const selectMuteAudio = (state: RootState) => state.ui.muteAudio;

export const selectAnimationEnd = (state: RootState) => state.ui.animationEnd;

export default uiSlice.reducer;
