import { action } from '@storybook/addon-actions';
import React from 'react';
import { ContainerBasic, PanelHeader, TextRegular } from 'responsive-it-common';

const onChange = action('change');

export default {
  title: 'Design System / Elements / Typography',
  component: PanelHeader,
};

export const defaultStory = () => (
  <ContainerBasic>
    <PanelHeader header="text-regular">
      <TextRegular>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum.
      </TextRegular>
    </PanelHeader>
  </ContainerBasic>
);

defaultStory.storyName = 'Typography Elements';
