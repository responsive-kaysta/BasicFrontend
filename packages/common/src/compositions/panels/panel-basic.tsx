import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type PanelBasicProps = {
  content: ReactNode;
  theme?: ThemeType;
};

export const PanelBasic: FC<PanelBasicProps> = ({ content, theme }) => {
  const style = `${
    theme
      ? `${theme.bgColor} ${theme.textColor} ${theme.shadowColor}`
      : "bg-white"
  }`;
  return (
    <div className={`overflow-hidden shadow rounded-lg ${style}`}>
      <div className={`px-4 py-5 sm:p-6 ${theme ? `${theme.textColor}` : ""}`}>
        {content}
      </div>
    </div>
  );
};
