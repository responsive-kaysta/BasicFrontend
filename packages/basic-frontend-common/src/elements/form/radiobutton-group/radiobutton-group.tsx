import React, { FC, useEffect, useState } from "react";
import { ThemeLight } from "../../../identity";
import { ThemeType } from "../../../typings";
import { FormBase } from "../form-base";
import { RadioButton } from "./radiobutton";

type RadioButtonGroupProps = {
  id: string;
  name: string;
  label?: string;
  legend?: string;
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
  label,
  legend,
  options,
  onChange,
  selectedItem,
  theme = ThemeLight,
}) => {
  const [selected, setSelected] = useState<string | null>(selectedItem || null);
  useEffect(() => setSelected(selectedItem || null), [selectedItem]);

  return (
    <FormBase label={label} htmlFor={id} legend={legend} theme={theme}>
      <fieldset id={id} name={name}>
        {options.map((item) => {
          return (
            <RadioButton
              key={item.value}
              value={item.value}
              label={item.label}
              theme={theme}
              checked={selected === item.value}
              onChange={() => {
                setSelected(item.value);
                onChange && onChange(item.value);
              }}
            />
          );
        })}
      </fieldset>
    </FormBase>
  );
};
