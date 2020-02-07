import * as React from "react";
import { FC, ReactNode } from "react";
import { ePageStyleTemplates } from "../../page-types/";

interface iArticleContainerProps {
  children: ReactNode;
  pageStyle?: ePageStyleTemplates;
}

export const ArticleContainer: FC<iArticleContainerProps> = ({
  children,
  pageStyle
}) => {
  const cssStyle = "special " + pageStyle;

  return (
    <>
      <article id="main" className={cssStyle}>
        {children}
      </article>
    </>
  );
};
