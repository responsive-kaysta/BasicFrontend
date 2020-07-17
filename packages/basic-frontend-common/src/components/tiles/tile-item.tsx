import React, { FC } from "react";
import { ThemeType } from "../../identity";
import { TitleSub, TextRegular } from "../../elements";

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
  const style = `table-cell p-2 md:p-4 lg:p-6 mr-2 mb-2 md:mr-4 md:mb-4 lg:mr-6 lg:mb-6 rounded-lg border-2 shadow-md hover:shadow-lg ${
    theme ? theme.body.backgroundColor : "bg-gray-50"
  } ${theme ? theme.body.textColor : "text-gray-800"} ${
    theme ? theme.body.borderColor : "border-gray-400"
  }`;

  return (
    <a
      href={link}
      className={style}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row justify-between">
        <TitleSub>{headline}</TitleSub>
        <span>{date}</span>
      </div>
      <TextRegular>{description}</TextRegular>
    </a>
  );
};
