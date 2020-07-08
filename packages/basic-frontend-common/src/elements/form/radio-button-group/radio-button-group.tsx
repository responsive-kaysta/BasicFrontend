import React, { FC, useState, useEffect } from "react";
import { RadioButton } from "./radio-button";

type RadiobuttonGroupProps = {
  id: string;
  name: string;

  legend: string;
  comment?: string;

  options: {
    label: string;
    value: string;
  }[];

  onChange?: (value: string) => void;
  selectedItem?: string;
};

export const RadiobuttonGroup: FC<RadiobuttonGroupProps> = ({
  id,
  name,
  legend,
  comment,
  options,
  onChange,
  selectedItem,
}) => {
  const [selected, setSelected] = useState<string | null>(selectedItem || null);
  useEffect(() => setSelected(selectedItem || null), [selectedItem]);

  return (
    <fieldset className="mt-6" id={id} name={name}>
      <legend className="text-base font-medium text-gray-900">{legend}</legend>
      {comment && <p className="text-sm leading-5 text-gray-500">{comment}</p>}
      {options.map((item) => {
        return (
          <RadioButton
            key={item.value}
            value={item.value}
            label={item.label}
            checked={selected === item.value}
            onChange={() => {
              setSelected(item.value);
              onChange && onChange(item.value);
            }}
          />
        );
      })}
    </fieldset>
  );
};
