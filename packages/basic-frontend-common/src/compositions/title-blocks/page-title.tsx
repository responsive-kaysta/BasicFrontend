import React, { FC } from "react";
import { Hruler, Title, TitleSub } from "../../elements";
import { ThemeType } from "../../typings";

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
    <div className="pt-4 md:pt-4 lg:pt-6 xl:pt-8" id={elementId}>
      <Title theme={theme}>{title}</Title>
      <Hruler theme={theme} />
      {subTitle && <TitleSub theme={theme}>{subTitle}</TitleSub>}
    </div>
  );
};
