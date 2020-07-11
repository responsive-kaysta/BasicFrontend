import React, { FC } from "react";
import { ThemeType } from "../../identity";

type HrulerProps = {
  theme?: ThemeType;
};

export const Hruler: FC<HrulerProps> = ({ theme }) => {
  return (
    <hr
      className={`mt-2 mb-2 md:mt-4 md:mb-4 ${
        theme ? theme.body.borderColor : "border-gray-800"
      }`}
    />
  );
};
