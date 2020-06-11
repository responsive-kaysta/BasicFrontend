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

storiesOf("01: Identity", module).add("Pictograms", () => (
  <LayoutContainer>
    <Heading type={HeadingTypes.H2}>Some Heading</Heading>
    <Hr />
    <Icon icon="facehappy" aria-label="Happy face" /> icon (default)
    <Hr />
    <Button appearance={Appearance.SECONDARY}>Appearance.SECONDARY</Button>
    <Hr />
    <Link href="https://learnstorybook.com">default</Link>
    <Hr />
    <Pictogram pictogram="kuenstliche_intelligenz" /> Pictogram
    <Hr />
    <Text type={TextTypes.LABEL}>Some Text</Text>
    <Text>Some Paragraph Text</Text>
    <Hr />
    <Spinner />
  </LayoutContainer>
));
