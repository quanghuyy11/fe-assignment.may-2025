import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useParsedSchema } from "@/hooks/useParsedSchema";
import type { RootState } from "@/store/store";
import type { FormSubmitType } from "../form-submit-dialog/form-submit-dialog.model";

export const useDynamicFormViewModel = () => {
  const dispatch = useAppDispatch();

  const jsonSchema = useAppSelector(
    (state: RootState) => state.schema.jsonSchema
  );
  const formData =
    useAppSelector((state: RootState) => state.schema.formData) || {};
  const address = useAppSelector((state: RootState) => state.address);

  const [triggerAddressValidation, setTriggerAddressValidation] =
    useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState<
    Record<string, FormSubmitType>
  >({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const schema = useParsedSchema(jsonSchema, reset);

  useEffect(() => {
    if (schema) setTriggerAddressValidation(false);
  }, [schema]);

  const isAddressRequired = schema?.required?.includes("address") ?? false;
  const isAddressValid = (): boolean => !!(address.city && address.ward);

  const submitForm = (): void => {
    if (isAddressRequired) {
      setTriggerAddressValidation(true);
      if (!isAddressValid()) return;
    }

    const allData = {
      ...formData,
      city: address.city || "",
      ward: address.ward || "",
      street: address.street || "",
    };

    setSubmittedData(allData);
    setOpenDialog(true);
  };

  const handleInvalid = () => {
    if (isAddressRequired) setTriggerAddressValidation(true);
  };

  return {
    schema,
    formData,
    address,
    register,
    handleSubmit,
    errors,
    triggerAddressValidation,
    openDialog,
    submittedData,
    setOpenDialog,
    submitForm,
    handleInvalid,
    isAddressRequired,
    dispatch,
  };
};
