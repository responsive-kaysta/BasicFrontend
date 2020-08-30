import React, { ChangeEvent, FC } from "react";
import { ThemeLight } from "../../../identity";
import { ThemeType } from "../../../typings";

type RadioButtonProps = {
  label: string;
  value: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
  theme?: ThemeType;
};

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  value,
  onChange,
  checked,
  disabled,
  theme = ThemeLight,
}) => {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <input
          id={value}
          value={value}
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
            onChange(checked)
          }
          className={`form-radio h-4 w-4 ${
            theme ? theme.form.textColor : "text-gray-800"
          } transition duration-150 ease-in-out`}
        />
        <label htmlFor={value} className="ml-3">
          <span
            className={`block text-sm leading-5 font-medium ${
              theme ? theme.form.textColor : "text-gray-800"
            }`}
          >
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};
