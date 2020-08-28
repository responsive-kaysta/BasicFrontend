import { ThemeType } from "../../typings";

export const headerStyle = (
  theme?: ThemeType,
  centerContent?: boolean,
  containerContent?: boolean
) => {
  return `${
    containerContent ? "container" : "w-full"
  } pb-2 pt-2 md:pb-4 md:pt-4 xl:pb-6 xl:pt-6 ${
    centerContent ? "text-center" : "text-left"
  } ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
};
