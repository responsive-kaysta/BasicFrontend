import React from 'react';
import { action } from '@storybook/addon-actions';
import { Topbar, NavigationItems } from 'responsive-it-common';

const onChange = action('change');

const navigationItems: NavigationItems[] = [
  {
    text: 'foo',
    title: 'foo',
    link: '#',
  },
  {
    text: 'man',
    title: 'man',
    link: '#',
  },
  {
    text: 'chu',
    title: 'chu',
    link: '#',
  },
];

export default {
  title: 'Design System / Layout/ Topbar',
  component: Topbar,
};

export const defaultStory = () => (
  <Topbar menuItems={navigationItems} logo="responsive IT">
    Inhalte
  </Topbar>
);

defaultStory.storyName = '"Theme Default" Story';

export const themeLightStory = () => (
  <Topbar menuItems={navigationItems} logo="responsive IT">
    Inhalte
  </Topbar>
);

themeLightStory.storyName = '"Theme Light" Story';
