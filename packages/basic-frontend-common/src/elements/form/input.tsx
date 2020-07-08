import React, { FC } from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  label,
  placeholderText,
  onInputChanged,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type}
          onChange={({ target: { value } }) => onInputChanged(value)}
          className="form-input block w-full sm:text-sm sm:leading-5"
          placeholder={placeholderText}
          {...props}
        />
      </div>
    </div>
  );
};
