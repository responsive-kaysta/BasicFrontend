import { storiesOf } from "@storybook/react";
import {
  allPictogramNames,
  Pictogram,
  PictogramName,
  PictogramSize,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 01 Identity", module).add("Pictograms", () => (
  <div>
    <ul className="flex flex-row flex-wrap">
      {allPictogramNames.map((key) => (
        <li
          key={key}
          className="flex flex-col items-center mb-8 mr-8 text-gray-900"
        >
          <Pictogram
            name={key as PictogramName}
            aria-label={key}
            size={PictogramSize.sm}
          />
          <div className="mt-2">{key}</div>
        </li>
      ))}
    </ul>
  </div>
));
