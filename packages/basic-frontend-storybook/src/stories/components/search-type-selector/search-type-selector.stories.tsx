import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SearchTypeSelector } from "responsive-it-common";

import "../../../../less/fontawesome-all.css";
import "../../../../less/styles.css";
import "../../../../less/custom.css";

storiesOf(
  "03: Components / 04: Search Type Selector",
  module
).add("Search Type Selector", () => (
  <SearchTypeSelector onChange={() => null} />
));
