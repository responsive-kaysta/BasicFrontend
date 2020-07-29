import React, { FC } from "react";
import { TextRegular, TitleAbstract, Hruler } from "../../elements";
import { Image } from "../../elements/images";
import { ThemeType } from "../../identity";
import { Orientation } from "../../typings";

type ProductProps = {
  title: string;
  content: string;
  src: string;
  alt: string;
  caption?: string;
  orientation?: Orientation;
  theme?: ThemeType;
  elementId?: string;
};

export const Product: FC<ProductProps> = ({
  title,
  content,
  src,
  alt,
  caption,
  orientation = Orientation.right,
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

  const style = `${theme ? theme.body.backgroundColor : "bg-gray-100"}`;
  return (
    <div className={`flex flex-row ${style}`} id={elementId}>
      <div className="w-2/4">
        {orientation === Orientation.right ? contentBlock : imageBlock}
      </div>
      <div className="w-2/4 ml-4 md:ml-8">
        {orientation === Orientation.right ? imageBlock : contentBlock}
      </div>
    </div>
  );
};
