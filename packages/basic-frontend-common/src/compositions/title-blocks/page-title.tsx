import React, { FC } from "react";
import { Hruler, Title, TitleSub } from "../../elements";
import { ThemeType } from "../../identity";

type PageTitleProps = {
  title: string;
  subTitle?: string;
  theme?: ThemeType;
  elementId?: string;
};

export const PageTitle: FC<PageTitleProps> = ({
  title,
  subTitle,
  theme,
  elementId,
}) => {
  return (
    <div className="mb-2 md:mb-4" id={elementId}>
      <Title theme={theme}>{title}</Title>
      <Hruler theme={theme} />
      {subTitle && <TitleSub theme={theme}>{subTitle}</TitleSub>}
    </div>
  );
};
