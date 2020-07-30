import React, { FC, ReactNode } from "react";
import { defComment } from "../../identity";
import { ThemeType } from "../../typings";

type CommentProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Comment: FC<CommentProps> = ({ children, theme }) => {
  const style = `mb-2 ${
    theme ? theme.body.textColor : "text-gray-500"
  } ${defComment}`;

  return <p className={style}>{children}</p>;
};
