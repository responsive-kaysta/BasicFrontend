import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
  Pictograms,
  Pictogram,
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
    width: 80px;
    height: 80px;
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
  "Pictograms",
  () => (
    <LayoutContainer padding>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Pictograms</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}

      <List>
        {Object.keys(Pictograms).map((key) => (
          <Item key={key}>
            <Pictogram pictogram={key} key={key} aria-hidden />
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
