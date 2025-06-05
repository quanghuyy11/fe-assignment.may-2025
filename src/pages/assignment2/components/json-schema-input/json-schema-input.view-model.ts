import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { resetFormSchema, setJsonSchema } from "@/store/schema/schema-slice";
import { resetAddress } from "@/store/address/address-slice";
import type { RootState } from "@/store/store";

export const useJsonSchemaInputViewModel = () => {
  const dispatch = useAppDispatch();
  const jsonSchema = useAppSelector((state: RootState) => state.schema.jsonSchema);

  const [schema, setSchema] = useState<string>(jsonSchema);
  const [renderErrorMsg, setRenderErrorMsg] = useState<string>("");

  const handleRenderForm = () => {
    try {
      if (!schema || schema.trim() === "") {
        setRenderErrorMsg("Input your schema, please!");
        return;
      }

      JSON.parse(schema); // Validate format

      dispatch(resetFormSchema());
      dispatch(resetAddress());
      dispatch(setJsonSchema(schema));
      setRenderErrorMsg("");
    } catch {
      setRenderErrorMsg("Something wrong, check format please!");
    }
  };

  const handleResetFormSchema = (): void => {
    dispatch(resetFormSchema());
    dispatch(resetAddress());
    setSchema("");
  };

  return {
    schema,
    setSchema,
    renderErrorMsg,
    handleRenderForm,
    handleResetFormSchema,
  };
};
