import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonRegular, ButtonSize, ButtonType } from 'basic-frontend-common';

storiesOf('ColorButton', module)
  .add('red', () => (
    <ButtonRegular
      text="Size normal"
      size={ButtonSize.normal}
      type={ButtonType.primary}
      onClick={() => null}
    />
  ))
  .add('blue', () => (
    <ButtonRegular
      text="Size small"
      size={ButtonSize.small}
      type={ButtonType.primary}
      onClick={() => null}
    />
  ));
