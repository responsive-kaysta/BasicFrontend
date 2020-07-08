import React, { FC } from "react";

type DropdownProps = {
  id: string;
  name: string;
  label: string;
  options: { value: string; label: string }[];
  onSelectionChanged: (value: string | null) => void;
  defaultOption?: boolean;
};

export const Dropdown: FC<DropdownProps> = ({
  id,
  name,
  label,
  options,
  defaultOption = true,
  onSelectionChanged,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm leading-5 font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        onChange={({ target: { value } }) => onSelectionChanged(value)}
        className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        {...props}
      >
        {defaultOption && <option>Please select</option>}
        {options.map((item) => {
          return <option value={item.value}>{item.label}</option>;
        })}
      </select>
    </div>
  );
};
