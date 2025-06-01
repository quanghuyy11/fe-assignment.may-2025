import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TableState {
  page: number;
  sortBy: string | null;
  sortOrder: "asc" | "desc";
  filters: Record<string, string>;
  pageSize: number;
}

const initialState: TableState = {
  page: 1,
  sortBy: null,
  sortOrder: "asc",
  filters: {},
  pageSize: 0,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSort(state, action: PayloadAction<{ sortBy: string }>) {
      const { sortBy } = action.payload;
      if (state.sortBy !== sortBy) {
        state.sortBy = sortBy;
        state.sortOrder = "asc";
      } else if (state.sortOrder === "asc") {
        state.sortOrder = "desc";
      } else {
        state.sortBy = null;
        state.sortOrder = "asc";
      }
    },
    setFilter(state, action: PayloadAction<{ key: string; value: string }>) {
      state.filters[action.payload.key] = action.payload.value;
    },
    resetFilters(state) {
      state.filters = {};
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    resetAll: () => initialState,
  },
});

export const {
  setPage,
  setSort,
  setFilter,
  resetFilters,
  setPageSize,
  resetAll,
} = tableSlice.actions;
export default tableSlice.reducer;
