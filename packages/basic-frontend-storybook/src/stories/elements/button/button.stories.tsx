import { storiesOf } from "@storybook/react";
import * as React from "react";
import { LinkButton } from "responsive-it-common";

import "../../../../less/fontawesome-all.css";
import "../../../../less/styles.css";
import "../../../../less/custom.css";

storiesOf("01: Elements / 02: Button", module)
  .add("with text", () => <LinkButton text="some link button" />)
  .add("with some emoji", () => <LinkButton text="😀 😎 👍 💯" />);
