import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("01: Identity", module).add("Colors", () => (
  <LayoutContainer padding={true}>
    <Header withRuler={true} rulerColor={color.darkest}>
      <Heading type={HeadingTypes.h1}>Colors</Heading>
    </Header>
  </LayoutContainer>
));
