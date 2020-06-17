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
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">{content}</div>
    </div>
  );
};
