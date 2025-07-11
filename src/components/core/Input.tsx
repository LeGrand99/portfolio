import React from "react";
interface Props {
  value: string;
  className:string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

function Input({ value,onChange, placeholder,className }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={() => onChange(value)}
      className={`text-sm border border-gray-300 p-2 rounded-lg focus:outline-1 outline-blue-200 ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input;
