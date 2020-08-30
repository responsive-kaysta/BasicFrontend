import React, { FC } from "react";
import { ThemeType } from "../../../typings";
import { FormBase } from "../form-base";
import { CheckBox } from "./checkbox";
import { ThemeLight } from "../../../identity";

type CheckBoxGroupProps = {
  id: string;
  name: string;
  legend?: string;
  comment?: string;
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
  comment,
  options,
  onChange,
  theme = ThemeLight,
}) => {
  return (
    <FormBase comment={comment} legend={legend} theme={theme}>
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
