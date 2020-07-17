import React, { FC } from "react";
import { SectionHeader } from "../sections";
import { ThemeType } from "../../identity";
import { PageTitle } from "../title-blocks";
import { TextLead } from "../../elements";

type IntroProps = {
  title: string;
  subTitle?: string;
  lead?: string;
  theme?: ThemeType;
};

export const Intro: FC<IntroProps> = ({ title, subTitle, lead, theme }) => {
  return (
    <SectionHeader>
      <PageTitle title={title} subTitle={subTitle} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
    </SectionHeader>
  );
};
