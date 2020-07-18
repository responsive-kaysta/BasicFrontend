import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type EyeCatcherProps = {
  contentTop: string;
  contentBottom: string;
  shadow?: boolean;
  theme?: ThemeType;
  elementId?: string;
};

export const SimpleEyeCatcher: FC<EyeCatcherProps> = ({
  contentTop,
  contentBottom,
  shadow = false,
  theme,
  elementId,
}) => {
  const style = `w-full text-center py-6 px-6 md:py-10 md:px-16 ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } `;
  return (
    <section className={style} id={elementId}>
      <TitleSub theme={theme}>{contentTop}</TitleSub>
      <Hruler theme={theme} />
      <TextLead theme={theme}>{contentBottom}</TextLead>
    </section>
  );
};
