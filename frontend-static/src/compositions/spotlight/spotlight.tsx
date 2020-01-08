import * as React from "react";
import { iSpotlightProps } from "./spec";
import SpotlightRight from "./spotlight-right";
import SpotlightLeft from "./spotlight-left";

class Spotlight extends React.Component<iSpotlightProps> {
  public render() {
    const pageStyleLeft =
      "spotlight " + this.props.pageStyle + " spotlight-left";
    const pageStyleRight =
      "spotlight " + this.props.pageStyle + " spotlight-right";
    const pictogram = this.props.pictogram;
    const header = this.props.header;
    const paragraph = this.props.paragraph;

    return this.props.orientation === "right" ? (
      <SpotlightRight
        header={header}
        paragraph={paragraph}
        pageStyle={pageStyleRight}
        pictogram={pictogram}
      />
    ) : (
      <SpotlightLeft
        header={header}
        paragraph={paragraph}
        pageStyle={pageStyleLeft}
        pictogram={pictogram}
      />
    );
  }
}

export default Spotlight;
