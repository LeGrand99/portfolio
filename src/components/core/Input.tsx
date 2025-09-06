import React from "react";
interface Props {
  type: string;
  value: string;
  className: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

function Input({ type, value, onChange, placeholder, className }: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`text-sm border border-gray-300 p-2 rounded-lg outline-none focus:ring-1 focus:ring-purple-500  dark:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500  ${className}`}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;
