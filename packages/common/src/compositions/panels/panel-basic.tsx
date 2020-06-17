import React, { FC, ReactNode } from "react";

type PanelBasicProps = {
  content: ReactNode;
  contentCss?: string;
  wrapperCss?: string;
};

export const PanelBasic: FC<PanelBasicProps> = ({
  content,
  contentCss,
  wrapperCss,
}) => {
  return (
    <div
      className={`overflow-hidden shadow rounded-lg ${
        wrapperCss || "bg-white"
      }`}
    >
      <div className={`px-4 py-5 sm:p-6 ${contentCss || ""}`}>{content}</div>
    </div>
  );
};
