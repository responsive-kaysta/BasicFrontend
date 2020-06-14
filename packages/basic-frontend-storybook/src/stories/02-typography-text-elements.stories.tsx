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
} from "responsive-it-common";

storiesOf("02: Typography", module).add(
  "Text Elements",
  () => (
    <LayoutContainer withPageMargin>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Text-Elements</Heading>
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
          <Text type={TextTypes.emphasis}>TextTypes.blockquote</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.blockquote}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.caption</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.caption}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.emphasis</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.emphasis}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.italic</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.italic}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.label</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.label}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.paragraph</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.paragraph}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.pre</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.pre}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.span</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.span}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.sub</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.sub}>Lorem ipsum dolor sit amet</Text>
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
          <Text type={TextTypes.emphasis}>TextTypes.sup</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text type={TextTypes.sup}>Lorem ipsum dolor sit amet</Text>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
