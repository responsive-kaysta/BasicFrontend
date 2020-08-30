import React, { FC } from "react";
import { Comment, Legend } from "../typography";
import { FormBaseProps } from "./form-base-props";

export const FormBase: FC<FormBaseProps> = ({
  children,
  legend,
  comment,
  theme,
}) => {
  return (
    <div className="">
      {legend && <Legend theme={theme}>{legend}</Legend>}
      {children}
      {comment && <Comment theme={theme}>{comment}</Comment>}
    </div>
  );
};
