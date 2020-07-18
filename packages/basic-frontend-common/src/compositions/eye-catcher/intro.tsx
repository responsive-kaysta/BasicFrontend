import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type IntroEyeCatcherProps = {
  contentTop: string;
  contentBottom: string;
  shadow?: boolean;
  theme?: ThemeType;
};

export const IntroEyeCatcher: FC<IntroEyeCatcherProps> = ({
  contentTop,
  contentBottom,
  shadow = false,
  theme,
}) => {
  const style = `m-auto text-center ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } `;

  return (
    <header className={style}>
      <Hruler theme={theme} />
      <TitleSub theme={theme}>{contentTop}</TitleSub>
      <Hruler theme={theme} />
      <TextLead theme={theme}>{contentBottom}</TextLead>
    </header>
  );
};
