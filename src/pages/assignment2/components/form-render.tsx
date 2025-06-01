// components/FormRenderer.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, selectAddress } from "@/store/address/address-slice";
import { AddressInput } from "./address-input";

export const FormRender = () => {
  const dispatch = useDispatch();
  const address = useSelector(selectAddress);
  const [showAddress, setShowAddress] = useState(false);

  const handleSubmit = (): void => {
    setShowAddress(true);
  };

  const handleResetForm = (): void => {
    setShowAddress(false);
    dispatch(resetForm());
  };

  const handleHideAddress = (): void => {
    setShowAddress(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={handleResetForm}
          className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded shadow-sm transition-all duration-200 ease-in-out hover:bg-blue-200 hover:opacity-90 hover:scale-105 cursor-pointer"
        >
          Reset Form
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-gray-900 text-white font-medium px-4 py-2 rounded transition-all duration-200 ease-in-out hover:brightness-110 hover:scale-105 hover:shadow-md cursor-pointer"
        >
          Submit
        </Button>
      </div>

      <div className="space-y-4">
        <AddressInput handleHideAddress={handleHideAddress} />

        {showAddress && (
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-center">
            <div className="flex-1 min-w-[120px] break-words">
              <span className="font-bold">City:</span> {address.city}
            </div>
            <div className="flex-1 min-w-[120px] break-words">
              <span className="font-bold">Ward:</span> {address.ward}
            </div>
            <div className="flex-1 min-w-[120px] break-words">
              <span className="font-bold">Street:</span> {address.street}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
