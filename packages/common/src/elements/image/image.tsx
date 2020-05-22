import * as React from "react";
import { FC } from "react";

interface ImageProps {
  imagePath: string;
  imageAltText: string;
  imageCaptionText?: string;
  imageWrapper?: boolean;
  imagePadding?: boolean;
}

export const Image: FC<ImageProps> = ({
  imagePath,
  imageAltText,
  imageCaptionText,
  imagePadding,
  imageWrapper,
}) => {
  const imageElement = <img src={imagePath} alt={imageAltText} />;

  const captionText = imageCaptionText && (
    <p className="caption">{imageCaptionText}</p>
  );

  const wrapperClass = imagePadding ? "image img-padding" : "image";

  return (
    <>
      {imageWrapper ? (
        <section className={wrapperClass}>
          {imageElement}
          {captionText}
        </section>
      ) : (
        <>
          {imageElement}
          {captionText}
        </>
      )}
    </>
  );
};
