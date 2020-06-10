import * as React from "react";
import { FC } from "react";
import { PageStyleTemplates } from "../../style-types";

interface ArticleBannerProps {
  header: string;
  paragraph: string;
  pageStyle?: PageStyleTemplates;
  elementId?: string;
}

export const ArticleBanner: FC<ArticleBannerProps> = ({
  header,
  paragraph,
  pageStyle,
  elementId,
}) => {
  return (
    <header className={pageStyle} id={elementId}>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </header>
  );
};
