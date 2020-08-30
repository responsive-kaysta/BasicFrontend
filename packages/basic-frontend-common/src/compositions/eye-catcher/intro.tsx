import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../typings";

type IntroEyeCatcherProps = {
  contentTop: string;
  contentBottom?: string;
  shadow?: boolean;
  theme?: ThemeType;
  elementId?: string;
  cssStyle?: string;
};

export const IntroEyeCatcher: FC<IntroEyeCatcherProps> = ({
  contentTop,
  contentBottom,
  shadow = false,
  theme,
  elementId,
  cssStyle,
}) => {
  const style = `m-auto w-10/12 md:w-3/4 text-center ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } ${cssStyle ? cssStyle : ""}`;

  return (
    <header className={style} id={elementId}>
      <Hruler theme={theme} />
      <TitleSub theme={theme}>{contentTop}</TitleSub>
      <Hruler theme={theme} />
      {contentBottom && contentBottom.length > 0 && (
        <TextLead theme={theme}>{contentBottom}</TextLead>
      )}
    </header>
  );
};
