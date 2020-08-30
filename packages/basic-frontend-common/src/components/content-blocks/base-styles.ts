import { ThemeType } from "../../typings";

export const baseStyles = (
  cssStyle?: string,
  paddingTop?: boolean,
  paddingBottom?: boolean,
  marginTop?: boolean,
  marginBottom?: boolean,
  theme?: ThemeType,
  centerContent?: boolean,
  containerContent?: boolean
) => {
  return `${containerContent ? "container" : "w-full"} ${
    paddingTop ? "pt-2 md:pt-4 xl:pt-6" : ""
  } ${paddingBottom ? "pb-2 md:pb-4 xl:pb-6" : ""} ${
    marginTop ? "mt-2 md:mt-4 xl:mt-6" : ""
  } ${marginBottom ? "mb-2 md:mb-4 xl:mb-6" : ""} ${
    centerContent ? "text-center" : "text-left"
  } ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  } ${cssStyle ? cssStyle : ""}`;
};
