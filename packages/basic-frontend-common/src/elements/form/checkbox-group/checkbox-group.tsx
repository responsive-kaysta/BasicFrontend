import React, { FC } from "react";
import { ThemeType } from "../../../typings";
import { FormBase } from "../form-base";
import { CheckBox } from "./checkbox";

type CheckBoxGroupProps = {
  id: string;
  name: string;

  label?: string;
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
  label,
  legend,
  comment,
  options,
  onChange,
  theme,
}) => {
  return (
    <FormBase comment={comment} label={label} legend={legend} theme={theme}>
      <fieldset id={id} name={name}>
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
    </FormBase>
  );
};
