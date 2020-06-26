import { action } from '@storybook/addon-actions';
import React, { FC } from 'react';
import { ContainerBasic, Footer, NavigationItems, Topbar } from 'responsive-it-common';

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

const CompFooter: FC = () => {
  return (
    <Footer>
      <div className="pt-2 text-xs sm:text-base">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div className="pt-2 pb-2 text-xs sm:text-base">
        2020 &copy responsive IT - finest full-stack development
      </div>
    </Footer>
  );
};

export const defaultStory = () => (
  <Topbar menuItems={navigationItems} logo="responsive IT" footer={<CompFooter />}>
    <ContainerBasic>
      <h1 className="text-2xl font-semibold text-gray-800">Theme: none</h1>

      <div className="m-0 p-0 overflow-y-auto">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-full">Lorem ipsum</div>
      </div>
    </ContainerBasic>
  </Topbar>
);

defaultStory.storyName = 'Theme: none';

export const themeLightStory = () => (
  <Topbar menuItems={navigationItems} logo="responsive IT">
    Inhalte
  </Topbar>
);

themeLightStory.storyName = 'Theme: Light';
