import React, { FC, useEffect, useState } from "react";
import { ThemeType } from "../../../identity";
import { Comment, Legend } from "../../typography";
import { RadioButton } from "./radiobutton";

type RadioButtonGroupProps = {
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
  theme?: ThemeType;
};

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  id,
  name,
  legend,
  comment,
  options,
  onChange,
  selectedItem,
  theme,
}) => {
  const [selected, setSelected] = useState<string | null>(selectedItem || null);
  useEffect(() => setSelected(selectedItem || null), [selectedItem]);

  return (
    <fieldset className="" id={id} name={name}>
      <Legend theme={theme}>{legend}</Legend>
      {comment && <Comment theme={theme}>{comment}</Comment>}
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
