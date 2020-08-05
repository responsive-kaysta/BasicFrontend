import React, { FC, useState, useEffect } from "react";
import { TextRegular, TitleSub } from "../../elements";
import { Pictogram, PictogramName, PictogramSize } from "../../identity";
import { Orientation, ThemeType } from "../../typings";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pictogramResponsiveSize =
    windowWidth >= 650 ? pictogramSize : PictogramSize.lg;
  const showRegularText = windowWidth >= 650 ? true : false;
  const titleText = showRegularText ? "" : content;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const contentBlock = (
    <div
      title={titleText}
      className={`flex flex-col w-full m-2 md:m-4 ${
        orientation === Orientation.left ? "ml-2 md:ml-4" : "mr-2 md:mr-4"
      }`}
    >
      <TitleSub theme={theme}>{title}</TitleSub>
      {showRegularText && <TextRegular theme={theme}>{content}</TextRegular>}
    </div>
  );

  const pictogramBlock = (
    <div
      className={`m-2 md:m-4 ${theme ? theme.body.textColor : "text-gray-800"}`}
    >
      <Pictogram name={pictogram} size={pictogramResponsiveSize} />
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
