import React, { FC, ReactNode } from "react";
import { SectionHeader } from "../../compositions/sections";
import { PageTitle } from "../../compositions/title-blocks";
import { TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type IntroProps = {
  title: string;
  subTitle?: string;
  lead?: string;
  theme?: ThemeType;
  centerContent?: boolean;
  elementId?: string;
  children?: ReactNode;
};

export const Intro: FC<IntroProps> = ({
  title,
  subTitle,
  lead,
  theme,
  centerContent = false,
  elementId,
  children,
}) => {
  return (
    <SectionHeader
      elementId={elementId}
      theme={theme}
      centerContent={centerContent}
    >
      <PageTitle title={title} subTitle={subTitle} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </SectionHeader>
  );
};
