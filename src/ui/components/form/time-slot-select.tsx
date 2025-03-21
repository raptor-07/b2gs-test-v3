"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import Select from "react-select";
import { ContactFormData, timeSlots } from "@/lib/schemas/contact-form";
import { getSelectStyles, getFormLabelStyles, getFormErrorStyles } from "@/utils/colors";

type TimeSlotOption = {
  value: typeof timeSlots[number];
  label: string;
};

const timeSlotOptions: TimeSlotOption[] = timeSlots.map((slot) => ({
  value: slot,
  label: slot,
}));

interface TimeSlotSelectProps {
  label: string;
  register: UseFormRegister<ContactFormData>;
  error?: string;
  required?: boolean;
  className?: string;
  onChange: (value: string) => void;
}

const TimeSelect = React.memo(({
  error,
  onChange
}: {
  error?: string;
  onChange: (value: string) => void;
}) => (
  <Select<TimeSlotOption>
    instanceId="time-slot-select"
    options={timeSlotOptions}
    styles={getSelectStyles<TimeSlotOption>(error)}
    onChange={(option) => onChange(option?.value || timeSlots[0])}
    placeholder="Select a time slot"
    formatOptionLabel={({ label }) => (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="truncate">{label}</span>
      </div>
    )}
    className="custom-scrollbar"
    isSearchable={false}
  />
));

TimeSelect.displayName = "TimeSelect";

export const TimeSlotSelect: React.FC<TimeSlotSelectProps> = ({
  label,
  error,
  required,
  className = "",
  onChange,
}) => {
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
      <div className="relative">
        <TimeSelect error={error} onChange={onChange} />
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
