import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../typings";

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
  const style = `w-full text-center py-10 ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } `;
  return (
    <section className={style} id={elementId}>
      <div className="container mx-auto">
        <TitleSub theme={theme}>{contentTop}</TitleSub>
        <Hruler theme={theme} />
        <TextLead theme={theme}>{contentBottom}</TextLead>
      </div>
    </section>
  );
};
