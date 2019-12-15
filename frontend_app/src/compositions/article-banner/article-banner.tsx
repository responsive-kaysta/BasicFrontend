import * as React from "react";
import iArticleBannerProps from "./spec/iArticleBannerProps";

class ArticleBanner extends React.Component<iArticleBannerProps> {
  public render() {
    const pageStyle = this.props.pageStyle;
    const header = this.props.header;
    const paragraph = this.props.paragraph;

    return (
      <>
        <header className={pageStyle} id={this.props.elementId}>
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </header>
      </>
    );
  }
}

export default ArticleBanner;
