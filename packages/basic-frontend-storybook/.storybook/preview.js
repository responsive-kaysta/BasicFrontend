import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters, configure } from "@storybook/react";

require("./generated-tailwind.css");

export const parameters = {
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: false,
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
  isFullscreen: true,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
};

const withGlobalStyle = (storyFn) => <div className="m-0 p-0">{storyFn()}</div>;

addDecorator(withGlobalStyle);
addDecorator(withKnobs);

addDecorator(
  withInfo({
    inline: false,
    header: false,
    propTables: true,
  })
);

addParameters({
  options: {
    name: "Basic-Frontend Storybook",
    sortStoriesByKind: true,
  },
});
