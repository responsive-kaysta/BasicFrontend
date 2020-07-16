import React, { FC, ReactNode } from "react";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeType } from "../../identity";
import { SectionHeader } from "../sections";

type IntroComplexProps = {
  title: string;
  titleComponent: ReactNode;
  lead?: string;
  hruler?: boolean;
  theme?: ThemeType;
};

export const IntroComplex: FC<IntroComplexProps> = ({
  title,
  titleComponent,
  lead,
  hruler,
  theme,
}) => {
  return (
    <SectionHeader>
      <div className="flex flex-row justify-between items-baseline">
        <Title theme={theme}>{title}</Title> {titleComponent}
      </div>
      {hruler && <Hruler theme={theme} />}
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
    </SectionHeader>
  );
};
