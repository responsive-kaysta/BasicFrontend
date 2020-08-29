import React, { FC } from "react";
import { Hruler, TextLead, Title, TitleSub } from "../../elements";
import { defTopMaring, ThemeLight } from "../../identity";
import { IntroBaseProps } from "./base-props";
import { IntroBase } from "./base";

type IntroProps = IntroBaseProps & {
  title: string;
  subTitle?: string;
  lead?: string;
  hruler?: boolean;
};

export const Intro: FC<IntroProps> = ({
  title,
  subTitle,
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
      {subTitle && subTitle.length > 0 && (
        <TitleSub theme={theme} cssStyle={!hruler ? `${defTopMaring}` : ""}>
          {subTitle}
        </TitleSub>
      )}
      {lead && lead.length > 0 && (
        <div className={`${defTopMaring}`}>
          <TextLead theme={theme}>{lead}</TextLead>
        </div>
      )}
    </IntroBase>
  );
};
