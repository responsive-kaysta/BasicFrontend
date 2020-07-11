import React, { FC } from "react";
import { Hruler, Title, TitleSub } from "../../elements";
import { ThemeType } from "../../identity";

type PageTitleProps = {
  title: string;
  subTitle: string;
  theme?: ThemeType;
};

export const PageTitle: FC<PageTitleProps> = ({ title, subTitle, theme }) => {
  return (
    <div className="mb-2 md:mb-4">
      <Title theme={theme}>{title}</Title>
      <Hruler theme={theme} />
      <TitleSub theme={theme}>{subTitle}</TitleSub>
    </div>
  );
};
