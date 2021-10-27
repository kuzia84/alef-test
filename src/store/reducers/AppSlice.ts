import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  userFormVisible: boolean;
  userInfoVisible: boolean;
}

const initialState: AppState = {
  userFormVisible: true,
  userInfoVisible: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserFormVisible(state, action: PayloadAction<boolean>) {
      state.userFormVisible = action.payload;
    },
    setUserInfoVisible(state, action: PayloadAction<boolean>) {
      state.userInfoVisible = action.payload;
    },
  },
});

export default appSlice.reducer;
