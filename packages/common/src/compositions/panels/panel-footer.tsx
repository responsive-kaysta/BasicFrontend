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
    <div
      className={`overflow-hidden overflow-hidden shadow rounded-lg ${
        wrapperCss || "bg-white"
      }`}
    >
      <div className={`px-4 py-5 sm:p-6 ${contentCss || ""}`}>{content}</div>
      <div
        className={`border-t px-4 py-4 sm:px-6 ${
          footerCss || "border-gray-200"
        }`}
      >
        {footer}
      </div>
    </div>
  );
};
