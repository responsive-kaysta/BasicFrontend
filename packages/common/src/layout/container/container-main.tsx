import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  cssWidth?: string;
  theme?: ThemeType;
};

export const ContainerMain: FC<BasicContainerProps> = ({
  children,
  cssWidth,
  theme,
}) => {
  const style = `container mx-auto ${cssWidth || "md:w-3/4 lg:w-3/5 "} ${
    theme
      ? `${theme.bgColor} ${theme.textColor} ${theme.shadowColor}`
      : "bg-gray-100 text-gray-900 "
  }`;
  return <main className={style}>{children}</main>;
};
