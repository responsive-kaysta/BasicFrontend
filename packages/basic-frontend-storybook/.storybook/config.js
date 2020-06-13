import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  options: {
    name: "Basic Frontend",
    sortStoriesByKind: true,
  },
});

addDecorator(
  withInfo({
    inline: true,
    header: false,
    propTables: false,
  })
);

addDecorator((story) => story());

addDecorator(withKnobs);

// reference implementation from https://github.com/storybooks/storybook/blob/next/examples/official-storybook/config.js
function importAll(context) {
  const storyStore = window.__STORYBOOK_CLIENT_API__._storyStore; // eslint-disable-line no-undef, no-underscore-dangle

  context.keys().forEach((filename) => {
    const fileExports = context(filename);

    // A old-style story file
    if (!fileExports.default) {
      return;
    }

    const { default: component, ...examples } = fileExports;
    let componentOptions = component;
    if (component.prototype && component.prototype.isReactComponent) {
      componentOptions = { component };
    }
    const kindName =
      componentOptions.title || componentOptions.component.displayName;

    if (previousExports[filename]) {
      if (previousExports[filename] === fileExports) {
        return;
      }

      // Otherwise clear this kind
      storyStore.removeStoryKind(kindName);
      storyStore.incrementRevision();
    }

    // We pass true here to avoid the warning about HMR. It's cool clientApi, we got this
    const kind = storiesOf(kindName, true);

    (componentOptions.decorators || []).forEach((decorator) => {
      kind.addDecorator(decorator);
    });
    if (componentOptions.parameters) {
      kind.addParameters(componentOptions.parameters);
    }

    Object.keys(examples).forEach((key) => {
      const example = examples[key];
      const { title = key, parameters } = example;
      kind.add(title, example, parameters);
    });

    previousExports[filename] = fileExports;
  });
}

function loadStories() {
  let req;

  req = require.context("../src/stories", true, /\.stories\.ts(x)?$/);
  importAll(req);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

// import { configure } from "@storybook/react";
// const req = require.context("../src/stories", true, /.stories.tsx$/);

// export const parameters = {
//   options: {
//     showRoots: true,
//   },
//   // automatically create action args for all props that start with "on"
//   actions: { argTypesRegex: "^on.*" },
//   dependencies: {
//     // display only dependencies/dependents that have a story in storybook
//     // by default this is false
//     withStoriesOnly: true,

//     // completely hide a dependency/dependents block if it has no elements
//     // by default this is false
//     hideEmpty: true,
//   },
// };

// function loadStories() {
//   req.keys().forEach(req);
// }

// configure(loadStories, module);
