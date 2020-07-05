import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters, configure } from "@storybook/react";

require("./generated-tailwind.css");

export const parameters = {
  options: {
    showRoots: true,
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: "^on.*" },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <div className="bg-gray-200 w-full h-full">
    <div>Styled Storybook Canvas with m-10 and bg-gray-200</div>
    <div className="m-10 h-full">{storyFn()}</div>
  </div>
);

addParameters({
  options: {
    name: "Basic-Frontend Storybook",
    sortStoriesByKind: true,
  },
});

addDecorator(
  withInfo({
    inline: false,
    header: false,
    propTables: true,
  })
);

addDecorator((story) => story());

addDecorator(withGlobalStyle);
