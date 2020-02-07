import * as React from "react";
import { ePageStyleTemplates } from "../../page-types/";
import { ePictogram } from "../../page-types/";
import { FC } from "react";

interface iTileItemProps {
  item: number;
  date: string;
  header: string;
  paragraph: string;
  link: string;
  pageStyle?: ePageStyleTemplates;
  backgroundImage: ePictogram;
}

export const TileItem: FC<iTileItemProps> = ({
  item,
  date,
  header,
  paragraph,
  link,
  pageStyle,
  backgroundImage
}) => {
  const cssStyle = pageStyle ? pageStyle : "light";
  const cssClass = `${cssStyle} box-equal box-round-corner`;
  const itemClass = `item-${item}`;
  const bgImg = backgroundImage ? backgroundImage : "";

  const styles = {
    backgroundSize: "50%",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 100%), url(" +
      bgImg +
      ")"
  };

  return (
    <div className={itemClass}>
      <div className={cssClass} style={styles}>
        <a href={link}>
          <div className="date">{date}</div>
          <h3>{header}</h3>
          <div className="paragraph">
            <p>{paragraph}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
