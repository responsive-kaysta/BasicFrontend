import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type BasicContainerProps = {
  children: ReactNode;
  cssStyle?: string;
  theme?: ThemeType;
};

export const ContainerSection: FC<BasicContainerProps> = ({
  children,
  cssStyle,
  theme,
}) => {
  const style = `container mx-auto ${cssStyle ? cssStyle : ""} ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <section className={style}>{children}</section>;
};
