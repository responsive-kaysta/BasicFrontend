import React, { FC } from "react";
import { ThemeType } from "../../identity";

type TileElementProps = {
  theme?: ThemeType;
};

export const TileElement: FC<TileElementProps> = ({ theme }) => {
  const style = `w-full ${theme ? theme.body.backgroundColor : "bg-gray-50"} ${
    theme ? theme.body.textColor : "text-gray-800"
  }`;
  return (
    <div className={style}>
      <span>tile</span>
    </div>
  );
};
