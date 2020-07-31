import React, { FC, ReactNode } from "react";
import { AbstractTitle } from "../../compositions/title-blocks";
import { TextLead } from "../../elements";
import { ThemeType } from "../../typings";
import { headerStyle } from "./styles";

type IntroAbstractProps = {
  title: string;
  lead?: string;
  hruler?: boolean;
  centerContent?: boolean;
  containerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroAbstract: FC<IntroAbstractProps> = ({
  title,
  lead,
  hruler,
  centerContent = false,
  containerContent = false,
  theme,
  elementId,
  children,
}) => {
  return (
    <header
      className={headerStyle(theme, centerContent, containerContent)}
      id={elementId}
    >
      <AbstractTitle title={title} hruler={hruler} theme={theme} />
      {lead && <TextLead theme={theme}>{lead}</TextLead>}
      {children}
    </header>
  );
};
