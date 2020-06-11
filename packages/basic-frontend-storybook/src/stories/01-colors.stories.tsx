import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  background,
  Box,
  BoxContainer,
  Heading,
  Hr,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("01: Identity", module).add("Colors", () => (
  <LayoutContainer padding={true} backgoundColor={background.warning}>
    <Heading>Colors width padding</Heading>
    <Hr />
    <BoxContainer>
      <Box>Box Content 1</Box>
      <Box>Box Content 2</Box>
      <Box>Box Content 3</Box>
      <Box>Box Content 4</Box>
      <Box>Box Content 5</Box>
    </BoxContainer>
  </LayoutContainer>
));
