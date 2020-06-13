import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Header,
  Heading,
  HeadingTypes,
  Icon,
  icons,
  LayoutContainer,
} from "responsive-it-common";
import styled from "styled-components";

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

storiesOf("01: Identity", module).add(
  "Icons",
  () => (
    <LayoutContainer padding>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Icons</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}

      <List>
        {Object.keys(icons).map((key) => (
          <Item key={key}>
            <Icon icon={key} aria-hidden />
            <Meta>{key}</Meta>
          </Item>
        ))}
      </List>
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
