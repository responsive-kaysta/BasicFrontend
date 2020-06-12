import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  FlexBoxContainer,
  FlexBoxItem,
  Text,
  Box,
  background,
} from "responsive-it-common";
import { BoxSizes } from "responsive-it-common/dist/compositions/box/box-sizes";

storiesOf("00: Application", module).add(
  "Intro",
  () => (
    <LayoutContainer padding>
      <Header withMargin>
        <Heading type={HeadingTypes.h1}>Colors</Heading>
      </Header>
      <Header withRuler rulerColor={color.darkest} withMargin smallMargin>
        <Heading type={HeadingTypes.h3}>Background-Colors</Heading>
      </Header>

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        withMargin
        smallMargin
      >
        <FlexBoxContainer flexDirection="column" width="30%">
          <Text bold>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="70%">
          <Text bold>Swatches</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
