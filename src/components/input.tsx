import clsx from "clsx";
import React from "react";

interface InputProps {
  placeholder: string;
  className?: string;
}

function CustomInput({ placeholder, className }: InputProps) {
  return (
    <input
      type="text"
      name="input"
      placeholder={placeholder}
      className={clsx(
        `w-[300px] px-4 py-3 border-black border bg-white placeholder-gray-600 rounded-full text-xs font-thin uppercase`,
        className
      )}
    />
  );
}

export default CustomInput;
