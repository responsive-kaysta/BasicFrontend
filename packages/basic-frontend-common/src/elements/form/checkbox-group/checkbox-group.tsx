import React, { FC } from "react";
import { ThemeType } from "../../../identity";
import { Comment, Legend } from "../../typography";
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
  theme?: ThemeType;
};

export const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  id,
  name,
  legend,
  comment,
  options,
  onChange,
  theme,
}) => {
  return (
    <fieldset className="" id={id} name={name}>
      <Legend theme={theme}>{legend}</Legend>
      {comment && <Comment theme={theme}>{comment}</Comment>}
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
