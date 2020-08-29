import React, { FC } from "react";
import { Hruler, TextLead, TitleAbstract } from "../../elements";
import { defTopMaring, ThemeLight } from "../../identity";
import { IntroBase } from "./base";
import { IntroBaseProps } from "./base-props";

type IntroAbstractProps = IntroBaseProps & {
  title: string;
  lead?: string;
  hruler?: boolean;
};

export const IntroAbstract: FC<IntroAbstractProps> = ({
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
      <TitleAbstract theme={theme}>{title}</TitleAbstract>
      {hruler && <Hruler theme={theme} />}
      {lead && (
        <TextLead theme={theme} cssStyle={!hruler ? `${defTopMaring}` : ""}>
          {lead}
        </TextLead>
      )}
    </IntroBase>
  );
};
