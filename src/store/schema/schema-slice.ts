import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type FormValue = string | number | boolean;

interface SchemaState {
  jsonSchema: string;
  formData: Record<string, FormValue>;
}

const initialState: SchemaState = {
  jsonSchema: "",
  formData: {},
};

export const schemaSlice = createSlice({
  name: "schema",
  initialState,
  reducers: {
    setJsonSchema: (state, action: PayloadAction<string>) => {
      state.jsonSchema = action.payload;
    },
    setFormField: (
      state,
      action: PayloadAction<{ key: string; value: FormValue }>
    ) => {
      if (!state.formData) {
        state.formData = {};
      }
      state.formData[action.payload.key] = action.payload.value;
    },
    resetFormSchema: () => initialState
  },
});

export const { setJsonSchema, setFormField, resetFormSchema } =
  schemaSlice.actions;
export default schemaSlice.reducer;
