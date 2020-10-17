import React, { FC } from 'react';
import { Error, Label, Legend } from '../typography';
import { FormBaseProps } from './form-base-props';

export const FormBase: FC<FormBaseProps> = ({
  children,
  label,
  legend,
  error,
  theme,
  htmlFor,
}) => {
  const style = `flex flex-col`;
  return (
    <div className={style}>
      {legend && <Legend theme={theme}>{legend}</Legend>}
      {label && (
        <Label theme={theme} htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      {children}
      {error && <Error theme={theme}>{error}</Error>}
    </div>
  );
};
