import React, { FC } from 'react';
import { Hruler, TextRegular, TitleAbstract } from '../../elements';
import { Image } from '../../elements/images';
import { ThemeType } from '../../typings';
import { Orientation } from '../../typings';

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

  const style = `${theme ? theme.body.backgroundColor : 'bg-gray-100'}`;

  const isImageIsLeft = orientation === Orientation.left;
  return (
    <div className={`flex flex-row items-center ${style}`} id={elementId}>
      <div className={`${isImageIsLeft ? 'w-2/5' : 'w-3/5'} mr-8`}>
        {isImageIsLeft ? imageBlock : contentBlock}
      </div>
      <div className={`${isImageIsLeft ? 'w-3/5' : 'w-2/5'} ml-8`}>
        {isImageIsLeft ? contentBlock : imageBlock}
      </div>
    </div>
  );
};
