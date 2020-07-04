import { action } from '@storybook/addon-actions';
import React from 'react';
import { ButtonRegular, ButtonType, Hruler } from 'responsive-it-common';

export default {
  title: 'Design System / Elements / Buttons',
  component: ButtonRegular,
};

export const defaultStory = () => (
  <div className="flex flex-row">
    <div className="mr-4">
      <ButtonRegular
        text="Button Primary"
        onClick={action('Button Primary clicked')}
        type={ButtonType.primary}
      />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Secondary"
        onClick={action('Button Secondary clicked')}
        type={ButtonType.secondary}
      />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Tertiary"
        onClick={action('Button Tertiary clicked')}
        type={ButtonType.tertiary}
      />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Special"
        onClick={action('Button Special clicked')}
        type={ButtonType.special}
      />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Transparent"
        onClick={action('Button Transparent clicked')}
        type={ButtonType.transparent}
      />
    </div>
    <div className="mr-4">
      <ButtonRegular
        text="Button Alarm"
        onClick={action('Button Alarm clicked')}
        type={ButtonType.alarm}
      />
    </div>
  </div>
);

defaultStory.storyName = 'All Buttons';
