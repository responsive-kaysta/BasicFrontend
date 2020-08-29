import React, { FC } from "react";
import { Hruler, TextLead, Title } from "../../elements";
import { defTopMaring, ThemeLight } from "../../identity";
import { IntroBase } from "./base";
import { IntroBaseProps } from "./base-props";

type IntroSimpleProps = IntroBaseProps & {
  title: string;
  lead?: string;
  hruler?: boolean;
};

export const IntroSimple: FC<IntroSimpleProps> = ({
  title,
  lead,
  hruler = true,
  cssStyle,
  elementId,
  paddingTop = true,
  paddingBottom = true,
  marginTop = false,
  marginBottom = false,
  theme = ThemeLight,
  centerContent = false,
  containerContent = false,
}) => {
  return (
    <IntroBase
      centerContent={centerContent}
      containerContent={containerContent}
      cssStyle={cssStyle}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      theme={theme}
      elementId={elementId}
    >
      <Title theme={theme}>{title}</Title>
      {hruler && <Hruler theme={theme} />}
      {lead && (
        <TextLead theme={theme} cssStyle={!hruler ? `${defTopMaring}` : ""}>
          {lead}
        </TextLead>
      )}
    </IntroBase>
  );
};
