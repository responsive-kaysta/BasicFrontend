import React, { FC } from "react";
import { TextRegular, TitleAbstract, Hruler } from "../../elements";
import { Image } from "../../elements/images";
import { ThemeType } from "../../identity";

type ProductProps = {
  title: string;
  content: string;
  src: string;
  alt: string;
  caption?: string;
  theme?: ThemeType;
};

export const Product: FC<ProductProps> = ({
  title,
  content,
  src,
  alt,
  caption,
  theme,
}) => {
  return (
    <div className="flex flex-row">
      <div className="w-2/4">
        <TitleAbstract theme={theme}>{title}</TitleAbstract>
        <Hruler theme={theme} />
        <TextRegular theme={theme}>{content}</TextRegular>
      </div>
      <div className="w-2/4 ml-4 md:ml-8">
        <Image src={src} alt={alt} caption={caption} />
      </div>
    </div>
  );
};
