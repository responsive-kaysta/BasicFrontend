import React, { FC, ReactNode } from "react";
import { SectionHeader } from "../../compositions/sections";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeType } from "../../identity";

type IntroSimpleProps = {
  title: string;
  lead?: string;
  hruler?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroSimple: FC<IntroSimpleProps> = ({
  title,
  lead,
  hruler,
  theme,
  elementId,
  children,
}) => {
  return (
    <SectionHeader elementId={elementId}>
      <Title theme={theme}>{title}</Title>
      {hruler && <Hruler theme={theme} noMarginTop />}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </SectionHeader>
  );
};
