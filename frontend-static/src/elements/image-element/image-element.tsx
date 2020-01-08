import * as React from "react";
import { iImageProps } from "./spec";

class ImageElement extends React.Component<iImageProps> {
  public render() {
    return (
      <>
        <img src={this.props.imagePath} alt={this.props.imageAltText} />
        {this.props.imageCaptionText && (
          <p className="caption">{this.props.imageCaptionText}</p>
        )}
      </>
    );
  }
}
export default ImageElement;
