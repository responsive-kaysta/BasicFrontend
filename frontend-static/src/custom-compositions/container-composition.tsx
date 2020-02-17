import * as React from "react";
import { FC } from "react";
import { Spacer } from "../elements/";

interface ContainerCompositionProps {
  text: string;
}

export const ContainerComposition: FC<ContainerCompositionProps> = ({
  text
}) => {
  return (
    <>
      <h2>{text}</h2>
      <p className="lead">Leadtext</p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <Spacer />
      <ul className="icons">
        <li className="fas fa-ambulance"></li>
        <li className="fas fa-anchor"></li>
        <li className="fas fa-asterisk"></li>
        <li className="fas fa-archway"></li>
      </ul>
    </>
  );
};
