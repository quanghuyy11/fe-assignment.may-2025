import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./address/address-slice";
import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localstorage";

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    address: addressReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
