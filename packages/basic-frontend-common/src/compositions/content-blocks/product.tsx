import React, { FC } from "react";
import { TextRegular, TitleAbstract, Hruler } from "../../elements";
import { Image } from "../../elements/images";
import { ThemeType } from "../../identity";

export enum ImageOrientation {
  left,
  right,
}

type ProductProps = {
  title: string;
  content: string;
  src: string;
  alt: string;
  caption?: string;
  orientation?: ImageOrientation;
  theme?: ThemeType;
  elementId?: string;
};

export const Product: FC<ProductProps> = ({
  title,
  content,
  src,
  alt,
  caption,
  orientation = ImageOrientation.right,
  theme,
  elementId,
}) => {
  const contentBlock = (
    <>
      <TitleAbstract theme={theme}>{title}</TitleAbstract>
      <Hruler theme={theme} />
      <TextRegular theme={theme}>{content}</TextRegular>
    </>
  );

  const imageBlock = <Image src={src} alt={alt} caption={caption} />;

  return (
    <div className="flex flex-row" id={elementId}>
      <div className="w-2/4">
        {orientation === ImageOrientation.right ? contentBlock : imageBlock}
      </div>
      <div className="w-2/4 ml-4 md:ml-8">
        {orientation === ImageOrientation.right ? imageBlock : contentBlock}
      </div>
    </div>
  );
};
