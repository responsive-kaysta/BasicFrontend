import React, { FC } from "react";
import { stylePrimary, styleSecondary, buttonWrapper } from "./button-styles";
import { ButtonType } from "./button-types";

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
  switch (type) {
    case ButtonType.primary: {
      return (
        <span className={buttonWrapper}>
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
        <span className={buttonWrapper}>
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
        <span className={buttonWrapper}>
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
