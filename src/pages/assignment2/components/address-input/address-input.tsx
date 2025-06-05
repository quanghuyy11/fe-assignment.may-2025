import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import type { AddressInputProps } from "./address-input.model";
import { useAddressInputViewModel } from "./address-input.view-model";

export const AddressInput: React.FC<AddressInputProps> = ({
  label,
  required,
  triggerValidation,
}) => {
  const {
    address,
    errors,
    cityWardMap,
    handleCityChange,
    handleWardChange,
    handleStreetChange,
  } = useAddressInputViewModel(required, triggerValidation);

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">{label}</Label>

      <div className="space-y-1">
        <Select value={address.city} onValueChange={handleCityChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(cityWardMap).map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
      </div>

      <div className="space-y-1">
        <Select value={address.ward} onValueChange={handleWardChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ward" />
          </SelectTrigger>
          <SelectContent>
            {address.city && cityWardMap[address.city]?.length ? (
              cityWardMap[address.city].map((ward) => (
                <SelectItem key={ward} value={ward}>
                  {ward}
                </SelectItem>
              ))
            ) : (
              <SelectItem disabled value="#">
                No options available
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        {errors.ward && <p className="text-sm text-red-500">{errors.ward}</p>}
      </div>

      {address.ward && (
        <Input
          className="w-full"
          placeholder="Street"
          value={address.street}
          onChange={(e) => handleStreetChange(e.target.value)}
        />
      )}
    </div>
  );
};
