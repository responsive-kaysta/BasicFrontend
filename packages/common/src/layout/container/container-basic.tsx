import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  cssWidth?: string;
  theme?: ThemeType;
  backgroundImage?: string;
};

export const ContainerBasic: FC<BasicContainerProps> = ({
  children,
  cssWidth,
  theme,
  backgroundImage,
}) => {
  const style = `container mx-auto z-10 ${cssWidth || "md:w-3/4 lg:w-3/5 "} ${
    theme
      ? `${theme.bgColor} ${theme.textColor} ${theme.shadowColor}`
      : "bg-gray-100 text-gray-900 "
  }`;

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return <div className={style}>{children}</div>;
};
