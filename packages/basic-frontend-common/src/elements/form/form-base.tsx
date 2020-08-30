import React, { FC } from "react";
import { Comment, Legend, Label } from "../typography";
import { FormBaseProps } from "./form-base-props";

export const FormBase: FC<FormBaseProps> = ({
  children,
  label,
  legend,
  comment,
  theme,
  htmlFor,
}) => {
  return (
    <div className="flex flex-col">
      {legend && <Legend theme={theme}>{legend}</Legend>}
      {label && (
        <Label theme={theme} htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      {children}
      {comment && (
        <Comment theme={theme} marginTop>
          {comment}
        </Comment>
      )}
    </div>
  );
};
