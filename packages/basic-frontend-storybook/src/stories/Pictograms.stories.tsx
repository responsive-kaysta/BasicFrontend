import { action } from '@storybook/addon-actions';
import React from 'react';
import { Pictogram, allPictogramNames, PictogramSize } from 'responsive-it-common';

const onChange = action('change');

export default {
  title: 'Design System / Identity / Pictograms',
  component: Pictogram,
};

export const defaultStory = () => (
  <div>
    <ul className="flex flex-row flex-wrap">
      {allPictogramNames.map((key) => (
        <li key={key} className="flex flex-col items-center mb-8 mr-8 text-gray-900">
          <Pictogram name={key} aria-label={key} size={PictogramSize.sm} />
          <div className="mt-2">{key}</div>
        </li>
      ))}
    </ul>
  </div>
);

defaultStory.storyName = 'All Pictograms';
