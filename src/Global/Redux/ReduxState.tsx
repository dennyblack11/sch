import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: string | null;
  userStatus: string | null;
  subscriptionMode: string | null;
  createdAt: string | null;
  toggle: boolean;
  toggleDisplay: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: "",
  userStatus: null,
  subscriptionMode: "",
  createdAt: "",
  toggle: false,
  toggleDisplay: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    userStatus: (state: any, { payload }) => {
      state.userStatus = payload;
    },
    subscriptionMode: (state: any, { payload }) => {
      state.subscriptionMode = payload;
    },
    createdAt: (state: any, { payload }) => {
      state.createdAt = payload;
    },
    logoutState(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.userStatus = null;
      state.subscriptionMode = null;
      state.createdAt = null;
    },
    clearAuthState: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.userStatus = null;
      state.subscriptionMode = null;
      state.createdAt = null;
    },
    changeToggle: (state: any, { payload }) => {
      state.toggle = payload;
    },
    changeToggleDisplay: (state: any, { payload }) => {
      state.toggleDisplay = payload;
    },
  },
});

export const {
  logoutState,
  loginState,
  userStatus,
  subscriptionMode,
  createdAt,
  clearAuthState,
  changeToggle,
  changeToggleDisplay,
} = authSlice.actions;

export default authSlice.reducer;
