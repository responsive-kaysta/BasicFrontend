import { storiesOf } from "@storybook/react";
import {
  ContainerBasic,
  TextLead,
  TextRegular,
  Title,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 05 Layouts / Container", module).add(
  "ContainerBasic, no Theme",
  () => (
    <ContainerBasic>
      <Title>ContainerBasic component</Title>
      <TextLead>container mx-auto bg-gray-100 (default) text-gray-800</TextLead>
      <TextRegular>
        Contains the following components: [ContainerBasic] &gt; [Title] -
        [TextLead] - [TextRegular]
      </TextRegular>
    </ContainerBasic>
  ),
  {
    info: { source: true, inline: false },
  }
);
