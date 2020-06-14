import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  background,
  Box,
  BoxContainer,
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
} from "responsive-it-common";
import { BoxSizes } from "responsive-it-common/dist/compositions/box/box-sizes";

storiesOf("03: Compositions", module).add("Flex-Box", () => (
  <LayoutContainer withPageMargin>
    <Header withRuler={true} rulerColor={color.darkest}>
      <Heading type={HeadingTypes.h1}>Colors</Heading>
    </Header>

    <BoxContainer>
      <Box size={BoxSizes.half} backgroundColor={background.app}>
        Box 1 half
      </Box>
      <Box size={BoxSizes.half}>Box 2 half</Box>

      <Box size={BoxSizes.third}>Box 3 third</Box>
      <Box size={BoxSizes.third}>Box 4 third</Box>
      <Box size={BoxSizes.third}>Box 5 third</Box>
    </BoxContainer>
  </LayoutContainer>
));
