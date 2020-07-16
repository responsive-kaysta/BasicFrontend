import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionFooterProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionFooter: FC<SectionFooterProps> = ({ children }) => {
  const style = `w-full`;
  return <footer className={style}>{children}</footer>;
};
