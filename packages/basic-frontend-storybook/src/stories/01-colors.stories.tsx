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
  TextTypes,
} from "responsive-it-common";
import { BoxSizes } from "responsive-it-common/dist/compositions/box/box-sizes";

storiesOf("01: Identity", module).add(
  "Colors",
  () => (
    <LayoutContainer padding>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Colors</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="40%">
          <Text bold>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="60%">
          <Text bold>Swatches</Text>
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
          <Text type={TextTypes.emphasis}>color.primary</Text>
          <Text type={TextTypes.italic}>color: #FF4785</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.primary} size={BoxSizes.full} />
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
          <Text type={TextTypes.emphasis}>color.secondary</Text>
          <Text type={TextTypes.italic}>color: #1EA7FD</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.secondary} size={BoxSizes.full} />
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
          <Text type={TextTypes.emphasis}>color.tertiary</Text>
          <Text type={TextTypes.italic}>color: #DDDDDD</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.tertiary} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <Header withRuler rulerColor={color.darkest} withMargin>
        <Heading type={HeadingTypes.h3}>States</Heading>
      </Header>

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="40%">
          <Text bold>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="60%">
          <Text bold>Swatches</Text>
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
          <Text type={TextTypes.emphasis}>color.positive</Text>
          <Text type={TextTypes.italic}>color: #66BF3C</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.positive} size={BoxSizes.full} />
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
          <Text type={TextTypes.emphasis}>color.negative</Text>
          <Text type={TextTypes.italic}>color: #FF4400</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.negative} size={BoxSizes.full} />
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
          <Text type={TextTypes.emphasis}>color.warning</Text>
          <Text type={TextTypes.italic}>color: #E69D00</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={color.warning} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <Header withRuler rulerColor={color.darkest} withMargin>
        <Heading type={HeadingTypes.h3}>Regular</Heading>
      </Header>

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="40%">
          <Text bold>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="60%">
          <Text bold>Swatches</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
