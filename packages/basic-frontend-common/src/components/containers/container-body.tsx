import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const ContainerBody: FC<BasicContainerProps> = ({ children, theme }) => {
  const style = `flex flex-col items-center w-full h-screen ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;

  return <article className={style}>{children}</article>;
};
