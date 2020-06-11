import { storiesOf } from "@storybook/react";
import * as React from "react";

import { color, LayoutContainer, Button } from "responsive-it-common";
import { Appearance } from "responsive-it-common/dist/elements/button/appearance";

storiesOf("01: Basics / 01: Colors", module).add("color", () => (
  <LayoutContainer>
    <Button appearance={Appearance.PRIMARY}>Appearance.PRIMARY</Button>
    <hr />
    <Button appearance={Appearance.SECONDARY}>Appearance.SECONDARY</Button>
  </LayoutContainer>
));
