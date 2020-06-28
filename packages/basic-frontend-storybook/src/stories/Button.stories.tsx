import { action } from '@storybook/addon-actions';
import React from 'react';
import { ButtonRegular, ButtonType } from 'responsive-it-common';

export default {
  title: 'Design System / Elements / Buttons',
  component: ButtonRegular,
};

export const defaultStory = () => (
  <div className="flex flex-row">
    <div className="mr-4">
      <ButtonRegular text="Button Primary" onClick={action('clicked')} type={ButtonType.primary} />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Secondary"
        onClick={action('clicked')}
        type={ButtonType.secondary}
      />
    </div>
  </div>
);

defaultStory.storyName = 'All Icons';
