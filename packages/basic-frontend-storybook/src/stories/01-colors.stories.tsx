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

storiesOf("01: Identity", module).add(
  "Colors",
  () => (
    <LayoutContainer padding>
      <Header withMargin>
        <Heading type={HeadingTypes.h1}>Colors</Heading>
      </Header>
      <Header withRuler rulerColor={color.darkest} withMargin>
        <Heading type={HeadingTypes.h3}>Background-Colors</Heading>
      </Header>

      <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
        <FlexBoxContainer flexDirection="column" width="30%">
          <Text bold>Name</Text>
        </FlexBoxContainer>
        <FlexBoxContainer flexDirection="column" width="70%">
          <Text bold>Swatches</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>app</Text>
          <Text>background.app</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.app} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>appInverse</Text>
          <Text>background.appInverse</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.appInverse} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>negative</Text>
          <Text>background.negative</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.negative} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>positive</Text>
          <Text>background.positive</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.positive} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>transparent</Text>
          <Text>background.transparent</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.transparent} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>warning</Text>
          <Text>background.warning</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.warning} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>white</Text>
          <Text>background.white</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.white} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}

      <FlexBoxContainer
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        <FlexBoxContainer
          flexDirection="column"
          width="30%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text>whitesmoke</Text>
          <Text>background.whitesmoke</Text>
          <Text>color</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="70%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box backgroundColor={background.whitesmoke} size={BoxSizes.full} />
        </FlexBoxContainer>
      </FlexBoxContainer>

      {/* ------------------------------------------------------------ */}
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
