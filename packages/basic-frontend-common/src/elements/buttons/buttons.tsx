import React, { FC } from "react";
import {
  buttonWrapper,
  styleAlarm,
  stylePrimary,
  styleSecondary,
  styleSpecial,
  styleTertiary,
  styleTransparent,
} from "./button-styles";
import { ButtonType, ButtonSize } from "./button-types";

type ButtonRegularProps = {
  text: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
};

export const ButtonRegular: FC<ButtonRegularProps> = ({
  text,
  type,
  size = ButtonSize.normal,
  disabled = false,
  onClick,
}) => {
  switch (type) {
    case ButtonType.primary: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={stylePrimary(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.secondary: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleSecondary(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.tertiary: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleTertiary(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.transparent: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleTransparent(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.alarm: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleAlarm(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.special: {
      return (
        <span className={buttonWrapper(size)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleSpecial(size)}
          >
            {text}
          </button>
        </span>
      );
    }
    default: {
      return (
        <span className={buttonWrapper(ButtonSize.normal)}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={stylePrimary(size)}
          >
            {text}
          </button>
        </span>
      );
    }
  }
};
