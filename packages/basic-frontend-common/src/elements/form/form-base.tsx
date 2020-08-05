import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";
import { Comment, Label, Legend } from "../typography";

type FormBaseProps = {
  children: ReactNode;

  label?: string;
  legend?: string;
  comment?: string;
  theme?: ThemeType;
};

export const FormBase: FC<FormBaseProps> = ({
  children,
  label,
  legend,
  comment,
  theme,
}) => {
  return (
    <div className="w-full">
      {label && (
        <div>
          <Label theme={theme}>{label}</Label>
        </div>
      )}
      {legend && <Legend theme={theme}>{legend}</Legend>}
      {comment && <Comment theme={theme}>{comment}</Comment>}
      {children}
    </div>
  );
};
