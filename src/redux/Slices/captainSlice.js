import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fullName: {
    firstName: "",
    lastName: "",
  },
  vehical: {
    color: "",
    plate: "",
    capacity: "",
    vehicleType: "",
  },
};

const captainSlice = createSlice({
  name: "captain",
  initialState,
  reducers: {
    setCaptain(state, action) {
      state.email = action.payload.email;
      state.fullName.firstName = action.payload.fullName.firstName;
      state.fullName.lastName = action.payload.fullName.lastName;
      state.vehical.color = action.payload.vehical.color;
      state.vehical.plate = action.payload.vehical.plate;
      state.vehical.capacity = action.payload.vehical.capacity;
      state.vehical.vehicleType = action.payload.vehical.vehicleType;
    },
    clearCaptain(state) {
      state.email = "";
      state.fullName.firstName = "";
      state.fullName.lastName = "";
      state.vehical.color = "";
      state.vehical.plate = "";
      state.vehical.capacity = "";
      state.vehical.vehicleType = "";
    },
  },
});

export const { setCaptain, clearCaptain } = captainSlice.actions;
export default captainSlice.reducer;
