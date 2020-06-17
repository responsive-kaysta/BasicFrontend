import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Heading, HeadingTypes } from "responsive-it-common";

storiesOf("00: Intro", module).add(
  "Abstract",
  () => <Heading type={HeadingTypes.title}>Title Heading Type</Heading>,
  {
    info: { source: false, inline: false },
  }
);
