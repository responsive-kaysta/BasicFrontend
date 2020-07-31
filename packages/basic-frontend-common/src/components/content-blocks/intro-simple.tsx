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
      <div className="pt-4 md:pt-4 lg:pt-6 xl:pt-8">
        <Title theme={theme}>{title}</Title>
      </div>
      {hruler && <Hruler theme={theme} />}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </SectionHeader>
  );
};
