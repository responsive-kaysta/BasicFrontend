import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type BasicContainerProps = {
  children: ReactNode;
  backgroundImage?: string;
  theme?: ThemeType;
};

export const ContainerBody: FC<BasicContainerProps> = ({
  children,
  backgroundImage,
  theme,
}) => {
  const style = `w-screen h-screen ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-50 text-gray-800"
  }`;

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return <article className={style}>{children}</article>;
};
