import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  FlexBoxContainer,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Text,
  TextTypes,
  typography,
  Box,
  color,
} from "responsive-it-common";

storiesOf("02: Typography", module).add(
  "Abstract",
  () => (
    <LayoutContainer padding>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Abstract</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="40%">
          <Text weight={typography.weight.bold}>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="60%">
          <Text weight={typography.weight.bold}>Swatches</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <FlexBoxContainer
        withMargin
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="40%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.emphasis}>Primary Font</Text>
          <Text type={TextTypes.italic}>typography.type.primary</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box>
            <Text>
              "Trebuchet MS", "Lucida Sans Unicode", Helvetica, Arial,
              sans-serif
            </Text>
          </Box>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <FlexBoxContainer
        withMargin
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="40%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.emphasis}>Code Font</Text>
          <Text type={TextTypes.italic}>typography.type.code</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box>
            <Text fontType={typography.type.code}>
              "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
              monospace
            </Text>
          </Box>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <Header withRuler rulerColor={color.darkest} withMargin>
        <Heading type={HeadingTypes.h3}>Status</Heading>
      </Header>

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="40%">
          <Text weight={typography.weight.bold}>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="60%">
          <Text weight={typography.weight.bold}>Swatches</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
