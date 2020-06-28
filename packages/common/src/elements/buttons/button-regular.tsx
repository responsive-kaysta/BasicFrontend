import React, { FC } from "react";

export enum ButtonType {
  primary,
  secondary,
}

type ButtonRegularProps = {
  text: string;
  type: ButtonType;
  onClick: () => void;
  disabled?: boolean;
};

export const ButtonRegular: FC<ButtonRegularProps> = ({
  text,
  type,
  onClick,
  disabled = false,
}) => {
  const stylePrimary =
    "inline-flex items-center px-3 py-2 border border-gray-400 text-sm leading-4 font-medium rounded-md text-gray-800 bg-gray-100 active:bg-gray-200 active:bg-gray-300 transition ease-in-out duration-150";
  const styleSecondary =
    "inline-flex items-center px-3 py-2 border border-gray-400 text-sm leading-4 font-medium rounded-md text-gray-800 bg-gray-100 active:bg-gray-200 active:bg-gray-300 transition ease-in-out duration-150";

  switch (type) {
    case ButtonType.primary: {
      return (
        <span className="inline-flex rounded-md shadow-md hover:shadow-lg">
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={stylePrimary}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.secondary: {
      return (
        <span className="inline-flex rounded-md shadow-md hover:shadow-lg">
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleSecondary}
          >
            {text}
          </button>
        </span>
      );
    }
    default: {
      return (
        <span className="inline-flex rounded-md shadow-md hover:shadow-lg">
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={stylePrimary}
          >
            {text}
          </button>
        </span>
      );
    }
  }
};
