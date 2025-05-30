import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress, setAddress } from "@/store/address/address-slice";

const data: Record<string, string[]> = {
  "Hồ Chí Minh": ["Quận 1", "Quận Bình Thạnh", "Quận Tân Bình"],
  "Hà Nội": ["Quận Hoàn Kiếm", "Quận Cầu Giấy", "Quận Đống Đa"],
  "Đà Nẵng": ["Quận Hải Châu", "Quận Thanh Khê", "Quận Sơn Trà"],
};

interface AddressInputProps {
  handleHideAddress: () => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  handleHideAddress,
}) => {
  const dispatch = useDispatch();
  const address = useSelector(selectAddress);

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">
        Địa chỉ (Việt Nam)
      </Label>

      <Select
        key={address.city}
        value={address.city}
        onValueChange={(val) => {
          dispatch(setAddress({ city: val, ward: "", street: "" }));
          handleHideAddress();
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(data).map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {address.city && (
        <Select
          key={address.ward}
          value={address.ward}
          onValueChange={(val) => {
            dispatch(setAddress({ ...address, ward: val }));
            handleHideAddress();
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ward" />
          </SelectTrigger>
          <SelectContent>
            {data[address.city].map((ward) => (
              <SelectItem key={ward} value={ward}>
                {ward}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {address.ward && (
        <Input
          className="w-full"
          placeholder="Street"
          value={address.street}
          onChange={(e) => {
            dispatch(setAddress({ ...address, street: e.target.value }));
            handleHideAddress();
          }}
        />
      )}
    </div>
  );
};
