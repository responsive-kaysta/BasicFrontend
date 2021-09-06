import React, { FC, ReactNode } from "react";
import {
  defComment,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from "../../identity";
import { BaseProps } from "./base-props";

type CommentProps = BaseProps & {
  children: ReactNode;
};

export const Comment: FC<CommentProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.body.textSecondaryColor : "text-gray-500"
  } ${defComment} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <p className={style}>{children}</p>;
};
