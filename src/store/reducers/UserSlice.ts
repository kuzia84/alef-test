import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChildren, IUser } from "../../models/IUser";

interface UserState {
  user: IUser;
}

const initialState: UserState = {
  user: {
    name: "",
    age: 0,
    children: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.user.name = action.payload;
    },
    setUserAge(state, action: PayloadAction<number>) {
      state.user.age = action.payload;
    },
    setUserChildren(state, action: PayloadAction<IChildren[]>) {
      state.user.children = action.payload;
    },
  },
});

export default userSlice.reducer;
