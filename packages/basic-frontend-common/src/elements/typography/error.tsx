import React, { FC, ReactNode } from 'react';
import {
  defFormError,
  defTextMargin,
  defTextPadding,
  ThemeLight,
} from '../../identity';
import { BaseProps } from './base-props';

type ErrorProps = BaseProps & {
  children: ReactNode;
};

export const Error: FC<ErrorProps> = ({
  children,
  marginBottom = false,
  marginTop = false,
  paddingBottom = false,
  paddingTop = false,
  theme = ThemeLight,
}) => {
  const style = `${
    theme ? theme.form.textErrorColor : 'text-red-500'
  } ${defFormError} ${defTextMargin(marginBottom, marginTop)} ${defTextPadding(
    paddingBottom,
    paddingTop
  )}`;

  return <label className={style}>{children}</label>;
};
