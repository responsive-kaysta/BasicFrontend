import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Link } from "responsive-it-common";

import "../../../../less/fontawesome-all.css";
import "../../../../less/styles.css";
import "../../../../less/custom.css";

storiesOf("01: Elements / 02: Link", module)
  .add("with text", () => <Link text="some link button" link="#" />)
  .add("with some emoji", () => <Link text="😀 😎 👍 💯" link="#" />);
