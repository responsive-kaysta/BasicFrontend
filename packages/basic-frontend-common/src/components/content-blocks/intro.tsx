import React, { FC, ReactNode } from "react";
import { Hruler, TextLead, Title, TitleSub } from "../../elements";
import { ThemeType } from "../../typings";
import { headerStyle } from "./styles";

type IntroProps = {
  title: string;
  subTitle?: string;
  lead?: string;
  hruler?: boolean;
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
  hruler = true,
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
      <Title theme={theme}>{title}</Title>
      {hruler && <Hruler theme={theme} />}
      {subTitle && <TitleSub theme={theme}>{subTitle}</TitleSub>}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </header>
  );
};
