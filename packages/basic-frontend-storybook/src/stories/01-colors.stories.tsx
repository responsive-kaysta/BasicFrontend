import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Heading, Hr, LayoutContainer } from "responsive-it-common";

storiesOf("01: Identity", module).add("Colors", () => (
  <LayoutContainer>
    <Heading>Colors</Heading>
    <Hr />
  </LayoutContainer>
));
