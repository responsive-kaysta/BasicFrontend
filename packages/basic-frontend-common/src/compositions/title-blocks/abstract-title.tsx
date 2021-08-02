import React, { FC } from "react";
import { Hruler, TitleAbstract } from "../../elements";
import { ThemeType } from "../../typings";

type AbstractTitleProps = {
  title: string;
  hruler?: boolean;
  theme?: ThemeType;
  elementId?: string;
};

export const AbstractTitle: FC<AbstractTitleProps> = ({
  title,
  hruler = false,
  theme,
  elementId,
}) => {
  return (
    <div
      className="pt-4 pb-2 md:pt-4 md:pb-4 lg:pt-6 xl:pt-8 xl:pb-6"
      id={elementId}
    >
      <TitleAbstract theme={theme}>{title}</TitleAbstract>
      {hruler && <Hruler theme={theme} />}
    </div>
  );
};
