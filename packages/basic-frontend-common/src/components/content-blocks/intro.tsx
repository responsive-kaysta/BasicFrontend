import React, { FC } from "react";
import { SectionHeader } from "../../compositions/sections";
import { PageTitle } from "../../compositions/title-blocks";
import { TextLead } from "../../elements";
import { ThemeType } from "../../identity";

type IntroProps = {
  title: string;
  subTitle?: string;
  lead?: string;
  theme?: ThemeType;
  elementId?: string;
};

export const Intro: FC<IntroProps> = ({
  title,
  subTitle,
  lead,
  theme,
  elementId,
}) => {
  return (
    <SectionHeader elementId={elementId}>
      <PageTitle title={title} subTitle={subTitle} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
    </SectionHeader>
  );
};
