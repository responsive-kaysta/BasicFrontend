import {
  allPictogramNames,
  Pictogram,
  PictogramName,
  PictogramSize,
} from "basic-frontend-common";
import React from "react";

export default {
  title: "Design System / Identity / Pictograms",
  component: Pictogram,
};

export const defaultStory = () => (
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
);

defaultStory.storyName = "All Pictograms";
