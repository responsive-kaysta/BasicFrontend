import React, { FC, ReactNode } from "react";

type PanelFooterProps = {
  content: ReactNode;
  footer: ReactNode;
  contentCss?: string;
  footerCss?: string;
  wrapperCss?: string;
};

export const PanelFooter: FC<PanelFooterProps> = ({
  content,
  footer,
  contentCss,
  footerCss,
  wrapperCss,
}) => {
  return (
    <div className="bg-white overflow-hidden overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{content}</div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">{footer}</div>
    </div>
  );
};
