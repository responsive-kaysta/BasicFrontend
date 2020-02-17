import * as React from "react";
import { FC } from "react";

interface BoxPanelCompositionProps {
  text: string;
}

export const BoxPanelComposition: FC<BoxPanelCompositionProps> = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>

      <div className="flex-box">
        <div className="box-three-in-row">
          Regular Box-Equal Four in a Row [div.flex-box -> div.box-four-in-row]
        </div>
        <div className="box-three-in-row">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </div>
        <div className="box-three-in-row">
          At vero eos et accusam et justo duo dolores et ea rebum.
        </div>
      </div>
    </>
  );
};
