import * as React from "react";
import { iSpotlightProps } from "./spec";

class Spotlight extends React.Component<iSpotlightProps> {
  public render() {
    const pageStyle = "spotlight " + this.props.pageStyle;
    const image = this.props.image;
    const header = this.props.header;
    const paragraph = this.props.paragraph;

    return (
      <>
        <section className={pageStyle}>
          <div className="image">
            <img className="wide" src={image} alt="Brains and engineering" />
          </div>
          <div className="content">
            <h2>{header}</h2>
            <p>{paragraph}</p>
          </div>
        </section>
      </>
    );
  }
}

export default Spotlight;
