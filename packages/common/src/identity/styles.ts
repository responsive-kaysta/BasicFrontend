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

  border = "rgba(0,0,0,.1)",

  orange = "#FC521F",
  gold = "#FFAE00",
  green = "#66BF3C",
  seafoam = "#37D5D3",
  purple = "#6F2CAC",
  ultraviolet = "#2A0481",
  darkgreen = "#1A867D",
  darkgray = "darkgray",

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
    xsmall: 1,
    small: 1.125,
    medium: 1.5,
    large: 1.625,
    xlarge: 1.75,
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
    s1: "0.625em",
    s2: "0.75em",
    s3: "0.875em",
    m1: "1em",
    m2: "1.125em",
    m3: "1.25em",
    l1: "1.375em",
    l2: "1.5em",
    l3: "1.625em",
    code: "1.25em",
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
    margin-left: ${pageMargin}%;
    margin-right: ${pageMargin}%;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-left: ${pageMargin * 2}%;
    margin-right: ${pageMargin * 2}%;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-left: ${pageMargin * 3}%;
    margin-right: ${pageMargin * 3}%;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-left: ${pageMargin * 4}%;
    margin-right: ${pageMargin * 4}%;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-left: ${pageMargin * 5}%;
    margin-right: ${pageMargin * 5}%;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-left: ${pageMargin * 5}%;
    margin-right: ${pageMargin * 5}%;
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
    margin-bottom: ${spacing.margin.xsmall}rem;
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

export const contentMarginSmall = css`
  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.xsmall / 2}rem;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.small / 2}rem;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium / 2}rem;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-bottom: ${spacing.margin.large / 2}rem;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-bottom: ${spacing.margin.large / 2}rem;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-bottom: ${spacing.margin.xlarge / 2}rem;
  }
`;

export const contentMarginBig = css`
  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.xsmall * 2}rem;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.small * 2}rem;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium * 2}rem;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-bottom: ${spacing.margin.large * 2}rem;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-bottom: ${spacing.margin.large * 2}rem;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-bottom: ${spacing.margin.xlarge * 2}rem;
  }
`;
