import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: JSON.parse(sessionStorage.getItem("loggedin")),
};
const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      sessionStorage.setItem("loggedin", JSON.stringify(action.payload));
      state.status = JSON.parse(sessionStorage.getItem("loggedin"));
    },
  },
});
export const { checkLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
