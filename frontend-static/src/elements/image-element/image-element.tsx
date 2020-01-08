import * as React from "react";
import { iImageProps } from "./spec";

class ImageElement extends React.Component<iImageProps> {
  public render() {
    const imageElement = (
      <img src={this.props.imagePath} alt={this.props.imageAltText} />
    );

    const imageCaptionText = this.props.imageCaptionText && (
      <p className="caption">{this.props.imageCaptionText}</p>
    );

    const wrapperClass = this.props.imagePadding
      ? "image img-padding"
      : "image";

    return (
      <>
        {this.props.imageWrapper ? (
          <section className={wrapperClass}>
            {imageElement}
            {imageCaptionText}
          </section>
        ) : (
          <>
            {imageElement}
            {imageCaptionText}
          </>
        )}
      </>
    );
  }
}
export default ImageElement;
