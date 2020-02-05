import * as React from "react";
import { FC } from "react";
import { ePageStyleTemplates } from "../../less";

interface iCallToActionProps {
  header: string;
  paragraph: string;
  linkText?: string;
  linkUrl?: string;
  specialText?: string;
  specialUrl?: string;
  pageStyle?: ePageStyleTemplates;
}

export const CallToAction: FC<iCallToActionProps> = ({
  header,
  paragraph,
  linkText,
  linkUrl,
  specialText,
  specialUrl,
  pageStyle
}) => {
  return (
    <section id="cta" className={pageStyle}>
      <div className="inner">
        <header>
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </header>
        <ul className="actions vertical">
          {specialText && (
            <li>
              <a href={specialUrl} className="button fit special">
                {specialText}
              </a>
            </li>
          )}
          {linkText && (
            <li>
              <a href={linkUrl} className="button fit">
                {linkText}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
