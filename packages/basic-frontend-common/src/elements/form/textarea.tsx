import React, { FC } from 'react';
import { FormBase } from './form-base';
import { FormBaseProps } from './form-base-props';

type TextareaProps = FormBaseProps & {
  id: string;
  name: string;
  rows?: number;
  error?: string;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Textarea: FC<TextareaProps> = ({
  id,
  name,
  legend,
  label,
  theme,
  rows,
  error,
  placeholderText,
  onInputChanged,
}) => {
  const style = `block appearance-none w-full ${
    theme ? theme.form.backgroundColor : 'bg-white'
  } rounded border ${
    theme ? theme.form.borderColor : 'border-gray-400'
  } hover:${
    theme ? theme.form.borderHoverColor : 'border-gray-500'
  } shadow focus:outline-none focus:shadow-outline p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
    theme ? theme.form.placeholderColor : 'placeholder-gray-800'
  }`;

  return (
    <FormBase
      label={label}
      htmlFor={id}
      legend={legend}
      theme={theme}
      error={error}
    >
      <div className="w-full mt-1 mb-1 rounded-md shadow-sm">
        <textarea
          id={id}
          name={name}
          rows={rows ? rows : 3}
          placeholder={placeholderText}
          onChange={({ target: { value } }) => onInputChanged(value)}
          className={style}
        />
      </div>
    </FormBase>
  );
};
