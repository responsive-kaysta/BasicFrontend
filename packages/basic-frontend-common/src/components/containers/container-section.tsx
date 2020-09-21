import React, { FC, ReactNode } from "react";
import { defTextMargin, defTextPadding } from "../../identity";
import { BasePropsType } from "../../typings";

type BasicContainerProps = BasePropsType & {
  children: ReactNode;
  cssStyle?: string;
};

export const ContainerSection: FC<BasicContainerProps> = ({
  children,
  cssStyle,
  theme,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
}) => {
  const style = `container mx-auto ${defTextMargin(
    marginBottom,
    marginTop
  )} ${defTextPadding(paddingBottom, paddingTop)} ${cssStyle ? cssStyle : ""} ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"}`;
  return <section className={style}>{children}</section>;
};
