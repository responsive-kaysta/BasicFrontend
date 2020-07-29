import React, { FC } from "react";
import { TextRegular, TitleSub } from "../../elements";
import {
  Pictogram,
  PictogramName,
  PictogramSize,
  ThemeType,
} from "../../identity";
import { Orientation } from "../../typings";

export enum PictogramOrientation {
  left,
  right,
}

type SpotlightProps = {
  title: string;
  content: string;
  pictogram: PictogramName;
  pictogramSize?: PictogramSize;
  orientation?: Orientation;
  theme?: ThemeType;
  elementId?: string;
};

export const Spotlight: FC<SpotlightProps> = ({
  title,
  content,
  pictogram,
  pictogramSize = PictogramSize.md,
  orientation = Orientation.left,
  theme,
  elementId,
}) => {
  const contentBlock = (
    <div
      className={`flex flex-col w-full m-2 md:m-4 ${
        orientation === Orientation.left ? "ml-2 md:ml-4" : "mr-2 md:mr-4"
      }`}
    >
      <TitleSub theme={theme}>{title}</TitleSub>
      <TextRegular theme={theme}>{content}</TextRegular>
    </div>
  );

  const pictogramBlock = (
    <div
      className={`m-2 md:m-4 ${theme ? theme.body.textColor : "text-gray-800"}`}
    >
      <Pictogram name={pictogram} size={pictogramSize} />
    </div>
  );

  const style = `flex flex-row items-center w-full ${
    theme ? theme.body.backgroundColor : "bg-gray-100"
  }`;
  return (
    <>
      {orientation === Orientation.left ? (
        <div className={style} id={elementId}>
          {pictogramBlock}
          {contentBlock}
        </div>
      ) : (
        <div className={style} id={elementId}>
          {contentBlock}
          {pictogramBlock}
        </div>
      )}
    </>
  );
};
