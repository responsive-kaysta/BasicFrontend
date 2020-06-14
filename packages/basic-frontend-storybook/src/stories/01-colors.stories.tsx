import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Box,
  BoxSizes,
  color,
  FlexBoxContainer,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Section,
  Square,
  Text,
  TextTypes,
} from "responsive-it-common";
import { SwatchesHeader } from "./swatches-header";

storiesOf("01: Identity", module).add(
  "Colors",
  () => (
    <LayoutContainer withPageMargin>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Color Palette</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}

      <Section withMargin>
        <SwatchesHeader />

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
            <Box
              backgroundColor={color.primary}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Box
              backgroundColor={color.secondary}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Box
              backgroundColor={color.tertiary}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
          </FlexBoxContainer>
        </FlexBoxContainer>
      </Section>
      {/* ------------------------------------------------------------ */}

      <Section withMargin>
        <Header withRuler rulerColor={color.darkest} withMargin>
          <Heading type={HeadingTypes.h3}>Status</Heading>
        </Header>

        <SwatchesHeader />

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
            <Box
              backgroundColor={color.positive}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Box
              backgroundColor={color.negative}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Box
              backgroundColor={color.warning}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
          </FlexBoxContainer>
        </FlexBoxContainer>
      </Section>

      {/* ------------------------------------------------------------ */}

      <Section withMargin>
        <Header withRuler rulerColor={color.darkest} withMargin>
          <Heading type={HeadingTypes.h3}>Monochrome</Heading>
        </Header>

        <FlexBoxContainer
          flexDirection="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="center"
          flexGrow={1}
        >
          <Square
            backgroundColor={color.lightest}
            captionText="lightest"
            size="120px"
          />
          <Square
            backgroundColor={color.lighter}
            captionText="lighter"
            size="120px"
          />
          <Square
            backgroundColor={color.light}
            captionText="light"
            size="120px"
          />
          <Square
            backgroundColor={color.mediumlight}
            captionText="mediumlight"
            size="120px"
          />
          <Square
            backgroundColor={color.medium}
            captionText="medium"
            size="120px"
          />
          <Square
            backgroundColor={color.mediumdark}
            captionText="mediumdark"
            size="120px"
          />
          <Square
            backgroundColor={color.dark}
            captionText="dark"
            size="120px"
          />
          <Square
            backgroundColor={color.darker}
            captionText="darker"
            size="120px"
          />
          <Square
            backgroundColor={color.darkest}
            captionText="darkest"
            size="120px"
          />
        </FlexBoxContainer>
      </Section>

      {/* ------------------------------------------------------------ */}

      <Section withMargin>
        <Header withRuler rulerColor={color.darkest} withMargin>
          <Heading type={HeadingTypes.h3}>Palette</Heading>
        </Header>

        <SwatchesHeader />

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
            <Text type={TextTypes.emphasis}>color.border</Text>
            <Text type={TextTypes.italic}>color: rgba(0,0,0,.1)</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.border}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.orange</Text>
            <Text type={TextTypes.italic}>color: #FC521F</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.orange}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.gold</Text>
            <Text type={TextTypes.italic}>color: #FFAE00</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.gold}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.green</Text>
            <Text type={TextTypes.italic}>color: #66BF3C</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.green}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.seafoam</Text>
            <Text type={TextTypes.italic}>color: #37D5D3</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.seafoam}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.purple</Text>
            <Text type={TextTypes.italic}>color: #6F2CAC</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.purple}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.ultraviolet</Text>
            <Text type={TextTypes.italic}>color: #2A0481</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.ultraviolet}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.darkgreen</Text>
            <Text type={TextTypes.italic}>color: #1A867D</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.darkgreen}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
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
            <Text type={TextTypes.emphasis}>color.darkgray</Text>
            <Text type={TextTypes.italic}>color: darkgray</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box
              backgroundColor={color.darkgray}
              size={BoxSizes.full}
              minHeight="35px"
              withMargin
            />
          </FlexBoxContainer>
        </FlexBoxContainer>
      </Section>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
