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
  const style = `flex flex-col items-center w-screen h-screen ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  return <article className={style}>{children}</article>;
};
