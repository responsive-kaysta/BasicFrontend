import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("00: Application", module).add(
  "Intro",
  () => (
    <LayoutContainer withPageMargin>
      <Header withMargin>
        <Heading type={HeadingTypes.h1}>Basic Frontend</Heading>
      </Header>
      <Header withRuler rulerColor={color.darkest} withMargin>
        <Heading type={HeadingTypes.h2}>Intro</Heading>
      </Header>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
