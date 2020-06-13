import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  Header,
  Heading,
  HeadingTypes,
  LayoutContainer,
} from "responsive-it-common";

storiesOf("01: Identity", module).add(
  "Pictograms",
  () => (
    <LayoutContainer padding>
      <Header withRuler withMargin>
        <Heading type={HeadingTypes.h1}>Icons</Heading>
      </Header>

      {/* ------------------------------------------------------------ */}
    </LayoutContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
