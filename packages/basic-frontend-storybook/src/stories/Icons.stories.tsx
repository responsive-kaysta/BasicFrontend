import { action } from '@storybook/addon-actions';
import React from 'react';
import { Icon, iconMap, allIconNames, IconSize } from 'responsive-it-common';

const onChange = action('change');

export default {
  title: 'Design System / Identity / Icons',
  component: Icon,
};

export const defaultStory = () => (
  <div>
    <ul className="flex flex-row flex-wrap">
      {allIconNames.map((key) => (
        <li key={key} className="flex flex-col items-center mb-8 mr-8">
          <Icon name={key} aria-label={key} size={IconSize.sm} />
          <div className="mt-2">{key}</div>
        </li>
      ))}
    </ul>
  </div>
);

defaultStory.storyName = 'All Icons';
