import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  BoxContainer,
  Box,
} from "responsive-it-common";
import { BoxSizes } from "responsive-it-common/dist/compositions/box/box-sizes";

storiesOf("01: Identity", module).add("Colors", () => (
  <LayoutContainer padding={true}>
    <Header withRuler={true} rulerColor={color.darkest}>
      <Heading type={HeadingTypes.h1}>Colors</Heading>
    </Header>
    <BoxContainer>
      <Box size={BoxSizes.half}>Box 1 half</Box>
      <Box size={BoxSizes.half}>Box 2 half</Box>

      <Box size={BoxSizes.third}>Box 3 third</Box>
      <Box size={BoxSizes.third}>Box 4 third</Box>
      <Box size={BoxSizes.third}>Box 5 third</Box>
    </BoxContainer>
  </LayoutContainer>
));
