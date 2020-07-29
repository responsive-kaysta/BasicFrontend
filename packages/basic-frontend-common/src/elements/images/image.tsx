import React, { FC } from "react";
import { Caption } from "../typography/caption";
import { ThemeType } from "../../identity";

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  theme?: ThemeType;
};

export const Image: FC<ImageProps> = ({ src, alt, caption, theme }) => {
  return (
    <div
      className={`flex flex-col w-full ${
        theme ? theme.body.backgroundColor : "bg-gray-100"
      }`}
    >
      <img src={src} alt={alt} className="rounded-md md:rounded-lg" />
      {caption && <Caption theme={theme}>{caption}</Caption>}
    </div>
  );
};
