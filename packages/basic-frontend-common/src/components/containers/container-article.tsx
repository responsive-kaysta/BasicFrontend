import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../typings";

type BasicContainerProps = {
  children: ReactNode;
  backgroundImage?: string;
  theme?: ThemeType;
};

export const ContainerArticle: FC<BasicContainerProps> = ({
  children,
  backgroundImage,
  theme,
}) => {
  const style = `w-full m-0 p-0 ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;

  if (typeof window !== "undefined" && backgroundImage) {
    // document.body.style.background = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${backgroundImage})`;
    document.body.style.backgroundImage = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  return <article className={style}>{children}</article>;
};
