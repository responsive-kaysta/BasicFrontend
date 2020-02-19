import * as React from "react";
import { FC } from "react";

interface FeaturesCompositionProps {
  text: string;
}

export const FeaturesComposition: FC<FeaturesCompositionProps> = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>
      <ul className="features">
        <li>
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 2</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 3</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 4</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 5</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 6</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
        <li>
          <h3>Feature 7</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        </li>
      </ul>
    </>
  );
};
