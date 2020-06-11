import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  color,
  LayoutContainer,
  Button,
  Heading,
  HeadingTypes,
  Hr,
} from "responsive-it-common";
import { Appearance } from "responsive-it-common/dist/elements/button/appearance";

storiesOf("01: Basics / 01: Colors", module).add("color", () => (
  <LayoutContainer>
    <Heading type={HeadingTypes.H2}>Some Heading</Heading>
    <Hr />
    <Button appearance={Appearance.SECONDARY}>Appearance.SECONDARY</Button>
  </LayoutContainer>
));
