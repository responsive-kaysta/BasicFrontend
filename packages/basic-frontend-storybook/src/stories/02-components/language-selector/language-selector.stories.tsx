import { storiesOf } from "@storybook/react";
import * as React from "react";
import { LanguageSelector } from "responsive-it-common";

import "../../../../less/fontawesome-all.css";
import "../../../../less/styles.css";
import "../../../../less/custom.css";

storiesOf(
  "02: Components / 01: Language Selector",
  module
).add("Language Selector", () => <LanguageSelector onChange={() => null} />);
