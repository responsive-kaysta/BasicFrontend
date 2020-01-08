import * as React from "react";
import { iCallToActionProps } from "./spec";

class CallToAction extends React.Component<iCallToActionProps> {
  public render() {
    const header = this.props.header;
    const paragraph = this.props.paragraph;
    const linkText = this.props.linkText;
    const linkUrl = this.props.linkUrl;
    const specialText = this.props.specialText;
    const specialUrl = this.props.specialUrl;
    const pageStyle = this.props.pageStyle;

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
  }
}

export default CallToAction;
