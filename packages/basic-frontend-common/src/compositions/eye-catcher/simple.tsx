import React, { FC } from "react";
import { Hruler, TitleSub, TextLead } from "../../elements";
import { ThemeType } from "../../typings";

type EyeCatcherProps = {
  contentTop: string;
  contentBottom?: string;
  shadow?: boolean;
  theme?: ThemeType;
  elementId?: string;
  cssStyle?: string;
};

export const SimpleEyeCatcher: FC<EyeCatcherProps> = ({
  contentTop,
  contentBottom,
  shadow = false,
  theme,
  elementId,
  cssStyle,
}) => {
  const style = `w-full text-center ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  } ${theme ? theme.body.textColor : "text-gray-800"} overflow-hidden ${
    shadow ? "shadow-lg" : ""
  } ${cssStyle ? cssStyle : "py-10"}`;
  return (
    <section className={style} id={elementId}>
      <div className="container mx-auto">
        <TitleSub theme={theme}>{contentTop}</TitleSub>
        <Hruler theme={theme} />
        {contentBottom && contentBottom.length > 0 && (
          <TextLead theme={theme}>{contentBottom}</TextLead>
        )}
      </div>
    </section>
  );
};
