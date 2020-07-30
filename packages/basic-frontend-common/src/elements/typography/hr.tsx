import React, { FC } from "react";
import { ThemeType } from "../../typings";

type HrulerProps = {
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
  theme?: ThemeType;
};

export const Hruler: FC<HrulerProps> = ({
  noMarginTop,
  noMarginBottom,
  theme,
}) => {
  return (
    <hr
      className={`${noMarginTop ? "" : "mt-2 md:mt-4"} ${
        noMarginBottom ? "" : "mb-2 md:mb-4"
      } ${theme ? theme.body.borderColor : "border-gray-300"}`}
    />
  );
};
