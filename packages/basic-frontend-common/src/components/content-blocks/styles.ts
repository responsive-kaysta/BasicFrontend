import { ThemeType } from "../../typings";

export const headerStyle = (
  theme?: ThemeType,
  centerContent?: boolean,
  containerContent?: boolean
) => {
  return `${
    containerContent ? "container" : "w-full"
  } pb-4 pt-4 md:pb-6 md:pt-6 xl:pb-8 xl:pt-8 ${
    centerContent ? "text-center" : "text-left"
  } ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
};
