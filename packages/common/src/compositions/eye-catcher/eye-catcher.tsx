import * as React from "react";
import { FC } from "react";
import { PageStyleTemplates } from "../../style-types";

interface EyeCatcherProps {
  header: string;
  paragraph: string;
  pageStyle: PageStyleTemplates;
  elementId?: string;
}

export const EyeCatcher: FC<EyeCatcherProps> = ({
  header,
  paragraph,
  pageStyle,
  elementId,
}) => {
  const cssStyle = "special " + pageStyle;

  return (
    <section className={cssStyle} id={elementId}>
      <header className="major">
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </header>
    </section>
  );
};
