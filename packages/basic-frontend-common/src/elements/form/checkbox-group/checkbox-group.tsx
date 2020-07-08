import React, { FC } from "react";
import { CheckBox } from "./checkbox";

type CheckBoxGroupProps = {
  id: string;
  name: string;

  legend: string;
  comment?: string;

  options: {
    label: string;
    value: string;
    checked?: boolean;
  }[];

  onChange: (value: string, checked: boolean) => void;
};

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  id,
  name,
  legend,
  comment,
  options,
  onChange,
}) => {
  return (
    <fieldset className="" id={id} name={name}>
      <legend className="text-base font-medium text-gray-900">{legend}</legend>
      {comment && <p className="text-sm leading-5 text-gray-500">{comment}</p>}
      {options.map((item) => {
        return (
          <CheckBox
            key={item.value}
            value={item.value}
            label={item.label}
            checked={item.checked}
            onChange={onChange}
          />
        );
      })}
    </fieldset>
  );
};
