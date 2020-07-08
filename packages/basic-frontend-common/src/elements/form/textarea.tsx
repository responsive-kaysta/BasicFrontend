import React, { FC } from "react";

type InputProps = {
  id: string;
  name: string;
  comment?: string;
  rows?: number;
  label: string;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Textarea: FC<InputProps> = ({
  id,
  name,
  comment,
  rows,
  label,
  placeholderText,
  onInputChanged,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 w-full">
        <div className="w-full rounded-md shadow-sm">
          <textarea
            id={id}
            name={name}
            rows={rows ? rows : 3}
            placeholder={placeholderText}
            onChange={({ target: { value } }) => onInputChanged(value)}
            className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        {comment && <p className="mt-2 text-sm text-gray-500">{comment}</p>}
      </div>
    </div>
  );
};
