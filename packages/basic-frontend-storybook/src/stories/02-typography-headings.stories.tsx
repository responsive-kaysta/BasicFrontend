import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  color,
  FlexBoxContainer,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Section,
  SubHeading,
  SubheadingTypes,
  Text,
  TextTypes,
  typography,
} from "responsive-it-common";
import { SwatchesHeader } from "./swatches-header";

storiesOf("02: Typography", module).add(
  "Headings",
  () => (
    <LayoutContainer withPageMargin>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Headings</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h1</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h1}>Lorem ipsum dolor sit amet</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h2</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h2}>Lorem ipsum dolor sit amet</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h3</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h3}>Lorem ipsum dolor sit amet</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h4</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h4}>Lorem ipsum dolor sit amet</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h5</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h5}>Lorem ipsum dolor sit amet</Heading>
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
            <Text type={TextTypes.emphasis}>HeadingTypes.h6</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading type={HeadingTypes.h6}>Lorem ipsum dolor sit amet</Heading>
          </FlexBoxContainer>
        </FlexBoxContainer>
      </Section>
      {/* ------------------------------------------------------------ */}
      <Section withMargin>
        <Header withRuler rulerColor={color.darkest} withMargin>
          <Heading type={HeadingTypes.h3}>Sub-Headings</Heading>
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
            <Text type={TextTypes.emphasis}>SubheadingTypes.abstract</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <SubHeading type={SubheadingTypes.abstract}>
              Lorem ipsum dolor sit amet
            </SubHeading>
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
            <Text type={TextTypes.emphasis}>SubheadingTypes.headline</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <SubHeading type={SubheadingTypes.headline}>
              Lorem ipsum dolor sit amet
            </SubHeading>
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
            <Text type={TextTypes.emphasis}>SubheadingTypes.lead</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <SubHeading type={SubheadingTypes.lead}>
              Lorem ipsum dolor sit amet
            </SubHeading>
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
            <Text type={TextTypes.emphasis}>SubheadingTypes.tagline</Text>
          </FlexBoxContainer>
          <FlexBoxContainer
            flexDirection="column"
            width="60%"
            alignItems="flex-start"
            justifyContent="center"
          >
            <SubHeading type={SubheadingTypes.tagline}>
              Lorem ipsum dolor sit amet
            </SubHeading>
          </FlexBoxContainer>
        </FlexBoxContainer>
      </Section>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
