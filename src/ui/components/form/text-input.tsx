"use client";

import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { ContactFormData } from "@/lib/schemas/contact-form";
import {
  getFormFieldStyles,
  getFormLabelStyles,
  getFormErrorStyles,
} from "@/utils/colors";

interface TextInputProps {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  error,
  required,
  placeholder,
  className = "",
  maxLength,
}) => {
  const [charCount, setCharCount] = useState(0);
  const inputId = `input-${name}`;
  const errorId = error ? `${inputId}-error` : undefined;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCharCount(e.target.value.length);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={inputId} className={getFormLabelStyles}>
          {label}
          {required && (
            <>
              <span className="text-error ml-1" aria-hidden="true">
                *
              </span>
              <span className="sr-only"> (Required)</span>
            </>
          )}
        </label>
        {maxLength && (
          <span className="text-sm text-brown-700">
            {charCount}/{maxLength}
          </span>
        )}
      </div>
      {name === "comments" ? (
        <textarea
          {...register(name, {
            onChange: handleChange,
          })}
          id={inputId}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          aria-required={required}
          style={getFormFieldStyles(error).style}
          className={`${getFormFieldStyles(error).className} min-h-[100px] resize-none`}
          maxLength={maxLength}
        />
      ) : (
        <input
          {...register(name, {
            onChange: handleChange,
          })}
          id={inputId}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          aria-required={required}
          style={getFormFieldStyles(error).style}
          className={getFormFieldStyles(error).className}
          maxLength={maxLength}
        />
      )}
      {error && (
        <p id={errorId} className={getFormErrorStyles} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
