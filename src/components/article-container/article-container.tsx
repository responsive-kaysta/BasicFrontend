import * as React from "react";
import { FC, ReactNode } from "react";
import { ePageStyleTemplates } from "../../page-types/";

interface iArticleContainerProps {
  children: ReactNode;
  pageStyle?: ePageStyleTemplates;
  cssClass?: string;
}

export const ArticleContainer: FC<iArticleContainerProps> = ({
  children,
  pageStyle,
  cssClass
}) => {
  const cssStyle = cssClass ? cssClass + " " + pageStyle : pageStyle;

  return (
    <>
      <article id="main" className={cssStyle}>
        {children}
      </article>
    </>
  );
};
