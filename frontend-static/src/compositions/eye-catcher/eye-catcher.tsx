import * as React from "react";
import { FC } from "react";
import { ePageStyleTemplates } from "../../less";

interface iEyeCatcherProps {
  header: string;
  paragraph: string;
  pageStyle: ePageStyleTemplates;
  elementId?: string;
}

export const EyeCatcher: FC<iEyeCatcherProps> = ({
  header,
  paragraph,
  pageStyle,
  elementId
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
