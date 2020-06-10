import * as React from "react";
import { FC, ReactNode } from "react";
import { PageStyleTemplates } from "../../style-types";

interface ArticleContainerProps {
  children: ReactNode;
  pageStyle?: PageStyleTemplates;
  cssClass?: string;
}

export const ArticleContainer: FC<ArticleContainerProps> = ({
  children,
  pageStyle,
  cssClass,
}) => {
  const cssStyle = cssClass ? `${cssClass} ${pageStyle}` : pageStyle;

  return (
    <>
      <article id="main" className={cssStyle}>
        {children}
      </article>
    </>
  );
};
