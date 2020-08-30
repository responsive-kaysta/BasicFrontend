import React, { FC, ReactNode } from "react";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeLight } from "../../identity";
import { Orientation, ThemeType } from "../../typings";
import { IntroBase } from "./base";
import { IntroBaseProps } from "./base-props";

type IntroComplexProps = IntroBaseProps & {
  component: ReactNode;
  title?: string;
  componentOrientation?: Orientation;
  lead?: string;
  hruler?: boolean;
};

export const IntroComplex: FC<IntroComplexProps> = ({
  component,
  title,
  componentOrientation,
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
      <div className="flex flex-row justify-between items-baseline">
        {titleComponent(component, componentOrientation, title, theme)}
      </div>
      {hruler && <Hruler theme={theme} />}
      {lead && (
        <TextLead theme={theme} marginTop={hruler ? false : true}>
          {lead}
        </TextLead>
      )}
    </IntroBase>
  );
};

const titleComponent = (
  component: ReactNode,
  componentOrientation?: Orientation,
  title?: string,
  theme?: ThemeType
) => {
  switch (componentOrientation) {
    case Orientation.right:
      return (
        <>
          {title && title.length > 0 && <Title theme={theme}>{title}</Title>}
          {component}
        </>
      );

    case Orientation.left:
    default:
      return (
        <>
          {component}
          {title && title.length > 0 && <Title theme={theme}>{title}</Title>}
        </>
      );
  }
};
