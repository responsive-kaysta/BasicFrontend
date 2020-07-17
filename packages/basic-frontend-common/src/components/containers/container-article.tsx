import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const ContainerArticle: FC<BasicContainerProps> = ({
  children,
  theme,
}) => {
  const style = `container ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <article className={style}>{children}</article>;
};
