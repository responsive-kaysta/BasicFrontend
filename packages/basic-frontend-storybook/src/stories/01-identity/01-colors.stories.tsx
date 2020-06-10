import { storiesOf } from "@storybook/react";
import * as React from "react";

import { color, LayoutContainer } from "responsive-it-common";

storiesOf("01: Basics / 01: Colors", module).add("color", () => (
  <LayoutContainer>
    <div id="theme.color.primary">theme.color.primary</div>
    <hr />
  </LayoutContainer>
));
