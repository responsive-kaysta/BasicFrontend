import * as React from "react";
import { ePageStyleTemplates } from "../../page-types/";
import { FC } from "react";

interface iArticleBannerProps {
  header: string;
  paragraph: string;
  pageStyle?: ePageStyleTemplates;
  elementId?: string;
}

export const ArticleBanner: FC<iArticleBannerProps> = ({
  header,
  paragraph,
  pageStyle,
  elementId
}) => {
  return (
    <header className={pageStyle} id={elementId}>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </header>
  );
};
