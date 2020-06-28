import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  ContainerBasic,
  PanelHeader,
  TextColumn,
  TextLead,
  TextRegular,
  Title,
  TitleAbstract,
  TitleSub,
  Hruler,
} from 'responsive-it-common';

const onChange = action('change');

export default {
  title: 'Design System / Elements / Typography',
  component: PanelHeader,
};

export const defaultStory = () => (
  <>
    <ContainerBasic>
      <PanelHeader header="Component: Title">
        <Title>Lorem ipsum dolor sit amet</Title>
      </PanelHeader>

      <Hruler />

      <PanelHeader header="Component: TitleSub">
        <TitleSub>Lorem ipsum dolor sit amet</TitleSub>
      </PanelHeader>

      <Hruler />

      <PanelHeader header="Component: TitleAbstract">
        <TitleAbstract>Lorem ipsum dolor sit amet</TitleAbstract>
      </PanelHeader>

      <Hruler />

      <PanelHeader header="Component: TextRegular">
        <TextRegular>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </TextRegular>
      </PanelHeader>

      <Hruler />

      <PanelHeader header="Component: TextLead">
        <TextLead>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </TextLead>
      </PanelHeader>

      <Hruler />

      <PanelHeader header="Component: TextColumn">
        <TextColumn>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
          odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
          ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        </TextColumn>
      </PanelHeader>
    </ContainerBasic>
  </>
);

defaultStory.storyName = 'Typography Elements';
