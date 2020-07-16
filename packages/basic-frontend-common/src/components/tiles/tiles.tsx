import React, { FC } from "react";
import { ThemeType } from "../../identity";

type TilesProps = {
  theme?: ThemeType;
};

export const Tiles: FC<TilesProps> = ({ theme }) => {
  const style = `w-full ${theme ? theme.body.backgroundColor : "bg-gray-50"} ${
    theme ? theme.body.textColor : "text-gray-800"
  }`;
  return (
    <div className={style}>
      <span>tile</span>
    </div>
  );
};
