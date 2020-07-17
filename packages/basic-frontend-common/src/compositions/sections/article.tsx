import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type ArticleSectionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionArticle: FC<ArticleSectionProps> = ({
  children,
  theme,
}) => {
  const style = `w-full ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <article className={style}>{children}</article>;
};
