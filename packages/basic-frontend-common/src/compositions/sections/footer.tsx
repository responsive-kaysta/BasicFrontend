import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionFooterProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionFooter: FC<SectionFooterProps> = ({ children }) => {
  return <footer>{children}</footer>;
};
