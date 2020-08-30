import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { ThemeLight } from "../../../identity";
import { ThemeType } from "../../../typings";

type CheckBoxProps = {
  label: string;
  value: string;
  onChange: (value: string, checked: boolean) => void;
  checked?: boolean;
  theme?: ThemeType;
};

export const CheckBox: FC<CheckBoxProps> = ({
  label,
  value,
  onChange,
  checked,
  theme = ThemeLight,
}) => {
  const [selected, setSelected] = useState<boolean | undefined>(checked);
  useEffect(() => setSelected(checked), [checked]);

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <input
          id={value}
          value={value}
          type="checkbox"
          checked={selected}
          onChange={({
            target: { checked },
          }: ChangeEvent<HTMLInputElement>) => {
            setSelected(checked);
            onChange(value, checked);
          }}
          className={`form-checkbox h-4 w-4 ${
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
