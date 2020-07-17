import React, { FC } from "react";
import { Hruler, TitleAbstract } from "../../elements";
import { ThemeType } from "../../identity";

type AbstractTitleProps = {
  title: string;
  hruler?: boolean;
  theme?: ThemeType;
};

export const AbstractTitle: FC<AbstractTitleProps> = ({
  title,
  hruler = false,
  theme,
}) => {
  return (
    <div className="mb-2 md:mb-4">
      <TitleAbstract theme={theme}>{title}</TitleAbstract>
      {hruler && <Hruler theme={theme} />}
    </div>
  );
};
