import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type CommentProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Comment: FC<CommentProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-500"
  } text-sm leading-5`;

  return <p className={style}>{children}</p>;
};
