import * as React from "react";
import * as Scroll from "react-scroll";
import { ePageStyleTemplates } from "../../less";
import { FC } from "react";

interface iPageBannerProps {
  header: string;
  paragraph: string;
  scrollTo: string;
  pageStyle?: ePageStyleTemplates;
}

/*
    credits: https://github.com/fisshy/react-scroll
*/

export const PageBanner: FC<iPageBannerProps> = ({
  header,
  paragraph,
  scrollTo,
  pageStyle
}) => {
  let Link = Scroll.Link;

  return (
    <section id="banner">
      <div className={pageStyle}>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
      <Link
        className="more"
        to={scrollTo}
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
      >
        weiter
      </Link>
    </section>
  );
};
