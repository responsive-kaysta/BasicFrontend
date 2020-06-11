import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  color,
  LayoutContainer,
  Button,
  Heading,
  HeadingTypes,
  Hr,
  Icon,
  Link,
  Pictogram,
  Spinner,
  Text,
} from "responsive-it-common";
import { Appearance } from "responsive-it-common/dist/elements/button/appearance";
import { TextTypes } from "responsive-it-common/dist/elements/text/text-types";

storiesOf("02: Elements", module).add("Buttons", () => (
  <LayoutContainer>
    <Heading type={HeadingTypes.h2}>Some Heading</Heading>
    <Hr />
  </LayoutContainer>
));
