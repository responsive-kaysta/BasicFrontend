import React from 'react';
import { action } from '@storybook/addon-actions';
import { Topbar, NavigationItems, ThemeLight } from 'responsive-it-common';

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
  <Topbar menuItems={navigationItems} logo="responsive IT" theme={ThemeLight}>
    Inhalte
  </Topbar>
);

defaultStory.storyName = 'default';
