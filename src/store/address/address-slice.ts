import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Address {
  city: string;
  ward: string;
  street: string;
}

interface AddressState {
  address: Address;
}

const initialState: AddressState = {
  address: { city: "", ward: "", street: "" },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setAddress, resetForm } = addressSlice.actions;
export const selectAddress = (state: RootState) => state.address.address;
export default addressSlice.reducer;