import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type BasicContainerProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const ContainerCover: FC<BasicContainerProps> = ({
  children,
  theme,
}) => {
  const style = `w-full ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <div className={style}>{children}</div>;
};
