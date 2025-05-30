import type { RootState } from "@/store/store";

export const LOCAL_STORAGE_KEY = "address_form";

export function saveToLocalStorage(state: RootState) {
  try {
    const serialized = JSON.stringify(state.address);
    localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
  } catch (e) {
    console.error("Could not save state", e);
  }
}

export function loadFromLocalStorage() {
  try {
    const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serialized === null) return undefined;
    return { address: JSON.parse(serialized) };
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
}
