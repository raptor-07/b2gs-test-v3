"use client";

import React, { useEffect } from "react";
import { UseFormRegister, Control, useWatch } from "react-hook-form";
import Select from "react-select";
import { ContactFormData } from "@/lib/schemas/contact-form";
import { getSelectStyles, getFormLabelStyles, getFormErrorStyles, getFormFieldStyles } from "@/utils/colors";
import countryCodesData from "@/../public/assets/country-codes/country-codes.json";

type CountryOption = {
  value: string;
  label: string;
  flag: string;
  name: string;
};

const countries: CountryOption[] = countryCodesData
  .filter((country) => country.flag && country.dial_code)
  .map((country) => ({
    value: country.dial_code,
    label: `${country.dial_code}`,
    flag: country.flag,
    name: country.name,
  }))
  .sort((a, b) => a.value.localeCompare(b.value));

interface PhoneInputProps {
  label: string;
  register: UseFormRegister<ContactFormData>;
  control: Control<ContactFormData>;
  error?: string;
  required?: boolean;
  className?: string;
  onCountryChange: (value: string) => void;
}

const CountrySelect = React.memo(({ 
  error, 
  onCountryChange 
}: { 
  error?: string; 
  onCountryChange: (value: string) => void;
}) => (
  <Select<CountryOption>
    instanceId="country-code-select"
    options={countries}
    styles={{
      ...getSelectStyles<CountryOption>(error),
      container: (base) => ({
        ...base,
        minWidth: '240px',
      }),
      input: (base) => ({
        ...base,
        color: 'var(--text-brown-01)',
      }),
    }}
    defaultValue={countries.find((c) => c.value === "+91")}
    onChange={(option) => onCountryChange(option?.value || "")}
    isSearchable={true}
    placeholder="Search country or code..."
    filterOption={(option, input) => {
      if (!input) return true;
      const searchInput = input.toLowerCase();
      return (
        option.data.name.toLowerCase().includes(searchInput) ||
        option.data.value.toLowerCase().includes(searchInput)
      );
    }}
    formatOptionLabel={({ flag, value, name }) => (
      <div className="flex items-center gap-2 min-w-0">
        <span className="flex-shrink-0">{flag}</span>
        <span className="flex-shrink-0">{value}</span>
        <span className="truncate text-brown-600 text-sm">
          {name}
        </span>
      </div>
    )}
    className="custom-scrollbar"
  />
));

CountrySelect.displayName = "CountrySelect";

export const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  register,
  control,
  error,
  required,
  className = "",
  onCountryChange,
}) => {
  // Watch the phone number value to format it
  const phoneNumber = useWatch({
    control,
    name: "phone.number",
  });

  // Format phone number by removing non-digits and limiting to 10 digits
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    return digits;
  };

  useEffect(() => {
    if (phoneNumber) {
      const formattedNumber = formatPhoneNumber(phoneNumber);
      if (formattedNumber !== phoneNumber) {
        // Update the field with formatted value
        register("phone.number").onChange({
          target: { value: formattedNumber }
        });
      }
    }
  }, [phoneNumber, register]);

  return (
    <div className={`w-full ${className}`}>
      <label className={getFormLabelStyles}>
        {label}
        {required && (
          <>
            <span className="text-error ml-1" aria-hidden="true">*</span>
            <span className="sr-only"> (Required)</span>
          </>
        )}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className="sm:col-span-6">
          <CountrySelect error={error} onCountryChange={onCountryChange} />
        </div>
        <div className="sm:col-span-6">
          <input
            {...register("phone.number")}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Phone number"
            {...getFormFieldStyles(error)}
            onChange={(e) => {
              const formatted = formatPhoneNumber(e.target.value);
              e.target.value = formatted;
              register("phone.number").onChange(e);
            }}
          />
        </div>
      </div>
      {error && (
        <p 
          className={getFormErrorStyles}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
