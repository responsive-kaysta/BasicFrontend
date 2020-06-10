import * as React from "react";
import { FC } from "react";
import * as Scroll from "react-scroll";
import { PageStyleTemplates } from "../../style-types";

interface PageBannerProps {
  header: string;
  paragraph: string;
  scrollTo: string;
  pageStyle?: PageStyleTemplates;
}

/*
    credits: https://github.com/fisshy/react-scroll
*/

export const PageBanner: FC<PageBannerProps> = ({
  header,
  paragraph,
  scrollTo,
  pageStyle,
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
