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
} from "responsive-it-common";

storiesOf("01: Identity", module).add(
  "Colors",
  () => (
    <LayoutContainer padding>
      <Header>
        <Heading type={HeadingTypes.h1}>Colors</Heading>
      </Header>
      <Header withRuler rulerColor={color.darkest}>
        <Heading type={HeadingTypes.h3}>Background-Colors</Heading>
      </Header>

      <FlexBoxContainer
        flexDirection="row"
        justifyContent="flex-start"
        flexWrap="nowrap"
      >
        {/* left */}
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          justifyContent="flex-start"
        >
          <FlexBoxItem justifyContent="flex-start">
            <Text>Desc</Text>
          </FlexBoxItem>
        </FlexBoxContainer>

        {/* right */}
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          justifyContent="flex-start"
        >
          <FlexBoxItem alignItems="flex-start">
            <Text>Desc</Text>
          </FlexBoxItem>
        </FlexBoxContainer>
        {/* // */}
      </FlexBoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
