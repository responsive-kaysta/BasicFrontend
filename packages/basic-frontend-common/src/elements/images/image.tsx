import React, { FC } from "react";

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export const Image: FC<ImageProps> = ({ src, alt, caption }) => {
  return (
    <div>
      <img src={src} alt={alt} className="rounded-md md:rounded-lg" />
      {caption && <caption className="w-full text-base">{caption}</caption>}
    </div>
  );
};
