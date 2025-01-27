import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  fullName: {
    firstName: "",
    lastName: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.fullName.firstName = action.payload.fullName.firstName;
      state.fullName.lastName = action.payload.fullName.lastName;
    },
    clearUser(state) {
      state.id = "";
      state.email = "";
      state.fullName.firstName = "";
      state.fullName.lastName = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
