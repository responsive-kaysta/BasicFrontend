import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  background,
  Box,
  BoxContainer,
  BoxSizes,
  color,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("03: Compositions", module).add(
  "Box",
  () => (
    <LayoutContainer withPageMargin>
      <Header withRuler={true} rulerColor={color.darkest}>
        <Heading type={HeadingTypes.h1}>Colors</Heading>
      </Header>

      <BoxContainer>
        <Box
          size={BoxSizes.half}
          backgroundColor={background.app}
          withMargin
          withShadow
        >
          BoxSizes.half, background.app, withMargin, withShadow
        </Box>
        <Box size={BoxSizes.half} withMargin>
          BoxSizes.half, withMargin
        </Box>

        <Box size={BoxSizes.third} withMargin>
          BoxSizes.third, withMargin
        </Box>
        <Box size={BoxSizes.third} withMargin>
          Box 4 third
        </Box>
        <Box size={BoxSizes.third} withMargin>
          Box 5 third
        </Box>
      </BoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
