import React, { FC } from "react";
import { ThemeLight } from "../../identity";
import { IntroBaseProps } from "./base-props";
import { baseStyles } from "./base-styles";

export const IntroBase: FC<IntroBaseProps> = ({
  children,
  cssStyle,
  elementId,
  paddingTop = true,
  paddingBottom = true,
  marginTop = false,
  marginBottom = false,
  theme = ThemeLight,
  centerContent = false,
  containerContent = false,
}) => {
  return (
    <header
      className={baseStyles(
        cssStyle,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom,
        theme,
        centerContent,
        containerContent
      )}
      id={elementId}
    >
      {children}
    </header>
  );
};
