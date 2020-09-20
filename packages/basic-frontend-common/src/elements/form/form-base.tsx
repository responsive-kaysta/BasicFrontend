import React, { FC } from "react";
import { Comment, Error, Label, Legend } from "../typography";
import { FormBaseProps } from "./form-base-props";

export const FormBase: FC<FormBaseProps> = ({
  children,
  label,
  legend,
  error,
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
      {error && (
        <Error theme={theme} marginTop>
          {error}
        </Error>
      )}
      {comment && (
        <Comment theme={theme} marginTop>
          {comment}
        </Comment>
      )}
    </div>
  );
};
