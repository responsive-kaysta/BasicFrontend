import React, { FC, ReactNode } from "react";
import { defComment, ThemeType } from "../../identity";

type CommentProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Comment: FC<CommentProps> = ({ children, theme }) => {
  const style = `${
    theme ? theme.body.textColor : "text-gray-500"
  } ${defComment}`;

  return <p className={style}>{children}</p>;
};
