import React, { FC } from 'react';
import { ThemeType } from '../../typings';
import { TitleSub, TextRegular, Comment } from '../../elements';

type TileElementProps = {
  headline: string;
  description: string;
  date: string;
  link: string;
  bgImage?: string;
  theme?: ThemeType;
};

export const TileItem: FC<TileElementProps> = ({
  headline,
  description,
  date,
  link,
  bgImage,
  theme,
}) => {
  const style = `table-cell rounded-lg border-2 shadow-md hover:shadow-lg ${
    theme ? theme.body.backgroundColor : 'bg-gray-100'
  } ${theme ? theme.body.textColor : 'text-gray-800'} ${
    theme ? theme.body.borderColor : 'border-gray-400'
  } p-4 mb-8 ml-4 mr-4`;

  return (
    <a
      href={link}
      className={style}
      style={{
        backgroundImage: `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${bgImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-row justify-between">
        <TitleSub theme={theme}>{headline}</TitleSub>
        <Comment theme={theme}>{date}</Comment>
      </div>
      <TextRegular theme={theme}>{description}</TextRegular>
    </a>
  );
};
