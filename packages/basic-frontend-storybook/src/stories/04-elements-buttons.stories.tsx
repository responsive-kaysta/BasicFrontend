import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Heading,
  HeadingTypes,
  Hr,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("02: Elements", module).add("Buttons", () => (
  <LayoutContainer withPageMargin>
    <Heading type={HeadingTypes.h2}>Some Heading</Heading>
    <Hr />
  </LayoutContainer>
));
