import { StylesConfig } from "react-select";

export const colors = {
  // Surface colors
  surfaceBrown01: "var(--surface-brown-01)",
  surfaceBrown02: "var(--surface-brown-02)",

  // Text colors
  textBrown01: "var(--text-brown-01)",
  textBrown02: "var(--text-brown-02)",

  // Primary colors
  green100: "var(--p-green-100)",
  green200: "var(--p-green-200)",
  lime200: "var(--p-lime-200)",
  lime300: "var(--p-lime-300)",
  brown100: "var(--p-brown-100)",
  brown300: "var(--p-brown-300)",
  brown400: "var(--p-brown-400)",

  // Status colors
  success: "var(--p-green-100)",
  error: "var(--error)",

  // Utils
  border: "rgba(201, 188, 166, 0.4)", // brown-300 with 40% opacity
  shadow: "rgba(201, 188, 166, 0.2)", // brown-300 with 20% opacity
  backdrop: "rgba(255, 255, 255, 0.8)", // white with 80% opacity

  // Z-index layers
  zIndex: {
    base: 1,
    dropdown: 10,
    modal: 20,
    notification: 30,
    tooltip: 40,
  },
} as const;

export const getFormFieldStyles = (error?: string) => ({
  className: `
    w-full
    bg-brown-200
    rounded-lg
    px-4 py-3
    text-base
    font-lexend
    text-brown-01
    placeholder:text-brown-01/50
    focus:outline-none
    focus:ring-2
    focus:ring-green-100
    focus:border-transparent
    transition-colors
    ${error ? "focus:ring-error" : ""}
  `,
  style: {
    border: `1px solid ${error ? "var(--error)" : "rgba(201, 188, 166, 0.4)"}`,
  }
});

export const getFormLabelStyles = `
  block 
  text-sm 
  font-medium 
  text-brown-01 
  mb-2
`;

export const getFormErrorStyles = `
  mt-1 
  text-sm 
  text-error
  bg-error/5
  px-2 
  py-1 
  rounded
`;

export const getScrollbarStyles = {
  scrollbarWidth: "thin",
  scrollbarColor: "var(--p-brown-300) transparent",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--p-brown-300)",
    borderRadius: "3px",
  },
} as const;

interface SelectOption {
  label: string;
  value: string;
}

export const getSelectStyles = <T extends SelectOption>(
  error?: string
): StylesConfig<T, false> => ({
  control: (provided) => ({
    ...provided,
    backgroundColor: "var(--brown-200)",
    borderColor: error ? "var(--error)" : "rgba(201, 188, 166, 0.4)",
    borderRadius: "0.5rem",
    padding: "0.25rem",
    minHeight: "46px",
    "&:hover": {
      borderColor: error ? "var(--error)" : "var(--p-green-100)",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--p-brown-100)",
    border: "1px solid rgba(201, 188, 166, 0.4)",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(201, 188, 166, 0.2)",
    overflow: "hidden",
    zIndex: colors.zIndex.dropdown,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0.5rem",
    maxHeight: "250px",
    overflowX: "hidden",
    overflowY: "auto",
    ...getScrollbarStyles,
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    backgroundColor: isSelected
      ? "var(--p-green-100)"
      : isFocused
      ? "var(--p-brown-200)"
      : "var(--p-brown-100)",
    color: isSelected ? "var(--p-lime-200)" : "var(--text-brown-01)",
    padding: "0.625rem 1rem",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--text-brown-01)",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--text-brown-01)",
  }),
});
