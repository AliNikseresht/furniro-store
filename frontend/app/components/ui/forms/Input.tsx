import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label?: string;
  errorMessage?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  as?: "input" | "textarea";
  rows?: number;
  className?: string;
  [key: string]: unknown;
}

const Input = <T extends FieldValues>({
  label,
  errorMessage,
  name,
  register,
  as = "input",
  rows,
  className,
  ...rest
}: InputProps<T>) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {as === "textarea" ? (
        <textarea
          {...register(name)}
          id={name}
          rows={rows}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-[#b88e2f] focus:border-transparent"
          {...rest}
        />
      ) : (
        <input
          {...register(name)}
          id={name}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 bg-transparent focus:ring-[#b88e2f] focus:border-transparent"
          {...rest}
        />
      )}

      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
