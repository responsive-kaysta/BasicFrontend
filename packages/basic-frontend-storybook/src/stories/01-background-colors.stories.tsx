import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  background,
  Box,
  FlexBoxContainer,
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Text,
  TextTypes,
  typography,
} from "responsive-it-common";
import { BoxSizes } from "responsive-it-common/dist/compositions/box/box-sizes";

storiesOf("01: Identity", module).add(
  "Background-Colors",
  () => (
    <LayoutContainer withPageMargin>
      <Header withMargin withRuler>
        <Heading type={HeadingTypes.h1}>Background-Colors</Heading>
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
          <Text type={TextTypes.emphasis}>background.app</Text>
          <Text type={TextTypes.italic}>color: #F6F3FC</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.app}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.appInverse</Text>
          <Text type={TextTypes.italic}>color: #7A8997</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.appInverse}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.positive</Text>
          <Text type={TextTypes.italic}>color: #E1FFD4</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.positive}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.negative</Text>
          <Text type={TextTypes.italic}>color: #FEDED2</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.negative}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.warning</Text>
          <Text type={TextTypes.italic}>color: #FFF5CF</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.warning}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.white</Text>
          <Text type={TextTypes.italic}>color: white</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.white}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.transparent</Text>
          <Text type={TextTypes.italic}>color: transparent</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.transparent}
            size={BoxSizes.full}
            minHeight="35px"
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
          <Text type={TextTypes.emphasis}>background.whitesmoke</Text>
          <Text type={TextTypes.italic}>color: whitesmoke</Text>
        </FlexBoxContainer>
        <FlexBoxContainer
          flexDirection="column"
          width="60%"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box
            backgroundColor={background.whitesmoke}
            size={BoxSizes.full}
            minHeight="35px"
          />
        </FlexBoxContainer>
      </FlexBoxContainer>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
