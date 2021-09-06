import React, { FC } from "react";
import { ThemeLight } from "../../../identity";
import { ThemeType } from "../../../typings";
import { FormBase } from "../form-base";
import { CheckBox } from "./checkbox";

type CheckBoxGroupProps = {
  id: string;
  name: string;
  label?: string;
  legend?: string;
  options: {
    label: string;
    value: string;
    checked?: boolean;
  }[];
  onChange: (value: string, checked: boolean) => void;
  theme?: ThemeType;
};

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  id,
  name,
  legend,
  label,
  options,
  onChange,
  theme = ThemeLight,
}) => {
  return (
    <FormBase label={label} htmlFor={id} legend={legend} theme={theme}>
      <fieldset id={id} name={name}>
        {options.map((item) => {
          return (
            <CheckBox
              key={item.value}
              value={item.value}
              label={item.label}
              checked={item.checked}
              onChange={onChange}
              theme={theme}
            />
          );
        })}
      </fieldset>
    </FormBase>
  );
};
