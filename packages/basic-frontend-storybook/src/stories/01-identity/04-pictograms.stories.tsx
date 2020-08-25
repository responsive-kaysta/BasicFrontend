import { storiesOf } from "@storybook/react";
import {
  allPictogramNames,
  Pictogram,
  PictogramName,
  PictogramSize,
  TextLead,
} from "basic-frontend-common";
import React from "react";

const pictos = allPictogramNames.filter(
  (x) =>
    !x.includes("ai_") &&
    !x.includes("cloud_") &&
    !x.includes("robotics_") &&
    !x.includes("fd_")
);

const artificial_intelligence = allPictogramNames.filter((x) =>
  x.includes("ai_")
);

const cloud = allPictogramNames.filter((x) => x.includes("cloud_"));

const robotics = allPictogramNames.filter((x) => x.includes("robotics_"));

const file_and_document = allPictogramNames.filter((x) => x.includes("fd_"));

storiesOf("Design System / 01 Identity", module)
  .add("Pictograms", () => (
    <div>
      <TextLead>Simple Pictograms</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {pictos.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
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
  ))
  .add("Pictograms / Cloud", () => (
    <div>
      <TextLead>Cloud</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {cloud.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
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
  ))
  .add("Pictograms / AI", () => (
    <div>
      <TextLead>Artificial Intelligence</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {artificial_intelligence.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
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
  ))
  .add("Pictograms / Robotics", () => (
    <div>
      <TextLead>Robotics</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {robotics.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
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
  ))
  .add("Pictograms / File and Document", () => (
    <div>
      <TextLead>File and Document</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {file_and_document.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
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
