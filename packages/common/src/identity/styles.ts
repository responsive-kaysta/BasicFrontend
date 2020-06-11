import { css } from "styled-components";

// Global style variables
export enum background {
  app = "#F6F9FC",
  appInverse = "#7A8997",
  positive = "#E1FFD4",
  negative = "#FEDED2",
  warning = "#FFF5CF",
  transparent = "transparent",
  whitesmoke = "whitesmoke",
}

export const color = {
  // Palette
  primary: "#FF4785", // coral
  secondary: "#1EA7FD", // ocean
  tertiary: "#DDDDDD",

  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",

  darkgreen: "#1a867d",
  gray: "darkgray",

  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F8F8F8",
  light: "#F3F3F3",
  mediumlight: "#EEEEEE",
  medium: "#DDDDDD",
  mediumdark: "#999999",
  dark: "#666666",
  darker: "#444444",
  darkest: "#333333",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary:
      '"Trebuchet MS", "Lucida Sans Unicode", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
  transform: {
    none: "none",
  },
  decoration: {
    none: "none",
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  @media (min-width: ${breakpoint * 1}px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${pageMargin * 3}%;
    margin-right: ${pageMargin * 3}%;

    padding: ${spacing.padding.small}px;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${pageMargin * 4}%;
    margin-right: ${pageMargin * 4}%;

    padding: ${spacing.padding.medium}px;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${pageMargin * 5}%;
    margin-right: ${pageMargin * 5}%;

    padding: ${spacing.padding.large}px;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: ${pageMargin * 6}%;
    margin-right: ${pageMargin * 6}%;

    padding: ${spacing.padding.large}px;
  }
`;
