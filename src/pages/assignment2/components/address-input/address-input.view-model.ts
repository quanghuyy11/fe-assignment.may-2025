import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setAddressField } from "@/store/address/address-slice";
import { cityData } from "@/sample/city";

export const useAddressInputViewModel = (required: boolean, triggerValidation: boolean) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.address);
  const cityWardMap = cityData;
  const [errors, setErrors] = useState<{ city?: string; ward?: string }>({});

  useEffect(() => {
    if (!triggerValidation || !required) {
      setErrors({});
      return;
    }

    const newErrors: typeof errors = {};
    if (!address.city) newErrors.city = "City is required";
    if (!address.ward) newErrors.ward = "Ward is required";
    setErrors(newErrors);
  }, [triggerValidation, required, address]);

  const handleCityChange = (val: string) => {
    dispatch(setAddressField({ key: "city", value: val }));
    dispatch(setAddressField({ key: "ward", value: "" }));
  };

  const handleWardChange = (val: string) => {
    dispatch(setAddressField({ key: "ward", value: val }));
  };

  const handleStreetChange = (val: string) => {
    dispatch(setAddressField({ key: "street", value: val }));
  };

  return {
    address,
    errors,
    cityWardMap,
    handleCityChange,
    handleWardChange,
    handleStreetChange,
  };
};
