import React, { FC, ReactNode } from "react";
import { Hruler, TextLead, Title } from "../../elements";
import { ThemeType, Orientation } from "../../typings";
import { headerStyle } from "./styles";
import { defTopMaring } from "../../identity";

type IntroComplexProps = {
  component: ReactNode;
  title?: string;
  componentOrientation?: Orientation;
  lead?: string;
  hruler?: boolean;
  centerContent?: boolean;
  containerContent?: boolean;
  theme?: ThemeType;
  elementId?: string;
  children?: ReactNode;
};

export const IntroComplex: FC<IntroComplexProps> = ({
  component,
  title,
  componentOrientation,
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
      <div className="flex flex-row justify-between items-baseline">
        {titleComponent(component, componentOrientation, title, theme)}
      </div>
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
          {component}
          {title && title.length > 0 && <Title theme={theme}>{title}</Title>}
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
