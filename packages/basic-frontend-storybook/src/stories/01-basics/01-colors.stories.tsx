import { storiesOf } from "@storybook/react";
import * as React from "react";
import { LinkButton } from "responsive-it-common";
import "../../../public/less/custom.css";
import "../../../public/less/fontawesome-all.css";
import "../../../public/less/styles.css";

storiesOf("01: Basics / 01: Colors", module)
  .add("with text", () => <LinkButton text="some link button" />)
  .add("with some emoji", () => <LinkButton text="😀 😎 👍 💯" />);
