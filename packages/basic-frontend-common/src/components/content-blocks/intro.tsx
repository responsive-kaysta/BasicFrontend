import React, { FC, ReactNode } from "react";
import { PageTitle } from "../../compositions/title-blocks";
import { TextLead } from "../../elements";
import { ThemeType } from "../../typings";
import { headerStyle } from "./styles";

type IntroProps = {
  title: string;
  subTitle?: string;
  lead?: string;
  theme?: ThemeType;
  centerContent?: boolean;
  containerContent?: boolean;
  elementId?: string;
  children?: ReactNode;
};

export const Intro: FC<IntroProps> = ({
  title,
  subTitle,
  lead,
  theme,
  centerContent = false,
  containerContent = false,
  elementId,
  children,
}) => {
  return (
    <header
      className={headerStyle(theme, centerContent, containerContent)}
      id={elementId}
    >
      <PageTitle title={title} subTitle={subTitle} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </header>
  );
};
