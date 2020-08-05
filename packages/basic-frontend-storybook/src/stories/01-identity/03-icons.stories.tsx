import { storiesOf } from "@storybook/react";
import {
  allIconNames,
  Icon,
  IconName,
  IconSize,
  TextLead,
} from "basic-frontend-common";
import React from "react";

const arrows = allIconNames.filter(
  (x) => x.includes("arrow") || x.includes("chevron")
);
const currencies = allIconNames.filter((x) => x.includes("currency"));
const logos = allIconNames.filter((x) => x.includes("logo"));

storiesOf("Design System / 01 Identity", module)
  .add("Icons", () => (
    <div>
      <TextLead>All Icons</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {allIconNames.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
          >
            <Icon name={key as IconName} aria-label={key} size={IconSize.sm} />
            <div className="mt-2">{key}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add("Icons / Arrows", () => (
    <div>
      <TextLead>Arrows</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {arrows.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
          >
            <Icon name={key as IconName} aria-label={key} size={IconSize.sm} />
            <div className="mt-2">{key}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add("Icons / Currencies", () => (
    <div>
      <TextLead>Currencies</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {currencies.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
          >
            <Icon name={key as IconName} aria-label={key} size={IconSize.sm} />
            <div className="mt-2">{key}</div>
          </li>
        ))}
      </ul>
    </div>
  ))
  .add("Icons / Logos", () => (
    <div>
      <TextLead>Logos</TextLead>
      <ul className="flex flex-row flex-wrap mt-8">
        {logos.map((key) => (
          <li
            key={key}
            className="flex flex-col items-center mb-8 mr-8 text-gray-700"
          >
            <Icon name={key as IconName} aria-label={key} size={IconSize.sm} />
            <div className="mt-2">{key}</div>
          </li>
        ))}
      </ul>
    </div>
  ));
