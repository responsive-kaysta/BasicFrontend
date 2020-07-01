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
    "inline-flex items-center px-2 py-2 md:px-4 md:py-4 border-2 border-gray-400 rounded-lg text-sm leading-4 font-medium text-gray-700 bg-gray-100 active:bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150";
  const styleSecondary =
    "inline-flex items-center px-2 py-2 md:px-4 md:py-4 border-2 border-gray-600 rounded-lg text-sm leading-4 font-medium text-white bg-orange-400 active:bg-orange-600 hover:bg-orange-500 transition ease-in-out duration-150";

  switch (type) {
    case ButtonType.primary: {
      return (
        <span className="inline-flex shadow-md rounded-lg hover:shadow-lg">
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
        <span className="inline-flex shadow-md rounded-lg hover:shadow-lg">
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
        <span className="inline-flex shadow-md rounded-lg hover:shadow-lg">
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
