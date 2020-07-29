import React, { FC, ReactNode } from "react";
import { SectionHeader } from "../../compositions/sections";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeType } from "../../identity";

type IntroComplexProps = {
  title: string;
  titleComponent: ReactNode;
  lead?: string;
  hruler?: boolean;
  centerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroComplex: FC<IntroComplexProps> = ({
  title,
  titleComponent,
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
      <div className="flex flex-row justify-between items-baseline">
        <Title theme={theme}>{title}</Title> {titleComponent}
      </div>
      {hruler && <Hruler theme={theme} noMarginTop />}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </SectionHeader>
  );
};
