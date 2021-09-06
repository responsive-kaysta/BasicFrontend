import { ThemeType } from '../../typings';

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
  return `${containerContent ? 'container' : 'w-full'} ${
    paddingTop ? 'pt-4 md:pt-6 xl:pt-8' : ''
  } ${paddingBottom ? 'pb-4 md:pb-6 xl:pb-8' : ''} ${
    marginTop ? 'mt-4 md:mt-6 xl:mt-8' : ''
  } ${marginBottom ? 'mb-4 md:mb-6 xl:mb-8' : ''} ${
    centerContent ? 'text-center' : 'text-left'
  } ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : 'bg-gray-100 text-gray-800'
  } ${cssStyle ? cssStyle : ''}`;
};
