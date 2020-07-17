import { storiesOf } from "@storybook/react";
import { allIconNames, Icon, IconName, IconSize } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 01 Identity", module).add("Icons", () => (
  <div>
    <ul className="flex flex-row flex-wrap">
      {allIconNames.map((key) => (
        <li key={key} className="flex flex-col items-center mb-8 mr-8">
          <Icon
            name={key as IconName}
            aria-label={key}
            size={IconSize.sm}
            className=""
          />
          <div className="mt-2">{key}</div>
        </li>
      ))}
    </ul>
  </div>
));
