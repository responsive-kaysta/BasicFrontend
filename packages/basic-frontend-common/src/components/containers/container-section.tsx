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
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"}`;
  return <section className={style}>{children}</section>;
};
