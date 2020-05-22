import * as React from "react";
import { FC } from "react";
import { PageStyleTemplates } from "../../style-types";

interface CallToActionProps {
  header: string;
  paragraph: string;
  linkText?: string;
  linkUrl?: string;
  specialText?: string;
  specialUrl?: string;
  pageStyle?: PageStyleTemplates;
}

export const CallToAction: FC<CallToActionProps> = ({
  header,
  paragraph,
  linkText,
  linkUrl,
  specialText,
  specialUrl,
  pageStyle,
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
