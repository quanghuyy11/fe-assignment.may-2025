import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AddressState {
  city: string;
  ward: string;
  street: string;
}

const initialState: AddressState = {
  city: '',
  ward: '',
  street: '',
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressField: (
      state,
      action: PayloadAction<{ key: keyof AddressState; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    resetAddress: () => initialState,
  },
});

export const { setAddressField, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;