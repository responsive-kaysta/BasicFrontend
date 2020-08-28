import React, { FC, ReactNode } from "react";
import { Hruler, TextLead, Title } from "../../elements";
import { defTopMaring } from "../../identity";
import { ThemeType } from "../../typings";
import { headerStyle } from "./styles";

type IntroSimpleProps = {
  title: string;
  lead?: string;
  hruler?: boolean;
  centerContent?: boolean;
  containerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroSimple: FC<IntroSimpleProps> = ({
  title,
  lead,
  hruler = true,
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
      <Title theme={theme}>{title}</Title>
      {hruler && <Hruler theme={theme} />}
      {lead && (
        <TextLead theme={theme} cssStyle={!hruler ? `${defTopMaring}` : ""}>
          {lead}
        </TextLead>
      )}
      {children}
    </header>
  );
};
