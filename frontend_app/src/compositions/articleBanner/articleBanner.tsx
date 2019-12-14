import * as React from "react";
import iArticleBannerProps from "./spec/iArticleBannerProps";

class ArticleBanner extends React.Component<iArticleBannerProps> {
  public render() {
    const style = this.props.cssStyle;
    const header = this.props.header;
    const paragraph = this.props.paragraph;

    return (
      <>
        <header className={style} id={this.props.elementId}>
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </header>
      </>
    );
  }
}

export default ArticleBanner;
