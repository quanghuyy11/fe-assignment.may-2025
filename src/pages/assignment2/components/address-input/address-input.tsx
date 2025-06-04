import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { cityData } from '@/sample/city';
import { setAddressField } from '@/store/address/address-slice';

interface AddressInputProps {
  label: string;
}

export const AddressInput: React.FC<AddressInputProps> = ({ label }) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.address);
  const cityWardMap = cityData;

  const handleCityChange = (val: string) => {
    dispatch(setAddressField({ key: 'city', value: val }));
    dispatch(setAddressField({ key: 'ward', value: '' }));
  };

  const handleWardChange = (val: string) => {
    dispatch(setAddressField({ key: 'ward', value: val }));
  };

  const handleStreetChange = (val: string) => {
    dispatch(setAddressField({ key: 'street', value: val }));
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">{label}</Label>

      <Select
        key={address.city}
        value={address.city}
        onValueChange={handleCityChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(cityWardMap).map((cityOption) => (
            <SelectItem key={cityOption} value={cityOption}>
              {cityOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {address.city && (
        <Select
          key={address.ward}
          value={address.ward}
          onValueChange={handleWardChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ward" />
          </SelectTrigger>
          <SelectContent>
            {(typeof address.city === 'string' && address.city in cityWardMap
              ? cityWardMap[address.city]
              : []
            ).map((wardOption) => (
              <SelectItem key={wardOption} value={wardOption}>
                {wardOption}
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
          onChange={(e) => handleStreetChange(e.target.value)}
        />
      )}
    </div>
  );
};
