import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Box,
  color,
  FlexBoxContainer,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Text,
  TextTypes,
  typography,
  BoxSizes,
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
          <Text type={TextTypes.emphasis}>Typography</Text>
          <Text type={TextTypes.italic}>type.primary</Text>
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
          <Text type={TextTypes.emphasis}>Typography</Text>
          <Text type={TextTypes.italic}>type.code</Text>
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
        <Heading type={HeadingTypes.h3}>Text Sizes</Heading>
      </Header>

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
          <Text type={TextTypes.emphasis}>Typography</Text>
          <Text type={TextTypes.italic}>size</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.s1}>
              size.s1 {typography.size.s1}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.s2}>
              size.s2 {typography.size.s2}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.s3}>
              size.s3 {typography.size.s3}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.m1}>
              size.m1 {typography.size.m1}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.m2}>
              size.m2 {typography.size.m2}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.m3}>
              size.m3 {typography.size.m3}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.l1}>
              size.l1 {typography.size.l1}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.l2}>
              size.l2 {typography.size.l2}
            </Text>
          </Box>
          <Box size={BoxSizes.full}>
            <Text fontSize={typography.size.l3}>
              size.l3 {typography.size.l3}
            </Text>
          </Box>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
