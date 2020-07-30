import React, { FC, ReactNode } from "react";
import { SectionHeader } from "../../compositions/sections";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeType } from "../../typings";

type IntroSimpleProps = {
  title: string;
  lead?: string;
  hruler?: boolean;
  centerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroSimple: FC<IntroSimpleProps> = ({
  title,
  lead,
  hruler,
  centerContent = false,
  theme,
  elementId,
  children,
}) => {
  return (
    <SectionHeader
      elementId={elementId}
      theme={theme}
      centerContent={centerContent}
    >
      <Title theme={theme}>{title}</Title>
      {hruler && <Hruler theme={theme} noMarginTop />}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </SectionHeader>
  );
};
