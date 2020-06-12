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
} from "responsive-it-common";

storiesOf("01: Identity", module).add(
  "Colors",
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
        justifyContent="flex-start"
        flexWrap="nowrap"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          justifyContent="flex-start"
        >
          <FlexBoxItem justifyContent="flex-start">
            <Text bold>Name</Text>
          </FlexBoxItem>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          justifyContent="flex-start"
        >
          <FlexBoxItem alignItems="flex-start">
            <Text bold>Swatches</Text>
          </FlexBoxItem>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          justifyContent="flex-start"
        >
          <FlexBoxItem justifyContent="flex-start">
            <Text bold>app</Text>
          </FlexBoxItem>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          justifyContent="flex-start"
        >
          <FlexBoxItem alignItems="flex-start">
            <Box />
          </FlexBoxItem>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
