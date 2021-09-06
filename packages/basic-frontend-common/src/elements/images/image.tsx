import React, { FC } from 'react';
import { Caption } from '../typography/caption';
import { ThemeType } from '../../typings';

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  theme?: ThemeType;
};

export const Image: FC<ImageProps> = ({ src, alt, caption, theme }) => {
  return (
    <figure
      className={`flex flex-col w-full ${
        theme ? theme.body.backgroundColor : 'bg-gray-100'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-md md:rounded-lg mb-4 md:mb-6"
      />
      {caption && <Caption theme={theme}>{caption}</Caption>}
    </figure>
  );
};
