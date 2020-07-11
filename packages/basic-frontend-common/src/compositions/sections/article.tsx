import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type ArticleSectionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionArticle: FC<ArticleSectionProps> = ({ children }) => {
  return <article>{children}</article>;
};
