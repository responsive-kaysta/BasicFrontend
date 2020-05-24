import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Link } from "responsive-it-common";

import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";
import "../../../../public/less/custom.css";

storiesOf("04: Elements / 02: Link", module)
  .add("with text", () => <Link text="some link button" link="#" />)
  .add("with some emoji", () => <Link text="😀 😎 👍 💯" link="#" />);
