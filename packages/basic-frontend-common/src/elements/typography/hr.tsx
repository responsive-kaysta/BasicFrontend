import React, { FC } from "react";
import { ThemeType } from "../../typings";

type HrulerProps = {
  theme?: ThemeType;
};

export const Hruler: FC<HrulerProps> = ({ theme }) => {
  return (
    <hr
      className={`mt-2 mb-3 md:mt-4 md:mb-5 xl:mt-6 xl:mb-7 ${
        theme ? theme.body.borderColor : "border-gray-300"
      }`}
    />
  );
};
