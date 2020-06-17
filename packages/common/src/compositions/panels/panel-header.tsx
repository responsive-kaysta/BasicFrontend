import React, { FC, ReactNode } from "react";

type PanelHeaderProps = {
  header: ReactNode;
  content: ReactNode;
  contentCss?: string;
  headerCss?: string;
  wrapperCss?: string;
};

export const PanelHeader: FC<PanelHeaderProps> = ({
  header,
  content,
  headerCss,
  contentCss,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">{header}</div>
      <div className="px-4 py-5 sm:p-6">{content}</div>
    </div>
  );
};
