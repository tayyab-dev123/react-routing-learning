import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
