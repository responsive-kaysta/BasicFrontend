import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  cssStyle?: string;
};

export const ContainerArticle: FC<BasicContainerProps> = ({
  children,
  cssStyle,
}) => {
  return <article className={`${cssStyle || "container"}`}>{children}</article>;
};
