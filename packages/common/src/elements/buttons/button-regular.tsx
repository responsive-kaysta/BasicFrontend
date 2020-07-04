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
    case ButtonType.tertiary: {
      return (
        <span className={buttonWrapper}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleTertiary}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.transparent: {
      return (
        <span className={buttonWrapper}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleTransparent}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.alarm: {
      return (
        <span className={buttonWrapper}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleAlarm}
          >
            {text}
          </button>
        </span>
      );
    }
    case ButtonType.special: {
      return (
        <span className={buttonWrapper}>
          <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={styleSpecial}
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
