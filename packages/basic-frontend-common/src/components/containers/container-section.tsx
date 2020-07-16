import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const ContainerSection: FC<BasicContainerProps> = ({
  children,
  theme,
}) => {
  const style = `container ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-50 text-gray-800"
  }`;
  return <section className={style}>{children}</section>;
};
