import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Heading,
  HeadingTypes,
  Hr,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("01: Identity", module).add("Pictograms", () => (
  <LayoutContainer>
    <Heading type={HeadingTypes.h2}>Some Heading</Heading>
    <Hr />
  </LayoutContainer>
));
