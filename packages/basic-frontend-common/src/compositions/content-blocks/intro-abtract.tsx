import React, { FC } from "react";
import { SectionHeader } from "../sections";
import { ThemeType } from "../../identity";
import { TextLead } from "../../elements";
import { AbstractTitle } from "../title-blocks";

type IntroAbstractProps = {
  title: string;
  lead?: string;
  hruler?: boolean;
  theme?: ThemeType;
};

export const IntroAbstract: FC<IntroAbstractProps> = ({
  title,
  lead,
  hruler,
  theme,
}) => {
  return (
    <SectionHeader>
      <AbstractTitle title={title} hruler={hruler} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
    </SectionHeader>
  );
};
