"use client";

import React from "react";
import { UseFormRegister, Controller, Control } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { ContactFormData } from "@/lib/schemas/contact-form";
import { getFormLabelStyles, getFormErrorStyles, colors, getFormFieldStyles } from "@/utils/colors";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  label: string;
  register: UseFormRegister<ContactFormData>;
  control: Control<ContactFormData>;
  error?: string;
  required?: boolean;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  control,
  error,
  required,
  className = "",
}) => {
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);

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
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              selected={value ? new Date(value) : null}
              onChange={onChange}
              minDate={minDate}
              dateFormat="MMMM d, yyyy"
              {...getFormFieldStyles(error)}
              placeholderText="Select a date"
              showPopperArrow={false}
              popperPlacement="bottom-start"
              calendarClassName="custom-scrollbar bg-brown-100 border border-brown-300/40 rounded-lg shadow-lg"
              popperClassName="date-picker-popper"
            />
          )}
        />
      </div>
      {error && (
        <p className={getFormErrorStyles} role="alert">
          {error}
        </p>
      )}

      <style jsx global>{`
        .react-datepicker {
          font-family: var(--p-font-lexend), sans-serif;
          background-color: var(--p-brown-100);
          border: 1px solid ${colors.border};
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px ${colors.shadow};
          margin-top: 0.25rem;
          overflow: hidden;
        }

        .react-datepicker__header {
          background-color: var(--p-brown-100);
          border-bottom: 1px solid ${colors.border};
          padding: 0.75rem;
        }

        .react-datepicker__current-month {
          color: var(--text-brown-01);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .react-datepicker__day-names {
          margin-top: 0.5rem;
        }

        .react-datepicker__day-name {
          color: var(--text-brown-01);
          font-weight: 500;
        }

        .react-datepicker__day {
          color: var(--text-brown-01);
          border-radius: 0.375rem;
          transition: all 0.2s;
          margin: 0.166rem;
          width: 2rem;
          line-height: 2rem;
        }

        .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
          background-color: var(--p-brown-200);
        }

        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background-color: var(--p-green-100) !important;
          color: var(--p-lime-200) !important;
        }

        .react-datepicker__day--disabled {
          color: var(--p-brown-400);
        }

        .react-datepicker__navigation {
          top: 0.875rem;
        }

        .react-datepicker__navigation-icon::before {
          border-color: var(--text-brown-01);
          transition: border-color 0.2s;
        }

        .react-datepicker__navigation:hover *::before {
          border-color: var(--p-green-100);
        }

        .react-datepicker__month {
          margin: 0.5rem;
        }

        .date-picker-popper {
          z-index: ${colors.zIndex.dropdown};
        }

        .react-datepicker__triangle {
          display: none;
        }

        .react-datepicker__month-container {
          float: none;
        }

        .react-datepicker-popper {
          width: max-content;
        }

        /* Handle mobile responsiveness */
        @media (max-width: 640px) {
          .react-datepicker__day {
            width: 1.75rem;
            line-height: 1.75rem;
            margin: 0.125rem;
          }

          .react-datepicker__current-month {
            font-size: 0.875rem;
          }

          .react-datepicker__header {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};
