import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../models/user";

export interface Locale {
  locale: string;
}

const initialState: UserInterface = {
  email: "",
  password: "",
  locale: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeCurrentUser: (state) => {
      return { ...state, email: "", password: "", locale: "" };
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
