import { configureStore } from "@reduxjs/toolkit";
import ReducerLogin from "./Login/LoginSlice";
export const store = configureStore({
  reducer: { login: ReducerLogin },
});
