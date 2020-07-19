import React, { FC } from "react";
import { ThemeType } from "../../identity";
import { FormBase } from "./form-base";
import { Comment } from "../typography";

type TextareaProps = {
  id: string;
  name: string;
  label?: string;
  legend?: string;
  comment?: string;
  theme?: ThemeType;
  rows?: number;
  placeholderText: string;
  onInputChanged: (value: string | null) => void;
};

export const Textarea: FC<TextareaProps> = ({
  id,
  name,
  label,
  legend,
  comment,
  theme,
  rows,
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
        <textarea
          id={id}
          name={name}
          rows={rows ? rows : 3}
          placeholder={placeholderText}
          onChange={({ target: { value } }) => onInputChanged(value)}
          className={style}
        />
      </div>
      {comment && <Comment>{comment}</Comment>}
    </FormBase>
  );
};
