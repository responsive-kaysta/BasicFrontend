import React, { FC } from "react";
import { ThemeType } from "../../typings";
import { FormBase } from "./form-base";

type DropdownProps = {
  id: string;
  name: string;

  label?: string;
  legend?: string;
  comment?: string;
  theme?: ThemeType;

  options: { value: string; label: string }[];
  onSelectionChanged: (value: string | null) => void;
  defaultOption?: boolean;
};

export const Dropdown: FC<DropdownProps> = ({
  id,
  name,
  label,
  legend,
  comment,
  theme,

  options,
  defaultOption = true,
  onSelectionChanged,
}) => {
  const style = `block appearance-none w-full ${
    theme ? theme.form.backgroundColor : "bg-white"
  } border ${theme ? theme.form.borderColor : "border-gray-400"} hover:${
    theme ? theme.form.borderHoverColor : "border-gray-500"
  } px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`;

  return (
    <FormBase comment={comment} label={label} legend={legend} theme={theme}>
      <div className="mt-1 inline-block relative">
        <select
          id={id}
          name={name}
          onChange={({ target: { value } }) => onSelectionChanged(value)}
          className={style}
        >
          {defaultOption && <option>Please select</option>}
          {options.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </FormBase>
  );
};
