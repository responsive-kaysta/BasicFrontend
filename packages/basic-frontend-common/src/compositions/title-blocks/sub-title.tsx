import React, { FC } from "react";
import { Hruler, TextLead, TitleSub } from "../../elements";
import { ThemeType } from "../../typings";

type PageTitleProps = {
  title: string;
  leadText?: string;
  theme?: ThemeType;
  elementId?: string;
};

export const SubTitle: FC<PageTitleProps> = ({
  title,
  leadText,
  theme,
  elementId,
}) => {
  return (
    <div className="pt-4 md:pt-4 lg:pt-6 xl:pt-8" id={elementId}>
      <TitleSub theme={theme}>{title}</TitleSub>
      <Hruler theme={theme} />
      {leadText && <TextLead theme={theme}>{leadText}</TextLead>}
    </div>
  );
};
