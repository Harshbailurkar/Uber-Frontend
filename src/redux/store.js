import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import captainReducer from "./Slices/captainSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    captain: captainReducer,
  },
});
