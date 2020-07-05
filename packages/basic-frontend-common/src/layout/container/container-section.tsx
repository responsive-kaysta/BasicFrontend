import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  cssStyle?: string;
};

export const ContainerSection: FC<BasicContainerProps> = ({
  children,
  cssStyle,
}) => {
  return <section className={`${cssStyle || "container"}`}>{children}</section>;
};
