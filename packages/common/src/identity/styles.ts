import { css } from "styled-components";

// Global style variables
export enum background {
  app = "#F6F3FC",
  appInverse = "#7A8997",
  positive = "#E1FFD4",
  negative = "#FEDED2",
  warning = "#FFF5CF",
  white = "white",
  transparent = "transparent",
  whitesmoke = "whitesmoke",
}

export enum color {
  // Palette
  primary = "#FF4785", // coral
  secondary = "#1EA7FD", // ocean
  tertiary = "#DDDDDD",

  orange = "#FC521F",
  gold = "#FFAE00",
  green = "#66BF3C",
  seafoam = "#37D5D3",
  purple = "#6F2CAC",
  ultraviolet = "#2A0481",
  darkgreen = "#1A867D",
  gray = "darkgray",

  // Monochrome
  lightest = "#FFFFFF",
  lighter = "#F8F8F8",
  light = "#F3F3F3",
  mediumlight = "#EEEEEE",
  medium = "#DDDDDD",
  mediumdark = "#999999",
  dark = "#666666",
  darker = "#444444",
  darkest = "#333333",

  border = "rgba(0,0,0,.1)",

  // Status
  positive = "#66BF3C",
  negative = "#FF4400",
  warning = "#E69D00",
}

export const spacing = {
  padding: {
    xsmall: 5,
    small: 10,
    medium: 20,
    large: 30,
    xlarge: 40,
  },
  margin: {
    xsmall: 0.5,
    small: 0.75,
    medium: 1.0,
    large: 1.5,
    xlarge: 1.5,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
  borderSize: {
    small: 1,
    medium: 3,
    large: 5,
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
    capitalize: "capitalize",
    uppercase: "uppercase",
    lowercase: "lowercase",
    fullWidth: "full-width",
  },
  decoration: {
    none: "none",
    underline: "underline",
    overline: "overline",
    lineThrough: "line-through",
    blink: "blink",
  },
} as const;

export const breakpoint = 300;
export const pageMargin = 5.55555;

export const pageMargins = css`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: ${breakpoint}px) {
    margin-left: ${pageMargin * 1}%;
    margin-right: ${pageMargin * 1}%;

    padding-top: ${spacing.padding.small}px;
    padding-bottom: ${spacing.padding.small}px;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-left: ${pageMargin * 2}%;
    margin-right: ${pageMargin * 2}%;

    padding-top: ${spacing.padding.small}px;
    padding-bottom: ${spacing.padding.small}px;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-left: ${pageMargin * 3}%;
    margin-right: ${pageMargin * 3}%;

    padding-top: ${spacing.padding.medium}px;
    padding-bottom: ${spacing.padding.medium}px;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-left: ${pageMargin * 4}%;
    margin-right: ${pageMargin * 4}%;

    padding-top: ${spacing.padding.large}px;
    padding-bottom: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-left: ${pageMargin * 5}%;
    margin-right: ${pageMargin * 5}%;

    padding-top: ${spacing.padding.large}px;
    padding-bottom: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-left: ${pageMargin * 5}%;
    margin-right: ${pageMargin * 5}%;

    padding-top: ${spacing.padding.xlarge}px;
    padding-bottom: ${spacing.padding.xlarge}px;
  }
`;

export const contentPadding = css`
  @media (min-width: ${breakpoint}px) {
    padding-bottom: ${spacing.padding.xsmall}px;
  }

  @media (min-width: ${breakpoint * 2}px) {
    padding-bottom: ${spacing.padding.small}px;
  }

  @media (min-width: ${breakpoint * 3}px) {
    padding-bottom: ${spacing.padding.medium}px;
  }

  @media (min-width: ${breakpoint * 4}px) {
    padding-bottom: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 5}px) {
    padding-bottom: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 6}px) {
    padding-bottom: ${spacing.padding.xlarge}px;
  }
`;

export const contentMargin = css`
  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.small}rem;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.small}rem;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium}rem;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-bottom: ${spacing.margin.large}rem;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-bottom: ${spacing.margin.large}rem;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-bottom: ${spacing.margin.xlarge}rem;
  }
`;
