import * as React from "react";
import iArticleContainerProps from "./spec/iArticleContainerProps";

class ArticleContainer extends React.Component<iArticleContainerProps> {
  public render() {
    const pageStyle = "special " + this.props.pageStyle;

    return (
      <>
        <article id="main" className={pageStyle}>
          {this.props.children}
        </article>
      </>
    );
  }
}

export default ArticleContainer;
