import React, { FC } from 'react';
import { Orientation } from '../../typings';
import { FormBase } from './form-base';
import { FormBaseProps } from './form-base-props';

type InputProps = FormBaseProps & {
  id: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  value,
  error,
  label,
  legend,
  theme,
  placeholderText,
  onInputChanged,
  orientation = Orientation.left,
}) => {
  const style = `block appearance-none w-full ${
    theme ? theme.form.backgroundColor : 'bg-white'
  } rounded border ${
    theme ? theme.form.borderColor : 'border-gray-400'
  } hover:${
    theme ? theme.form.borderHoverColor : 'border-gray-500'
  } shadow focus:outline-none focus:shadow-outline p-2 transition duration-150 ease-in-out ${
    orientation === Orientation.right ? 'text-right' : 'text-left'
  } sm:text-sm sm:leading-5 ${
    theme ? theme.form.placeholderColor : 'placeholder-gray-800'
  }`;

  return (
    <FormBase
      label={label}
      htmlFor={id}
      legend={legend}
      theme={theme}
      error={error}
      orientation={orientation}
    >
      <div className="w-full mt-1 mb-1 rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={({ target: { value } }) => onInputChanged(value)}
          className={style}
          placeholder={placeholderText}
        />
      </div>
    </FormBase>
  );
};
