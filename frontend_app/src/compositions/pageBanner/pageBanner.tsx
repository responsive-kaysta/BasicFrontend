import * as React from "react";
import * as Scroll from "react-scroll";
import { iPageBannerProps } from "./spec";

/*
    credits: https://github.com/fisshy/react-scroll
*/

class PageBanner extends React.Component<iPageBannerProps> {
  public render() {
    const style = this.props.cssStyle;
    const header = this.props.header;
    const paragraph = this.props.paragraph;
    const scrollTo = this.props.scrollTo;

    let Link = Scroll.Link;

    return (
      <>
        <section id="banner">
          <div className={style}>
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
      </>
    );
  }
}

export default PageBanner;
