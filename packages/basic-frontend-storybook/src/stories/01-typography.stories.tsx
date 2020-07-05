import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  ContainerBasic,
  Title,
  TitleSub,
  TitleAbstract,
  TextRegular,
  TextLead,
} from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 01 Identity", module).add("Typography", () => (
  <ContainerBasic>
    <Title>{text("Title", "Lorem ipsum dolor sit amet")}</Title>
    <TitleSub>
      {text(
        "TitleSub",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
      )}
    </TitleSub>
    <TitleAbstract>
      {text(
        "TitleAbstract",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
      )}
    </TitleAbstract>
    <TextLead>
      {text(
        "TextLead",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      )}
    </TextLead>
    <TextRegular>
      {text(
        "TextRegular",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      )}
    </TextRegular>
  </ContainerBasic>
));
