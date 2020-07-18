import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type IntroEyeCatcherProps = {
  contentTop: string;
  contentBottom: string;
  shadow?: boolean;
  theme?: ThemeType;
  elementId?: string;
};

export const IntroEyeCatcher: FC<IntroEyeCatcherProps> = ({
  contentTop,
  contentBottom,
  shadow = false,
  theme,
  elementId,
}) => {
  const style = `m-auto w-10/12 md:w-1/2 text-center ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } `;

  return (
    <header className={style} id={elementId}>
      <Hruler theme={theme} />
      <TitleSub theme={theme}>{contentTop}</TitleSub>
      <Hruler theme={theme} />
      <TextLead theme={theme}>{contentBottom}</TextLead>
    </header>
  );
};
