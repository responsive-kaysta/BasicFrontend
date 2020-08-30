import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { FormBaseProps } from "../form-base-props";

type CheckBoxProps = FormBaseProps & {
  label: string;
  value: string;
  onChange: (value: string, checked: boolean) => void;
  checked?: boolean;
};

export const CheckBox: FC<CheckBoxProps> = ({
  label,
  value,
  onChange,
  checked,
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
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label htmlFor={value} className="ml-3">
          <span className="block text-sm leading-5 font-medium text-gray-700">
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};
