import {
  ContainerBasic,
  Hruler,
  Link,
  PanelHeader,
  TextColumn,
  TextLead,
  TextRegular,
  Title,
  TitleAbstract,
  TitleSub,
} from "basic-frontend-common";
import React from "react";

export default {
  title: "Design System / Elements / Typography",
  component: [
    ContainerBasic,
    Hruler,
    Link,
    PanelHeader,
    TextColumn,
    TextLead,
    TextRegular,
    Title,
    TitleAbstract,
    TitleSub,
  ],
};

export const defaultStory = () => (
  <div className="flex flex-col">
    <Title>Title: Lorem ipsum dolor sit amet</Title>

    <Hruler />

    <TitleSub>TitleSub: Lorem ipsum dolor sit amet</TitleSub>

    <Hruler />

    <TitleAbstract>TitleAbstract: Lorem ipsum dolor sit amet</TitleAbstract>

    <Hruler />

    <TextRegular>
      TextRegular: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </TextRegular>

    <Hruler />

    <TextLead>
      TextLead: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </TextLead>

    <Hruler />

    <div>
      <Link text="Regular Link Element" href="https://responsive-it.biz" />
      <br />
      <Link text="Link new Window" href="https://responsive-it.biz" newWindow />
    </div>
    <Hruler />
  </div>
);

defaultStory.storyName = "Text-Elements";
