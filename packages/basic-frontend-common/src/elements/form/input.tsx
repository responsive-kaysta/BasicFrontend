import React, { FC } from "react";
import { ThemeType } from "../../identity";
import { FormBase } from "./form-base";
import { Comment } from "../typography";

type InputProps = {
  id: string;
  name: string;
  type: string;
  label?: string;
  legend?: string;
  comment?: string;
  theme?: ThemeType;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  label,
  legend,
  comment,
  theme,
  placeholderText,
  onInputChanged,
}) => {
  const style = `block appearance-none w-full ${
    theme ? theme.form.backgroundColor : "bg-white"
  } rounded border ${
    theme ? theme.form.borderColor : "border-gray-400"
  } hover:${
    theme ? theme.form.borderHoverColor : "border-gray-500"
  } shadow focus:outline-none focus:shadow-outline p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5`;

  return (
    <FormBase label={label} legend={legend} theme={theme}>
      <div className="w-full mt-1 mb-1 rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type}
          onChange={({ target: { value } }) => onInputChanged(value)}
          className={style}
          placeholder={placeholderText}
        />
      </div>
      {comment && <Comment>{comment}</Comment>}
    </FormBase>
  );
};
